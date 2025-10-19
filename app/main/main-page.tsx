import { CountdownTimer } from "components/countdown-timer";
import { ChevronsDown } from "lucide-react";
import { SecureSpotButton } from "components/secure-spot-button";
import { EventHighlights } from "components/event-highlights";
import { LastYear } from "components/last-year";
import { Location } from "components/location";

export function MainPage() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-center text-[#fffbe6] pt-10">
      <div className="relative w-full max-w-[70vh] h-[40vh] lg:h-[50vh] overflow-hidden bg-[url('/atas.png')] bg-cover bg-center flex flex-col items-center justify-center">
        <img
          src="/hero.png"
          alt="Hero background"
          className="mx-auto w-full max-w-[600px] pointer-events-none select-none"
        />
      </div>

      <div className="z-10 mt-32">
        <CountdownTimer targetDate={new Date("2025-10-31T00:00:00")} />
      </div>

      <div className="relative w-full max-w-[70vh] h-[60vh] overflow-hidden max-lg:bg-[url('/period.png')] bg-cover bg-center flex flex-col items-center justify-center pb-10 mt-10">
        <div className="z-10 flex flex-col items-center animate-bounce-slow mb-6 max-lg:-translate-y-10">
          <span className="font-normal text-halloween-3 text-xl mb-2">
            Scroll Down
          </span>
          <ChevronsDown className="w-8 h-5 text-halloween-3 scale-x-[1.8]" />
        </div>

        <div className="z-10 pt-16">
          <SecureSpotButton />
        </div>
      </div>

      <div className="z-10 pt-4">
        <EventHighlights />
      </div>

      <div className="z-10 pt-4">
        <LastYear />
      </div>

      <div className="z-10 -translate-y-40">
        <div className="absolute">
          <img
            src="/virgo.png"
            alt="Virgo decoration"
            className="relative w-full h-auto translate-x-[-50%] md:hidden"
          />
        </div>
        <Location />
      </div>

      <div className="relative w-full -translate-y-16">
        <div className="absolute bottom-[-80px] w-full h-[40vh] lg:h-[50vh] bg-[url('/atas.png')] bg-cover bg-center opacity-90 pointer-events-none select-none"></div>
      </div>

      <div className="z-10 pt-16 pb-24 flex flex-col items-center text-center text-[#FEFBC1] -translate-y-36">
        <h2 className="text-lg md:text-xl text-[#C44B1A] tracking-widest mb-4">
          ERROR 404: COSTUME NOT FOUND
        </h2>
        <p className="text-2xl md:text-3xl leading-snug max-w-xl">
          DON'T BE THAT BUG.
          <br />
          COME IN YOUR BOO-EST FIT.
        </p>
      </div>

      <div className="pt-10 absolute translate-y-1/2 bottom-0 w-full h-[40vh] max-lg:bg-[url('/period.png')] bg-cover bg-center opacity-80 pointer-events-none select-none"></div>
    </main>
  );
}
