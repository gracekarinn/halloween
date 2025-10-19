export function EventHighlights() {
  return (
    <section className="flex flex-row justify-between items-center w-full max-w-3xl mx-auto text-[#FEFBC1] font-bold text-lg md:text-xl mt-12 px-4 gap-x-10">
      <div className="flex flex-col gap-3 md:gap-6 items-start">
        {["Free Flow", "Best Costumes", "Beats By Loren"].map((item) => (
          <div key={item} className="flex items-center gap-3">
            <img
              src="/star.png"
              alt="star"
              className="w-4 h-4 md:w-5 md:h-5 object-contain"
            />
            <span>{item}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-end text-right gap-1 md:gap-2">
        <span className="text-base md:text-lg">Only</span>
        <span className="text-4xl md:text-5xl font-bold leading-tight">
          175K
        </span>
        <span className="text-base md:text-lg">FUN ALL NIGHT</span>
      </div>
    </section>
  );
}
