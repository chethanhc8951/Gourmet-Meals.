import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { HomeScreen } from './screens/HomeScreen';
import { DetailsScreen } from './screens/DetailsScreen';
import { Header } from './components/Header';

function AppContent() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-bento-bg font-sans text-bento-text overflow-x-hidden">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Routes location={location}>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/details/:id" element={<DetailsScreen />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      
      <footer className="mt-12 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-bento-muted text-sm font-medium">
            © 2026 Gourmet Bites. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
