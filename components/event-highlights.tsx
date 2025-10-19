export function EventHighlights() {
  return (
    <section className="flex flex-row justify-between items-end w-full max-w-3xl mx-auto text-[#FEFBC1] font-bold text-lg md:text-xl px-4 gap-x-10 pt-4">
      <div className="flex flex-col gap-1 md:gap-6 items-start">
        <div className="flex items-center gap-3">
          <img
            src="/star.png"
            alt="star"
            className="w-4 h-4 md:w-5 md:h-5 object-contain"
          />
          <span>Free Flow</span>
          <span className="text-sm md:text-base font-normal opacity-80">
            till 23:55
          </span>        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <img
              src="/star.png"
              alt="star"
              className="w-4 h-4 md:w-5 md:h-5 object-contain"
            />
            <span>Best Costumes</span>
          </div>
          <ul className="ml-8 mt-1 font-normal text-base md:text-lg list-disc">
            <li>Single</li>
            <li>Couple</li>
          </ul>
        </div>

        <div className="flex items-center gap-3">
          <img
            src="/star.png"
            alt="star"
            className="w-4 h-4 md:w-5 md:h-5 object-contain"
          />
          <span>DJ Performance</span>
        </div>
      </div>

      <div className="flex flex-col items-end text-right gap-2 min-w-[120px]">
        <span className="text-base md:text-lg self-end w-full text-right">
          Only
        </span>
        <span className="text-4xl md:text-5xl font-bold leading-tight w-full text-right">
          185K
        </span>
        <span className="text-base md:text-lg w-full text-right">
          FUN ALL NIGHT
        </span>
      </div>
    </section>
  );
}
