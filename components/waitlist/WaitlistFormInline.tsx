'use client';

import React from 'react';
import { useWaitlistForm } from '@/hooks/useWaitlistForm';
import { Loader2, CheckCircle, RefreshCw } from 'lucide-react';

interface WaitlistFormInlineProps {
  onSuccess?: () => void;
  className?: string;
}

export function WaitlistFormInline({
  onSuccess,
  className = '',
}: WaitlistFormInlineProps) {
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
    const success = await submit();
    if (success && onSuccess) {
      onSuccess();
    }
  };

  // Affichage succès
  if (isSuccess) {
    return (
      <div className={`text-center ${className}`}>
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <p className="text-xl font-bold text-white mb-2">
          Merci pour ton inscription !
        </p>
        <p className="text-white/80 mb-6">
          Tu recevras un email dès que la bêta sera disponible.
        </p>
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
        >
          <RefreshCw className="w-4 h-4" />
          Inscrire une autre personne
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`w-full max-w-md mx-auto ${className}`}>
      <div className="flex flex-col gap-3">
        {/* Prénom et Nom sur la même ligne */}
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Prénom"
            value={formData.firstName}
            onChange={(e) => updateField('firstName', e.target.value)}
            disabled={isLoading}
            className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all disabled:opacity-50"
            required
          />
          <input
            type="text"
            placeholder="Nom"
            value={formData.lastName}
            onChange={(e) => updateField('lastName', e.target.value)}
            disabled={isLoading}
            className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all disabled:opacity-50"
            required
          />
        </div>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => updateField('email', e.target.value)}
          disabled={isLoading}
          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all disabled:opacity-50"
          required
        />

        {/* Message d'erreur */}
        {isError && errorMessage && (
          <p className="text-white bg-red-500/30 px-4 py-2 rounded-lg text-sm text-center">
            {errorMessage}
          </p>
        )}

        {/* Bouton submit */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-4 px-6 rounded-xl bg-white text-[#4A7488] font-bold text-lg hover:bg-neutral-50 transition-colors shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Inscription en cours...
            </>
          ) : (
            "Rejoindre la bêta gratuite"
          )}
        </button>
      </div>
    </form>
  );
}
