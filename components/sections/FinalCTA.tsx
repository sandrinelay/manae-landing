import { WaitlistFormInline } from "@/components/waitlist/WaitlistFormInline";

export function FinalCTA() {
  return (
    <section className="py-24 px-4 brand-gradient">
      <div className=" max-w-5xl mx-auto  p-10 md:p-24 text-center text-white  relative overflow-hidden">

        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Prête à vider ta charge mentale ?
          </h2>

          <p className="text-lg md:text-xl opacity-90 mb-12 max-w-2xl mx-auto">
            Rejoins la bêta maintenant et profite de 6 mois offerts - commence à retrouver du calme dès aujourd'hui.
          </p>

          {/* TODO: Restaurer le bouton signup après la beta
          ============================================
          Supprimer le composant WaitlistFormInline et décommenter le code ci-dessous :

          import Link from "next/link";
          import { Button } from "@/components/ui/Button";

          <Button
            variant="white"
            size="lg"
            className="text-primary-600 text-[purple] px-10"
          >
            <Link href="/auth/signup">
              Commencer gratuitement
            </Link>
          </Button>
          ============================================ */}
          <WaitlistFormInline />

          <p className="mt-8 text-sm opacity-75">
            2 minutes pour démarrer • Pas de spam
          </p>
        </div>
      </div>
    </section>
  );
}
