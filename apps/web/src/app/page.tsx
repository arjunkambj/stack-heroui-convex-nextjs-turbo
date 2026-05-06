import { Button } from "@heroui/react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto flex justify-end px-4 py-4">
      <Link href="/sign-in">
        <Button>Sign In</Button>
      </Link>
    </div>
  );
}
