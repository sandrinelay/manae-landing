import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="final-cta" className="py-24 px-4 brand-gradient scroll-mt-20">
      <div className="max-w-5xl mx-auto p-10 md:p-24 text-center text-white relative overflow-hidden">

        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Envie de simplifier ton quotidien ?
          </h2>

          <p className="text-lg md:text-xl opacity-90 mb-12 max-w-2xl mx-auto">
          Rejoins la bêta gratuite. Dépose tes pensées, respire.
          </p>

          <a
            href="https://my.manae.app/signup"
            className="inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 px-8 py-4 text-lg bg-white text-[#4A7488] hover:bg-neutral-50 shadow-md"
          >
            Créer mon compte gratuitement
            <span className="ml-2"><ArrowRight size={20} /></span>
          </a>

          <p className="mt-8 text-sm opacity-75">
            Les 100 premiers inscrits bénéficient du plan Plus gratuit à vie !
          </p>
        </div>
      </div>
    </section>
  );
}
