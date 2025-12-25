export function Header() {
    return (
      <header className="border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <div className="text-xl font-semibold tracking-tight">
            Manae
          </div>
  
          <nav className="flex items-center gap-6 text-sm font-medium">
            <a href="/features" className="hover:text-neutral-600">
              Fonctionnalités
            </a>
            <a href="/concept" className="hover:text-neutral-600">
              Concept
            </a>
            <a
              href="/auth/login"
              className="rounded-md border border-neutral-300 px-4 py-2 hover:bg-neutral-100"
            >
              Se connecter
            </a>
          </nav>
        </div>
      </header>
    );
  }
  