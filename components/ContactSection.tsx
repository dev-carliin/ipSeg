"use client";

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const ContactSection = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const message = `Nome: ${data.name}%0AEmail: ${data.email}%0ATelefone: ${data.phone}%0AMensagem: ${data.message}`;
    window.location.href = `https://wa.me/5544988338492?text=${message}`;
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-6 text-white">Entre em Contato</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Estamos prontos para atender suas necessidades em segurança eletrônica.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Input
                  placeholder="Nome"
                  {...register('name', { required: true })}
                  className={`bg-gray-900 border-gray-800 text-white placeholder:text-gray-500 ${errors.name ? 'border-red-500' : ''}`}
                />
              </div>
              <div>
                <Input
                  placeholder="Email"
                  type="email"
                  {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                  className={`bg-gray-900 border-gray-800 text-white placeholder:text-gray-500 ${errors.email ? 'border-red-500' : ''}`}
                />
              </div>
              <div>
                <Input
                  placeholder="Telefone"
                  {...register('phone', { required: true })}
                  className={`bg-gray-900 border-gray-800 text-white placeholder:text-gray-500 ${errors.phone ? 'border-red-500' : ''}`}
                />
              </div>
              <div>
                <Textarea
                  placeholder="Mensagem"
                  {...register('message', { required: true })}
                  className={`bg-gray-900 border-gray-800 text-white placeholder:text-gray-500 ${errors.message ? 'border-red-500' : ''}`}
                  rows={4}
                />
              </div>
              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                Enviar Mensagem
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-red-600 mt-1" />
              <div>
                <h3 className="font-semibold mb-1 text-white">Telefone</h3>
                <p className="text-gray-400">(44) 98833-8492</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-red-600 mt-1" />
              <div>
                <h3 className="font-semibold mb-1 text-white">Email</h3>
                <p className="text-gray-400">Ipseg1578@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-red-600 mt-1" />
              <div>
                <h3 className="font-semibold mb-1 text-white">Endereço</h3>
                <p className="text-gray-400">
                  Av. São Francisco, 841 - Jd California<br />
                  Sarandi - PR
                </p>
              </div>
            </div>

            <div className="w-full h-64 mt-8 rounded-lg overflow-hidden">
              <iframe
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.395264757495!2d-51.88829242388717!3d-23.446202757372955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecda8365dd3e39%3A0xb684d3ee3aa6f2e6!2sAv.%20S%C3%A3o%20Francisco%2C%20841%20-%20Jardim%20California%2C%20Sarandi%20-%20PR%2C%2087112-505!5e0!3m2!1spt-BR!2sbr!4v1750182339740!5m2!1spt-BR!2sbr" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;