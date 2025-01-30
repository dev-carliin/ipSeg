"use client";

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const images = [
  "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&fit=crop&q=80",
];

const HeroSection = () => {
  const [api, setApi] = useState<any>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <Carousel className="w-full h-full" opts={{ loop: true }} setApi={setApi}>
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div
                  className="w-full h-screen bg-cover bg-center transition-opacity duration-1000"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${image})`,
                  }}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-white"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Protegendo o que é mais importante para você
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Soluções inteligentes em segurança eletrônica para sua casa ou empresa.
          </p>
          <Button
            size="lg"
            asChild
            className="bg-red-600 hover:bg-red-700"
          >
            <a href="https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento">
              Solicite um Orçamento
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;