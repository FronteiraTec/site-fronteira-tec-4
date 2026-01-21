import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle, Clock } from 'lucide-react';

export default function TimelineMobile({ item, index, isLast }) {
  const getStatusIcon = () => {
    switch (item.status) {
      case 'completed':
        return <CheckCircle2 className="w-5 h-5 text-white" />;
      case 'current':
        return <Clock className="w-5 h-5 text-white animate-pulse" />;
      default:
        return <Circle className="w-5 h-5 text-white" />;
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="flex gap-4"
    >
      {/* Timeline Line & Icon */}
      <div className="flex flex-col items-center">
        <div className={`w-10 h-10 rounded-full ${getStatusColor()} flex items-center justify-center shadow-lg z-10 flex-shrink-0`}>
          {getStatusIcon()}
        </div>
        {!isLast && (
          <div className={`w-0.5 flex-1 min-h-[20px] ${item.status === 'completed' ? 'bg-[#1B5E20]' : 'bg-gray-200'} mt-2`} />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <div className={`bg-white rounded-xl p-5 shadow-md border-l-4 ${
          item.status === 'completed' ? 'border-[#1B5E20]' : 
          item.status === 'current' ? 'border-[#EF6C00]' : 'border-gray-200'
        }`}>
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
            item.status === 'completed' ? 'bg-[#1B5E20]/10 text-[#1B5E20]' :
            item.status === 'current' ? 'bg-[#EF6C00]/10 text-[#EF6C00]' : 'bg-gray-100 text-gray-500'
          }`}>
            📅 {item.date}
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>

          {item.emoji && <div className="text-3xl mt-3">{item.emoji}</div>}

          {item.cta && (
            <a
              href={item.cta.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-[#EF6C00] hover:bg-[#E65100] text-white text-sm font-semibold rounded-full shadow-lg transition-colors"
            >
              {item.cta.text} ↗
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}