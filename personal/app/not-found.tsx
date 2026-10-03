import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BenderArt } from "@/components/bender/bender-art";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center px-4 py-20 text-center">
      <div className="w-40">
        <BenderArt name="404" alt="A Bender-style robot shrugging" />
      </div>
      <h1 className="mt-6 text-5xl font-bold">404</h1>
      <p className="mt-3 text-lg text-muted-foreground">
        Whatever you were looking for isn&apos;t here. I checked. Twice. Okay, once.
      </p>
      <Button asChild className="mt-6">
        <Link href="/">Take me home</Link>
      </Button>
    </div>
  );
}
