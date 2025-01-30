"use client";

import { motion } from 'framer-motion';
import { Camera, Zap, Lock, Home } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: Camera,
    title: 'Câmeras de Segurança',
    description: 'Sistemas de CFTV com tecnologia IP e visualização remota',
  },
  {
    icon: Zap,
    title: 'Cerca Elétrica',
    description: 'Proteção perimetral com cerca elétrica industrial',
  },
  {
    icon: Lock,
    title: 'Controle de Acesso',
    description: 'Sistemas modernos de controle de acesso e biometria',
  },
  {
    icon: Home,
    title: 'Automação Residencial',
    description: 'Soluções integradas de automação para sua casa',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-6 text-white">Nossos Serviços</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Oferecemos soluções completas em segurança eletrônica para sua
            residência ou empresa.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-900 border-gray-800 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="w-12 h-12 text-red-600 mx-auto mb-4" />
                  <CardTitle className="text-center text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-400">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;