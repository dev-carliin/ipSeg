"use client";

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/5544988435752?text=Olá,%20gostaria%20de%20mais%20informações"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="bg-green-500 text-white p-4 rounded-full shadow-lg">
        <MessageCircle className="h-6 w-6" />
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;