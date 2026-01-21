import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle, Clock } from 'lucide-react';

export default function TimelineItem({ item, index, isLast }) {
  const getStatusIcon = () => {
    switch (item.status) {
      case 'completed':
        return <CheckCircle2 className="w-6 h-6 text-white" />;
      case 'current':
        return <Clock className="w-6 h-6 text-white animate-pulse" />;
      default:
        return <Circle className="w-6 h-6 text-white" />;
    }
  };

  const getStatusColor = () => {
    switch (item.status) {
      case 'completed':
        return 'bg-[#1B5E20]';
      case 'current':
        return 'bg-[#EF6C00]';
      default:
        return 'bg-gray-300';
    }
  };

  const getLineColor = () => {
    return item.status === 'completed' ? 'bg-[#1B5E20]' : 'bg-gray-200';
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`flex items-start gap-4 md:gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Content Card */}
      <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className={`bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${
            item.status === 'completed' ? 'border-[#1B5E20]' : 
            item.status === 'current' ? 'border-[#EF6C00]' : 'border-gray-200'
          }`}
        >
          {/* Date Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${
            item.status === 'completed' ? 'bg-[#1B5E20]/10 text-[#1B5E20]' :
            item.status === 'current' ? 'bg-[#EF6C00]/10 text-[#EF6C00]' : 'bg-gray-100 text-gray-500'
          }`}>
            📅 {item.date}
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-4">
            {item.description}
          </p>

          {/* Image/Emoji */}
          {item.emoji && (
            <div className="text-4xl mt-4">{item.emoji}</div>
          )}

          {/* CTA Button */}
          {item.cta && (
            <motion.a
              href={item.cta.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-[#EF6C00] hover:bg-[#E65100] text-white font-semibold rounded-full shadow-lg shadow-orange-500/25 transition-colors"
            >
              {item.cta.text}
              <span>↗</span>
            </motion.a>
          )}
        </motion.div>
      </div>

      {/* Timeline Line & Icon */}
      <div className="hidden md:flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className={`w-12 h-12 rounded-full ${getStatusColor()} flex items-center justify-center shadow-lg z-10`}
        >
          {getStatusIcon()}
        </motion.div>
        {!isLast && (
          <div className={`w-1 flex-1 min-h-[100px] ${getLineColor()} mt-2`} />
        )}
      </div>

      {/* Empty space for alignment */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  );
}