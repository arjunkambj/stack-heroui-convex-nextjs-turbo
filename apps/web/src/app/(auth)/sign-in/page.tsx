"use client";

import { useStackApp } from "@stackframe/stack";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Separator } from "@/components/ui/separator";

export default function SignInPage() {
  const app = useStackApp();

  const [email, setEmail] = useState("");
  const [step, setStep] = useState<"email" | "otp">("email");
  const [nonce, setNonce] = useState("");
  const [otp, setOtp] = useState("");
  const [isEmailLoading, setIsEmailLoading] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);

  const handleSendMagicLink = async (
    source: "initial" | "resend" = "initial",
  ) => {
    if (source === "resend" && resendCooldown > 0) {
      return;
    }

    if (!email) {
      toast.error("Please enter your email address.");
      return;
    }

    setIsEmailLoading(true);

    try {
      const result = await app.sendMagicLinkEmail(email);
      if (result.status === "error") {
        toast.error("Could not send verification code. Please try again.");
      } else {
        setNonce(result.data.nonce);
        setOtp("");
        setStep("otp");
        setResendCooldown(20);
        toast.success("Verification code sent! Check your email.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsEmailLoading(false);
    }
  };

  useEffect(() => {
    if (step !== "otp" || resendCooldown <= 0) return;

    const timer = window.setTimeout(() => {
      setResendCooldown((current) => Math.max(current - 1, 0));
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [step, resendCooldown]);

  useEffect(() => {
    if (otp.length !== 6 || isVerifying) return;

    const verify = async () => {
      setIsVerifying(true);
      try {
        const result = await app.signInWithMagicLink(otp + nonce);
        if (result.status === "error") {
          toast.error("Invalid code. Please try again.");
          setOtp("");
        }
      } catch {
        toast.error("Something went wrong. Please try again.");
        setOtp("");
      } finally {
        setIsVerifying(false);
      }
    };

    void verify();
  }, [otp, nonce, isVerifying, app]);

  return (
    <div className="flex w-full sm:max-w-sm flex-col gap-6 mx-auto">
      <div className="text-center">
        <h1 className="font-display text-2xl font-bold tracking-tight text-foreground">
          Welcome to Unifeed
        </h1>
        <p className="mt-2 text-sm text-muted-foreground font-light">
          {step === "email"
            ? "Enter your email to continue"
            : `We sent a code to ${email}`}
        </p>
      </div>

      {step === "email" ? (
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            void handleSendMagicLink("initial");
          }}
        >
          <div className="relative">
            <Icon
              icon="solar:letter-linear"
              className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground"
            />
            <Input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-10 text-base pl-10"
            />
          </div>

          <Button type="submit" disabled={isEmailLoading} size="lg">
            {isEmailLoading ? (
              <Icon icon="svg-spinners:180-ring-with-bg" width={18} />
            ) : null}
            {isEmailLoading ? "Sending..." : "Continue with Email"}
          </Button>
        </form>
      ) : (
        <div className="flex flex-col items-center gap-5 pt-1">
          <p className="text-center text-sm text-stone-500 font-light">
            Enter the 6-character code from your email
          </p>
          <InputOTP
            maxLength={6}
            value={otp}
            onChange={(value) => setOtp(value.toUpperCase())}
            disabled={isVerifying}
            containerClassName="w-full justify-center gap-3"
          >
            <InputOTPGroup>
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <InputOTPSlot key={index} index={index} />
              ))}
            </InputOTPGroup>
          </InputOTP>
          {isVerifying ? (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Icon icon="svg-spinners:180-ring-with-bg" width={16} />{" "}
              Verifying...
            </div>
          ) : null}
          <div className="flex flex-col items-center gap-2 text-sm">
            <p className="text-xs text-muted-foreground">
              {resendCooldown > 0
                ? `Resend available in ${resendCooldown}s`
                : "Didn't get the code?"}
            </p>
            <div className="flex items-center gap-4">
              <button
                type="button"
                disabled={isEmailLoading || resendCooldown > 0}
                onClick={() => void handleSendMagicLink("resend")}
                className="hover:text-primary transition-colors"
              >
                {isEmailLoading ? "Sending..." : "Resend code"}
              </button>
              <span className="text-muted-foreground">|</span>
              <button
                type="button"
                onClick={() => {
                  setStep("email");
                  setOtp("");
                  setNonce("");
                  setResendCooldown(0);
                }}
                className="hover:text-primary transition-colors"
              >
                Use a different email
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center gap-3">
        <Separator className="flex-1 bg-border" />
        <span className="text-xs text-muted-foreground font-medium">OR</span>
        <Separator className="flex-1 bg-border" />
      </div>

      <Button
        variant="secondary"
        disabled={isGoogleLoading}
        size="lg"
        onClick={async () => {
          setIsGoogleLoading(true);
          await app.signInWithOAuth("google");
          setIsGoogleLoading(false);
        }}
      >
        {isGoogleLoading ? (
          <Icon icon="svg-spinners:180-ring-with-bg" width={18} />
        ) : (
          <Icon icon="logos:google-icon" width={18} />
        )}
        {isGoogleLoading ? "Redirecting..." : "Continue with Google"}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} Unifeed. All rights reserved.
      </p>
    </div>
  );
}
