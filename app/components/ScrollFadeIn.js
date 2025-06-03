
"use client"
import { motion } from 'framer-motion';

export default function ScrollFadeIn() {
  return (
    <div className="space-y-20 p-10">
      {/* عنصر عادي عشان تعمل Scroll */}
      <div style={{ height: '80vh' }}></div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className="bg-pink-300 p-10 rounded-lg shadow-lg">
          أنا دخلت من الشمال ✨
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className="bg-green-300 p-10 rounded-lg shadow-lg">
          أنا دخلت من اليمين ✨
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className="bg-blue-300 p-10 rounded-lg shadow-lg">
          أنا طلعت من تحت ✨
        </div>
      </motion.div>
    </div>
  );
}
