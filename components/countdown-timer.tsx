import { Link } from "react-router-dom";
import Countdown from "react-countdown";

const targetDate = new Date("2025-10-31T00:00:00");

export default function CountdownTimer() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-halloween-1 text-halloween-4 font-sans text-center">
      <Countdown
        date={targetDate}
        renderer={({ days, hours, minutes, seconds }) => (
          <div className="flex gap-6 text-4xl font-semibold">
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
      <Link
        to="/home"
        className="mt-12 bg-halloween-3 text-halloween-1 px-6 py-3 rounded-xl text-lg font-semibold hover:bg-halloween-2 transition"
      >
        Enter Memek
      </Link>
    </div>
  );
}
