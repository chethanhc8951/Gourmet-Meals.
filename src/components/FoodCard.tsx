import { motion } from 'motion/react';
import { FoodItem } from '../data/menu';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

interface FoodCardProps {
  item: FoodItem;
}

export default function FoodCard({ item }: FoodCardProps) {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={() => navigate(`/details/${item.id}`)}
      className="group cursor-pointer bg-bento-surface rounded-bento overflow-hidden shadow-bento hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-transparent hover:border-bento-primary/20"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Floating Price Tag */}
        <div className="absolute top-4 left-4 bg-bento-primary text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
          ${item.price.toFixed(2)}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-3">
          <h3 className="text-xl font-bold text-bento-text leading-tight group-hover:text-bento-primary transition-colors">
            {item.name}
          </h3>
          <div className="p-2 bg-bento-bg rounded-full text-bento-primary">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
        
        <p className="text-sm text-bento-muted line-clamp-2 leading-relaxed flex-1 mb-4">
          {item.description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-bento-bg">
          <div className="flex items-center gap-2 text-xs font-bold text-bento-accent uppercase tracking-wider">
            <span className="w-2 h-2 bg-bento-accent rounded-full animate-pulse" />
            {item.calories} Calories
          </div>
          <button className="text-xs font-bold text-bento-primary uppercase tracking-widest group-hover:translate-x-1 transition-transform">
            Details
          </button>
        </div>
      </div>
    </motion.div>
  );
}
