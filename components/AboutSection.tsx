"use client";

import { motion } from 'framer-motion';
import { Shield, Award, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-6 text-white">Quem Somos</h2>
          <p className="text-lg text-gray-400 mb-8">
            Há mais de 5 anos no mercado, a IPSEG é referência em soluções de segurança eletrônica.
            Nossa missão é proporcionar tranquilidade e proteção para nossos clientes através de
            tecnologia de ponta e atendimento personalizado.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-gray-900 rounded-lg shadow-md border border-gray-800">
              <Shield className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Proteção Total</h3>
              <p className="text-gray-400">
                Soluções completas para garantir a segurança do seu patrimônio
              </p>
            </div>
            
            <div className="p-6 bg-gray-900 rounded-lg shadow-md border border-gray-800">
              <Award className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Qualidade</h3>
              <p className="text-gray-400">
                Equipamentos de última geração e serviço certificado
              </p>
            </div>
            
            <div className="p-6 bg-gray-900 rounded-lg shadow-md border border-gray-800">
              <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Experiência</h3>
              <p className="text-gray-400">
                Equipe especializada com anos de experiência no mercado
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;