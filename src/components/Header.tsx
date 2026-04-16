import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronLeft, UtensilsCrossed } from 'lucide-react';

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const isDetailsPage = location.pathname.startsWith('/details');

  return (
    <header className="sticky top-0 z-50 bg-bento-surface border-b border-bento-bg h-[80px] flex items-center shadow-bento">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
        <div className="flex items-center gap-4">
          {isDetailsPage && (
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-bento-bg rounded-full transition-colors flex items-center gap-1 text-sm font-semibold text-bento-muted"
              aria-label="Go back"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Back</span>
            </button>
          )}
          <Link to="/" className="flex items-center gap-3 transition-transform hover:scale-105">
            <div className="w-12 h-12 bg-bento-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-bento-primary/30">
              <UtensilsCrossed className="w-7 h-7" />
            </div>
            <h1 className="text-2xl font-extrabold tracking-tight text-bento-text sm:block">Gourmet Bites</h1>
          </Link>
        </div>

        {!isDetailsPage && (
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-bento-muted uppercase tracking-wider">
            <Link to="/" className="text-bento-primary border-b-2 border-bento-primary pb-1">Menu</Link>
            <button className="hover:text-bento-text transition-colors pb-1">Specials</button>
            <button className="hover:text-bento-text transition-colors pb-1">About</button>
          </nav>
        )}
      </div>
    </header>
  );
}
