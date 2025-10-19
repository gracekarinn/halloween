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
    <div className="flex flex-col items-center text-[#fffbe6]">
      <h3 className="text-sm md:text-2xl text-halloween-3 tracking-wide mb-4">
        31 October 2025
      </h3>
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
          <div className="flex gap-4 md:gap-6 text-[40px] font-semibold">
            {[
              { label: "Days", value: days },
              { label: "Hours", value: hours },
              { label: "Minutes", value: minutes },
              { label: "Seconds", value: seconds },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-2"
              >
                <div
                  className="flex items-center justify-center w-16 h-16"
                  style={{
                    borderRadius: "8px",
                    border: "1px solid #FAF2ED",
                    background: "#85876A",
                    boxShadow: "0 0 27.475px 0 rgba(252, 249, 194, 0.60)",
                  }}
                >
                  <span>{item.value}</span>
                </div>
                <span className="text-[#FAF2ED] text-xs md:text-sm font-normal">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        )}
      />
    </div>
  );
}
