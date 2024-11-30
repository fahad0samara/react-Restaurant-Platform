import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

export function Container({ children, className, animate = false }: ContainerProps) {
  const Comp = animate ? motion.div : 'div';
  
  return (
    <Comp
      className={cn("max-w-7xl mx-auto px-4", className)}
      {...(animate && {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
      })}
    >
      {children}
    </Comp>
  );
}