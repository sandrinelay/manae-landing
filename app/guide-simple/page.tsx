import type { Metadata } from 'next';
import { LegalNav } from '@/components/legal/LegalNav';

export const metadata: Metadata = {
  title: 'Guide Simple Manae | Manae',
  description: 'Pour ceux qui veulent juste savoir comment ça marche, sans prise de tête',
};

export default function GuideSimplePage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <LegalNav />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <article className="prose prose-slate max-w-none">
            <header className="mb-8 pb-6 border-b border-slate-200">
              <h1 className="text-3xl font-bold text-[#4A7488] mb-2">Guide Simple Manae</h1>
              <p className="text-slate-600 italic">
                Pour ceux qui veulent juste savoir comment ça marche, sans prise de tête
              </p>
            </header>

            {/* Table des matières */}
            <nav className="mb-10 p-6 bg-slate-50 rounded-lg border border-slate-200">
              <h2 className="text-lg font-semibold text-[#4A7488] mb-4">Sommaire</h2>
              <ul className="space-y-2 text-slate-700">
                <li><a href="#cest-quoi" className="hover:text-[#4A7488] hover:underline">C'est quoi Manae ?</a></li>
                <li><a href="#demarrer" className="hover:text-[#4A7488] hover:underline">Démarrer en 3 minutes</a></li>
                <li><a href="#exemples" className="hover:text-[#4A7488] hover:underline">Exemples de choses à capturer</a></li>
                <li><a href="#humeur" className="hover:text-[#4A7488] hover:underline">L'astuce de l'humeur</a></li>
                <li><a href="#installer" className="hover:text-[#4A7488] hover:underline">Ajouter Manae sur votre écran d'accueil</a></li>
                <li><a href="#questions" className="hover:text-[#4A7488] hover:underline">Questions rapides</a></li>
                <li><a href="#aide" className="hover:text-[#4A7488] hover:underline">Besoin d'aide ?</a></li>
                <li><a href="#conseils" className="hover:text-[#4A7488] hover:underline">3 conseils pour bien utiliser Manae</a></li>
                <li><a href="#pret" className="hover:text-[#4A7488] hover:underline">Vous êtes prêt !</a></li>
              </ul>
            </nav>

            <hr className="my-8 border-slate-200" />

            <section id="cest-quoi" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl font-bold text-[#4A7488] mb-4">C'est quoi Manae ?</h2>
              <p className="text-slate-700 mb-4">
                Une app pour <strong>noter vos pensées en 5 secondes</strong> et <strong>ne plus rien oublier</strong>.
              </p>
              <p className="text-slate-700 mb-4">
                L'IA s'occupe du reste : elle organise, elle classe, elle vous rappelle au bon moment.
              </p>
              <p className="text-slate-700 font-semibold">Simple comme ça.</p>
            </section>

            <hr className="my-8 border-slate-200" />

            <section id="demarrer" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl font-bold text-[#4A7488] mb-6">Démarrer en 3 minutes</h2>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-[#4A7488] mb-3">1. Créez votre compte</h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                  <li>Cliquez sur le lien d'invitation reçu par email</li>
                  <li>Choisissez un mot de passe</li>
                  <li>Remplissez 4 petites questions (prénom, contextes, moments d'énergie)</li>
                  <li>C'est bon, vous êtes prêt !</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-[#4A7488] mb-3">2. Faites votre première capture</h3>
                <p className="text-slate-700 mb-4">
                  Vous arrivez sur "Qu'avez-vous en tête ?"
                </p>
                <p className="text-slate-700 mb-4">
                  <strong>Tapez n'importe quoi</strong> qui vous passe par la tête. Exemples :
                </p>
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 font-mono text-sm text-slate-700">
                  <p>Appeler le dentiste pour prendre RDV</p>
                  <p>Acheter du pain et du lait</p>
                  <p>Organiser un week-end en famille</p>
                  <p>Ne pas oublier l'anniversaire de Sophie samedi</p>
                </div>
                <p className="text-slate-700 mb-4">
                  Cliquez sur <strong>"Capturer"</strong>.
                </p>
                <p className="text-slate-700 font-semibold">
                  Magie : L'IA a tout compris et rangé au bon endroit ! ✨
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-[#4A7488] mb-3">3. Retrouvez vos pensées</h3>
                <p className="text-slate-700 mb-4">
                  Cliquez sur <strong>"Clarté"</strong>
                </p>
                <p className="text-slate-700">
                  Vous voyez tout ce que vous avez capturé, bien organisé : tâches, notes, idées et liste de courses
                </p>
              </div>
            </section>

            <hr className="my-8 border-slate-200" />

            <section id="exemples" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl font-bold text-[#4A7488] mb-6">Exemples de choses à capturer</h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[#4A7488] mb-3">Des tâches (pensées à faire)</h3>
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 font-mono text-sm text-slate-700">
                  <p>Rappeler le plombier demain matin</p>
                  <p>Envoyer le devis client avant vendredi</p>
                  <p>Faire une lessive ce soir</p>
                  <p>Prendre RDV médecin pour les enfants</p>
                  <p>Répondre à l'email de Marie</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[#4A7488] mb-3">Des notes (pensées à retenir)</h3>
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 font-mono text-sm text-slate-700">
                  <p>Code wifi invités : Maison2024</p>
                  <p>Taille chaussures Milo : 26</p>
                  <p>Recette gâteau chocolat : 200g farine, 3 œufs, 150g sucre</p>
                  <p>Numéro plombier : 06 12 34 56 78</p>
                  <p>Idée cadeau anniversaire maman : livre de jardinage</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[#4A7488] mb-3">Des idées (projets futurs)</h3>
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 font-mono text-sm text-slate-700">
                  <p>Refaire la déco du salon</p>
                  <p>Organiser un apéro avec les parents d'élèves</p>
                  <p>Créer un blog sur mes recettes</p>
                  <p>Apprendre la callisthénie</p>
                  <p>Apprendre le piano</p>
                  <p>Partir au Cambodge cet été</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[#4A7488] mb-3">Des courses</h3>
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 font-mono text-sm text-slate-700">
                  <p>pain, lait, pommes, jambon, fromage</p>
                  <p>Acheter shampooing et dentifrice</p>
                </div>
              </div>
            </section>

            <hr className="my-8 border-slate-200" />

            <section id="humeur" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl font-bold text-[#4A7488] mb-4">L'astuce de l'humeur</h2>
              <p className="text-slate-700 mb-4">
                Avant de capturer, vous pouvez dire comment vous vous sentez :
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
                <li><strong>😴 Fatigué</strong> : L'app vous proposera des créneaux de repos</li>
                <li><strong>⚡ Énergique</strong> : L'app vous proposera les tâches importantes</li>
                <li><strong>😰 Débordé</strong> : L'app vous proposera les tâches simples</li>
                <li><strong>😌 Calme</strong> : L'app vous proposera les tâches créatives</li>
              </ul>
              <p className="text-slate-700">
                <strong>Pas obligatoire</strong>, mais ça aide l'IA à mieux vous comprendre.
              </p>
            </section>

            <hr className="my-8 border-slate-200" />

            <section id="installer" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl font-bold text-[#4A7488] mb-6">Ajouter Manae sur votre écran d'accueil</h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[#4A7488] mb-3">Sur iPhone (Safari)</h3>
                <ol className="list-decimal pl-6 space-y-2 text-slate-700">
                  <li>Ouvrez my.manae.app dans Safari</li>
                  <li>Appuyez sur l'icône de partage (carré avec flèche vers le haut)</li>
                  <li>Faites défiler et appuyez sur "Sur l'écran d'accueil"</li>
                  <li>Appuyez sur "Ajouter"</li>
                </ol>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[#4A7488] mb-3">Sur Android (Chrome)</h3>
                <ol className="list-decimal pl-6 space-y-2 text-slate-700">
                  <li>Ouvrez my.manae.app dans Chrome</li>
                  <li>Appuyez sur les 3 petits points en haut à droite</li>
                  <li>Appuyez sur "Ajouter à l'écran d'accueil"</li>
                  <li>Appuyez sur "Ajouter"</li>
                </ol>
              </div>

              <p className="text-slate-700 font-semibold">
                Manae apparaît maintenant comme une vraie app sur votre téléphone !
              </p>
            </section>

            <hr className="my-8 border-slate-200" />

            <section id="questions" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl font-bold text-[#4A7488] mb-6">Questions rapides</h2>

              <div className="space-y-4">
                <div>
                  <p className="text-slate-800 font-semibold mb-2">Q : C'est payant ?</p>
                  <p className="text-slate-700">
                    Pendant la bêta : <strong>gratuit pendant 6 mois</strong>. Après, 3,99€ à 15,99€/mois.
                  </p>
                </div>

                <div>
                  <p className="text-slate-800 font-semibold mb-2">Q : Mes données sont sécurisées ?</p>
                  <p className="text-slate-700">
                    Oui, tout est chiffré. Personne ne peut les voir sauf vous.
                  </p>
                </div>

                <div>
                  <p className="text-slate-800 font-semibold mb-2">Q : Je peux connecter mon Google Calendar ?</p>
                  <p className="text-slate-700">
                    Oui ! Allez dans <strong>Profil</strong> → <strong>Calendrier</strong> → <strong>Connecter Google Calendar</strong>.
                  </p>
                </div>

                <div>
                  <p className="text-slate-800 font-semibold mb-2">Q : L'IA se trompe parfois ?</p>
                  <p className="text-slate-700">
                    Oui, elle apprend. Si elle se trompe, vous pouvez corriger manuellement.
                  </p>
                </div>

                <div>
                  <p className="text-slate-800 font-semibold mb-2">Q : Je peux utiliser Manae sur téléphone ?</p>
                  <p className="text-slate-700">
                    Oui ! Allez sur my.manae.app depuis votre navigateur. Vous pouvez l'ajouter à l'écran d'accueil comme une vraie app.
                  </p>
                </div>
              </div>
            </section>

            <hr className="my-8 border-slate-200" />

            <section id="aide" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl font-bold text-[#4A7488] mb-4">Besoin d'aide ?</h2>
              <p className="text-slate-700 mb-2">
                <strong>Email</strong> :{' '}
                <a
                  href="mailto:contact@manae.app"
                  className="text-[#4A7488] hover:text-[#4A7488]/80 underline"
                >
                  contact@manae.app
                </a>
              </p>
              <p className="text-slate-700">
                On répond en moins de 24h (souvent beaucoup plus vite).
              </p>
            </section>

            <hr className="my-8 border-slate-200" />

            <section id="conseils" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl font-bold text-[#4A7488] mb-6">3 conseils pour bien utiliser Manae</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-[#4A7488] mb-3">1. Capturez dès que ça vous vient</h3>
                  <p className="text-slate-700 mb-3">
                    Ne gardez rien dans votre tête. Dès qu'une pensée arrive, capturez.
                  </p>
                  <p className="text-slate-700">
                    <strong>Exemple</strong> : En cuisinant, vous pensez "Ah merde j'ai oublié de répondre à l'email de Florent" → Capturez immédiatement.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#4A7488] mb-3">2. Videz votre tête tous les soirs</h3>
                  <p className="text-slate-700 mb-3">
                    5 minutes avant de dormir, capturez tout ce qui vous tracasse.
                  </p>
                  <p className="text-slate-700">
                    Votre cerveau va adorer, vous dormirez mieux.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#4A7488] mb-3">3. Regardez Clarté tous les matins</h3>
                  <p className="text-slate-700 mb-3">
                    2 minutes pour voir ce qui est important aujourd'hui.
                  </p>
                  <p className="text-slate-700">
                    L'IA a déjà trié, vous n'avez qu'à choisir par quoi commencer.
                  </p>
                </div>
              </div>
            </section>

            <hr className="my-8 border-slate-200" />

            <section id="pret" className="mb-8 scroll-mt-20">
              <h2 className="text-2xl font-bold text-[#4A7488] mb-4">Vous êtes prêt !</h2>
              <p className="text-slate-700 mb-4">
                Manae, c'est juste ça :
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-slate-700 mb-4">
                <li><strong>Capturer</strong> ce qui vous passe par la tête</li>
                <li><strong>Laisser l'IA</strong> organiser</li>
                <li><strong>Retrouver facilement</strong> quand vous en avez besoin</li>
              </ol>
              <p className="text-slate-700 mb-4 font-semibold">
                Pas besoin d'être un pro de la productivité.
              </p>
              <p className="text-slate-700 text-lg">
                Vous notez, on s'occupe du reste. 💙
              </p>
            </section>

            <footer className="text-sm text-slate-500 italic border-t border-slate-200 pt-4">
              Document créé le 22 janvier 2026
            </footer>
          </article>
        </div>
      </main>

      <footer className="max-w-4xl mx-auto px-4 py-8 text-center text-sm text-neutral-500">
        <p>
          Pour toute question, contactez-nous :{' '}
          <a
            href="mailto:contact@manae.app"
            className="text-[#4A7488] hover:text-[#4A7488]/80 underline"
          >
            contact@manae.app
          </a>
        </p>
      </footer>
    </div>
  );
}
