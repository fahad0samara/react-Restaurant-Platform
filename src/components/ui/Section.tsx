import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  animate?: boolean;
}

export function Section({ children, className, id, animate = false }: SectionProps) {
  const Comp = animate ? motion.section : 'section';
  
  return (
    <Comp
      id={id}
      className={cn("py-20", className)}
      {...(animate && {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.5 }
      })}
    >
      {children}
    </Comp>
  );
}