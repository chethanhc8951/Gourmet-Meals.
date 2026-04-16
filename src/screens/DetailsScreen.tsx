import { useParams, Navigate } from 'react-router-dom';
import { MENU_DATA } from '../data/menu';
import { motion } from 'motion/react';
import { Flame, Info, CheckCircle2, ChevronRight, Clock, Star } from 'lucide-react';

export function DetailsScreen() {
  const { id } = useParams<{ id: string }>();
  const item = MENU_DATA.find((i) => i.id === id);

  if (!item) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="py-8 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Featured Image (Bento Tile) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-7"
        >
          <div className="aspect-[16/10] rounded-bento overflow-hidden shadow-bento border border-bento-bg bg-bento-surface">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        {/* Right: Interaction Panel (Bento Tile) */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-5 space-y-8"
        >
          <div className="bg-bento-surface p-10 rounded-bento shadow-bento border border-bento-bg space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-1 bg-bento-accent/10 text-bento-accent rounded-full text-xs font-bold uppercase tracking-widest border border-bento-accent/20">
                Premium Choice
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-bento-text leading-tight uppercase">
                {item.name}
              </h1>
              <div className="flex items-center gap-6 pt-2">
                <span className="text-4xl font-black text-bento-primary">
                  ${item.price.toFixed(2)}
                </span>
                <div className="flex items-center gap-2 text-bento-muted font-bold">
                  <Clock className="w-5 h-5 text-bento-primary" />
                  <span className="text-lg">25 MIN</span>
                </div>
              </div>
            </div>

            <div className="h-px bg-bento-bg w-full" />

            <div className="space-y-4">
              <h3 className="text-sm font-black uppercase tracking-widest text-bento-text">Description</h3>
              <p className="text-lg text-bento-muted leading-relaxed font-medium">
                {item.description}
              </p>
            </div>

            <button className="w-full px-8 py-5 bg-bento-primary text-white rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-xl shadow-bento-primary/30 active:scale-95 flex items-center justify-center gap-3">
              Order Now
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </motion.div>

        {/* Bottom Details Grid */}
        <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Nutrition Bento Tile */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-bento-surface p-8 rounded-bento shadow-bento border border-bento-bg flex flex-col items-center text-center space-y-4"
          >
            <div className="w-16 h-16 bg-bento-primary/10 text-bento-primary rounded-2xl flex items-center justify-center">
              <Flame className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xs font-black uppercase tracking-widest text-bento-muted">Energy Value</h3>
              <p className="text-3xl font-black text-bento-text">{item.calories} KCAL</p>
            </div>
          </motion.div>

          {/* Ingredients Bento Tile */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-bento-surface p-8 rounded-bento shadow-bento border border-bento-bg flex flex-col lg:col-span-2"
          >
             <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-bento-accent/10 text-bento-accent rounded-xl flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-black uppercase tracking-widest text-bento-text">Key Ingredients</h3>
             </div>
             <div className="flex flex-wrap gap-3">
               {item.ingredients.map((ing, idx) => (
                 <span key={idx} className="px-6 py-2.5 bg-bento-bg text-bento-text rounded-full text-sm font-bold border border-transparent hover:border-bento-primary/20 transition-all">
                   {ing}
                 </span>
               ))}
             </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
