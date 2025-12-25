"use client";

import { Send, CheckCircle2, Loader2, RefreshCw } from "lucide-react";
import { useWaitlistForm } from "@/hooks/useWaitlistForm";

export function SignUp() {
  const {
    formData,
    updateField,
    submit,
    reset,
    isLoading,
    isSuccess,
    isError,
    errorMessage,
  } = useWaitlistForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submit();
  };

  return (
    <section
    id="waitlist"
    className="py-24 bg-secondary text-white relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Rejoins le mouvement
          </h1>

          <p className="text-slate-300 mb-8 text-lg">
            Sois parmi les premières à tester Manae et profite d&apos;un tarif
            préférentiel à vie lors du lancement.
          </p>

          {isSuccess ? (
            <div className="bg-white/10 rounded-2xl p-8 border border-white/20">
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle2 size={32} />
                </div>

                <h2 className="text-2xl font-bold">C&apos;est noté !</h2>

                <p className="text-slate-200">
                  Merci {formData.firstName || "pour ton inscription"}.
                </p>

                <button
                  onClick={reset}
                  className="inline-flex items-center gap-2 text-sm underline mt-4"
                >
                  <RefreshCw size={14} />
                  Inscrire une autre personne
                </button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 p-8 rounded-3xl border border-white/10"
            >
              <div className="space-y-4">
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Ton prénom"
                    value={formData.firstName}
                    onChange={(e) => updateField('firstName', e.target.value)}
                    required
                    disabled={isLoading}
                    className="flex-1 px-5 py-4 rounded-xl bg-white/10 disabled:opacity-50"
                  />

                  <input
                    type="text"
                    placeholder="Ton nom"
                    value={formData.lastName}
                    onChange={(e) => updateField('lastName', e.target.value)}
                    required
                    disabled={isLoading}
                    className="flex-1 px-5 py-4 rounded-xl bg-white/10 disabled:opacity-50"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Ton adresse email"
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  required
                  disabled={isLoading}
                  className="w-full px-5 py-4 rounded-xl bg-white/10 disabled:opacity-50"
                />

                {isError && errorMessage && (
                  <p className="text-white bg-red-500/30 px-4 py-2 rounded-lg text-sm">
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary py-4 rounded-xl font-bold flex justify-center items-center gap-2 disabled:opacity-70"
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Inscription en cours...
                    </>
                  ) : (
                    <>
                      Je m&apos;inscris <Send size={18} />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
