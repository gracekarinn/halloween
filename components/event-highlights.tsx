export function EventHighlights() {
  return (
    <section className="flex flex-row justify-between items-center w-full max-w-3xl mx-auto text-[#FEFBC1] font-bold text-lg md:text-xl px-4 gap-x-10 pt-4">
      {/* Left section */}
      <div className="flex flex-col gap-1 md:gap-6 items-start text-left">
        {/* Free Flow */}
        <div className="flex flex-col items-start text-left">
          <div className="flex items-center gap-3">
            <img
              src="/star.png"
              alt="star"
              className="w-4 h-4 md:w-5 md:h-5 object-contain"
            />
            <span>Free Flow</span>
            <span className="text-sm md:text-base font-normal opacity-80">
              till 23:55
            </span>
          </div>
          <ul className="ml-8 mt-1 font-normal text-base md:text-lg list-disc text-left">
            <li>Iceland</li>
            <li>Kawa-Kawa</li>
            <li>Coke</li>
            <li>Sprite</li>
            <li>Free Mineral Water</li>
            <li>Snacks!</li>
          </ul>
        </div>

        {/* Best Costumes */}
        <div className="flex flex-col items-start text-left">
          <div className="flex items-center gap-3">
            <img
              src="/star.png"
              alt="star"
              className="w-4 h-4 md:w-5 md:h-5 object-contain"
            />
            <span>Best Costumes</span>
          </div>
          <ul className="ml-8 mt-1 font-normal text-base md:text-lg list-disc text-left">
            <li>Single</li>
            <li>Couple</li>
          </ul>
        </div>

        {/* DJ Performance */}
        <div className="flex items-center gap-3">
          <img
            src="/star.png"
            alt="star"
            className="w-4 h-4 md:w-5 md:h-5 object-contain"
          />
          <span>DJ Performance</span>
        </div>
      </div>

      {/* Right section (Price) */}
      <div className="flex flex-col items-center text-right min-w-[120px]">
        <span className="text-base md:text-lg self-end w-full text-right">
          RSVP Only
        </span>
        <span className="text-4xl md:text-5xl font-bold leading-tight w-full text-right">
          185K
        </span>
        <span className="text-sm md:text-base opacity-80 w-full text-right">
          OTS 200K
        </span>
        <span className="text-base md:text-lg w-full text-right">
          FUN ALL NIGHT
        </span>
      </div>
    </section>
  );
}
