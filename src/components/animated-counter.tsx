"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  label: string;
}

export function AnimatedCounter({ value, label }: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const numericPart = value.replace(/[^0-9.]/g, "");
    const num = parseFloat(numericPart);
    const suffix = value.replace(numericPart, "");

    if (isNaN(num)) {
      setDisplayValue(value);
      return;
    }

    const duration = 1500;
    const steps = 40;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * num * 10) / 10;

      if (num >= 100) {
        setDisplayValue(Math.round(current).toLocaleString("pt-BR") + suffix);
      } else {
        setDisplayValue(
          current % 1 === 0
            ? current.toString() + suffix
            : current.toFixed(1).replace(".", ",") + suffix
        );
      }

      if (step >= steps) {
        clearInterval(timer);
        setDisplayValue(value);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center p-6 bg-bg-card rounded-xl border border-border-subtle"
    >
      <div className="text-3xl md:text-4xl text-gold font-serif font-semibold">
        {displayValue}
      </div>
      <div className="text-muted-custom text-sm mt-2 tracking-wide">{label}</div>
    </motion.div>
  );
}
