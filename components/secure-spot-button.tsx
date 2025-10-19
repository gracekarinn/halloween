import { Button } from "./ui/button";

export function SecureSpotButton() {
  return (
    <Button
      asChild
      className="rounded-[40px] text-2xl border-[4px] border-[#B0B561] bg-halloween-3 text-halloween-1 font-normal px-8 py-5 shadow-[0_0_75px_rgba(252,249,194,0.60)] transition-transform hover:scale-105 hover:shadow-[0_0_90px_rgba(252,249,194,0.80)]"
    >
      <a
        href="https://your-form-link-here.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        SECURE YOUR SPOT!
      </a>
    </Button>
  );
}
