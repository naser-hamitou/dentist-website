'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode, useMemo } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
};

export default function Reveal({
  children,
  className,
  delay = 0,
  direction = 'up',
}: RevealProps) {
  const variants: Variants = useMemo(() => {
    const distance = 28;
    const offsets: Record<Direction, { x: number; y: number }> = {
      up: { x: 0, y: distance },
      down: { x: 0, y: -distance },
      left: { x: distance, y: 0 },
      right: { x: -distance, y: 0 },
      none: { x: 0, y: 0 },
    };

    const { x, y } = offsets[direction] ?? offsets.up;

    return {
      hidden: { opacity: 0, x, y },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 0.65,
          ease: [0.22, 0.61, 0.36, 1],
          delay,
        },
      },
    };
  }, [delay, direction]);

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.24 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
