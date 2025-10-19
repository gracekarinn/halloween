import { Button } from "./ui/button";

export function SecureSpotButton() {
  return (
    <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 flex justify-center items-center">
      <div className="absolute top-1/2 -translate-y-1/2 w-[420px] h-[180px] rounded-[371px] bg-[#FCF9C2] opacity-30 blur-[57px]" />
      <Button
        asChild
        className="relative z-10 rounded-[40px] text-2xl border-[4px] border-[#B0B561] bg-halloween-3 text-halloween-1 font-normal px-8 py-5 shadow-[0_0_75px_rgba(252,249,194,0.60)] transition-transform hover:scale-105 hover:shadow-[0_0_90px_rgba(252,249,194,0.80)]"
      >
        <a href="https://test.com" target="_blank" rel="noopener noreferrer">
          SECURE YOUR SPOT!
        </a>
      </Button>
    </div>
  );
}
