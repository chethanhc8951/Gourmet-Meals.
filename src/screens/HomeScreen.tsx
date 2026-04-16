import FoodCard from '../components/FoodCard';
import { MENU_DATA } from '../data/menu';
import { motion } from 'motion/react';

export function HomeScreen() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6 pt-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-bento-primary/10 text-bento-primary rounded-full text-sm font-bold uppercase tracking-wider border border-bento-primary/20"
        >
          <span className="w-2 h-2 bg-bento-primary rounded-full animate-ping" />
          Fresh from the Kitchen
        </motion.div>
        
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-bento-text max-w-4xl mx-auto leading-[1.1]">
          Deliciously Crafted <br />
          <span className="text-bento-primary">Gourmet Meals.</span>
        </h2>
        
        <p className="text-xl text-bento-muted leading-relaxed max-w-2xl mx-auto font-medium">
          Experience the finest ingredients and exceptional flavors with our curated daily selection.
        </p>
      </section>

      {/* Grid */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {MENU_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
            >
              <FoodCard item={item} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter / CTA Section - Bento Style */}
      <section>
        <div className="bg-bento-surface rounded-bento p-10 md:p-20 text-center shadow-bento border border-bento-bg">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-extrabold text-bento-text shrink-0">Join the Flavor Revolution</h3>
              <p className="text-lg text-bento-muted font-medium">Be the first to taste our seasonal masterpieces and exclusive offers.</p>
            </div>
            
            <form className="flex flex-col sm:flex-row gap-4 group" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="hello@example.com"
                className="flex-1 px-8 py-5 rounded-full bg-bento-bg border-2 border-transparent focus:border-bento-primary outline-none transition-all text-lg font-semibold placeholder:text-bento-muted/50"
              />
              <button className="px-10 py-5 bg-bento-primary text-white rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-bento-primary/30 active:scale-95">
                Stay Updated
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
