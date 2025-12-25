export function Footer() {
    return (
      <footer className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 py-6 text-sm text-neutral-600 flex justify-between">
          <span>© {new Date().getFullYear()} Manae</span>
          <span>Alléger la charge mentale</span>
        </div>
      </footer>
    );
  }
  