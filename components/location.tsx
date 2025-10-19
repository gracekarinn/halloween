import { TramFront } from "lucide-react";

export function Location() {
  return (
    <section className="">
      <h2 className="text-2xl md:text-4xl font-bold mb-4">Venue:</h2>
      <h3 className="text-xl md:text-3xl font-semibold mb-8">
        Sonar Lusso, Menteng
      </h3>

      <div className="w-full max-w-3xl rounded-xl overflow-hidden shadow-[0_0_40px_rgba(252,249,194,0.4)] border border-[#B0B561]">
        <iframe
          title="Sonar Lusso Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4703821267493!2d106.83853067571413!3d-6.200567693769315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5306ac62e8f%3A0x8062709c89224353!2sSonar%20Di%20Lusso!5e0!3m2!1sid!2sid!4v1734632400123!5m2!1sid!2sid"
          width="100%"
          height="400"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-xl"
        ></iframe>
      </div>

      <div className="flex items-center gap-3 mt-6 bg-[#FCF9C2]/10 px-4 py-2 rounded-full border border-halloween-4 shadow-[0_0_20px_rgba(252,249,194,0.25)]">
        <span className="text-lg font-normal text-halloween-4">
          2 minutes from
        </span>
        <div className="flex items-center gap-2 bg-[#85876A] text-halloween-3 font-normal px-3 py-1 rounded-full text-base shadow-[0_0_15px_rgba(252,249,194,0.6)]">
          <TramFront className="w-4 h-4" />
          <span>Stasiun Cikini</span>
        </div>
      </div>
    </section>
  );
}
