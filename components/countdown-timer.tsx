import CountdownLib from "react-countdown";

const Countdown = (CountdownLib as any).default || CountdownLib;

type CountdownTimerProps = {
  targetDate: Date;
  onComplete?: () => void;
};

export function CountdownTimer({
  targetDate,
  onComplete,
}: CountdownTimerProps) {
  return (
    <div className="flex flex-col items-center text-halloween-1 dark:text-halloween-4">
      <Countdown
        date={targetDate}
        onComplete={onComplete}
        renderer={({
          days,
          hours,
          minutes,
          seconds,
        }: {
          days: number;
          hours: number;
          minutes: number;
          seconds: number;
        }) => (
          <div className="flex gap-6 text-3xl font-semibold">
            <div className="flex flex-col items-center">
              <span>{days}</span>
              <span className="text-halloween-3 text-sm">Days</span>
            </div>
            <div className="flex flex-col items-center">
              <span>{hours}</span>
              <span className="text-halloween-3 text-sm">Hours</span>
            </div>
            <div className="flex flex-col items-center">
              <span>{minutes}</span>
              <span className="text-halloween-3 text-sm">Minutes</span>
            </div>
            <div className="flex flex-col items-center">
              <span>{seconds}</span>
              <span className="text-halloween-3 text-sm">Seconds</span>
            </div>
          </div>
        )}
      />
    </div>
  );
}
