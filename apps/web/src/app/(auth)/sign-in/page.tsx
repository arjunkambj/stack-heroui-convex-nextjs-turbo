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
    <div className="flex w-full max-w-sm flex-col gap-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Welcome to Unifeed</h1>
        <p className="mt-2 text-sm text-muted-foreground">
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
              icon="ph:envelope"
              width={20}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/80"
            />
            <Input
              type="email"
              placeholder="you@example.com"
              className="pl-10"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <Button type="submit" className="w-full" disabled={isEmailLoading}>
            {isEmailLoading ? (
              <Icon icon="svg-spinners:180-ring-with-bg" width={18} />
            ) : null}
            {isEmailLoading ? "Sending..." : "Continue with Email"}
          </Button>
        </form>
      ) : (
        <div className="flex flex-col items-center gap-5 pt-1">
          <p className="text-center text-sm text-muted-foreground">
            Enter the 6-character code from your email
          </p>
          <InputOTP
            maxLength={6}
            value={otp}
            onChange={(value) => setOtp(value.toUpperCase())}
            disabled={isVerifying}
            containerClassName="w-full justify-center"
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
            <p className="text-xs text-muted-foreground/80">
              {resendCooldown > 0
                ? `Resend available in ${resendCooldown}s`
                : "Didn't get the code?"}
            </p>
            <button
              type="button"
              className="text-muted-foreground transition-colors hover:text-foreground disabled:opacity-50"
              disabled={isEmailLoading || resendCooldown > 0}
              onClick={() => void handleSendMagicLink("resend")}
            >
              {isEmailLoading ? "Sending..." : "Resend code"}
            </button>
            <button
              type="button"
              className="text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => {
                setStep("email");
                setOtp("");
                setNonce("");
                setResendCooldown(0);
              }}
            >
              Use a different email
            </button>
          </div>
        </div>
      )}

      <div className="flex items-center gap-3">
        <Separator className="flex-1" />
        <span className="text-xs text-muted-foreground/80">OR</span>
        <Separator className="flex-1" />
      </div>

      <Button
        variant="secondary"
        className="w-full"
        disabled={isGoogleLoading}
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

      <p className="text-center text-xs text-muted-foreground/80">
        &copy; {new Date().getFullYear()} Unifeed. All rights reserved.
      </p>
    </div>
  );
}
