"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const products = [
  {
    title: 'Câmera IP Full HD',
    description: 'Câmera de segurança com resolução 1080p e visão noturna',
    image: '/camera.svg',
  },
  {
    title: 'Kit Cerca Elétrica',
    description: 'Kit completo de cerca elétrica com central de choque',
    image: '/cerca.svg',
  },
  {
    title: 'Controle de Acesso',
    description: 'Sistema biométrico com reconhecimento facial',
    image: '/controleDeAcesso.svg',
  },
  {
    title: 'Central de Alarme',
    description: 'Central de alarme monitorada com sensores sem fio',
    image: '/alarme.svg',
  },
   {
    title: 'Concertina',
    description: 'Solução prática e durável para proteger seu muro',
    image: '/concertina.svg',
  },
];


const ProductsSection = () => {
  return (
    <section id="products" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-6 text-white">Nossos Produtos</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Trabalhamos com as melhores marcas do mercado para garantir
            qualidade e confiabilidade.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-gray-900 border-gray-800">
                <CardHeader className="p-0">
                  <div
                    className="h-48 bg-cover bg-center rounded-t-lg"
                    style={{ backgroundImage: `url(${product.image})` }}
                  />
                </CardHeader>
                <CardContent className="pt-6">
                  <CardTitle className="mb-2 text-white">{product.title}</CardTitle>
                  <CardDescription className="text-gray-400">{product.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    className="w-full bg-red-600 hover:bg-red-700"
                  >
                    <a href="https://wa.me/5544988338492?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20produtos">
                      Saiba Mais
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;