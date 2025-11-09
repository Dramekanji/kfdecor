'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from './Button';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
  overlay?: boolean;
}

export default function Hero({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage,
  overlay = true,
}: HeroProps) {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Intérieur chaleureux K&F Décor"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {overlay && (
          <div className="absolute inset-0 bg-black/30 z-10" />
        )}
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 lg:px-8 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto font-light leading-relaxed"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href={ctaLink}>
            <Button size="lg" className="group">
              {ctaText}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-2 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
