import { CountdownTimer } from "components/countdown-timer";

export function MainPage() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <CountdownTimer targetDate={new Date("2025-10-31T00:00:00")} />
    </main>
  );
}
