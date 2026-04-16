import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function formatInstallments(value: number, parcelas = 10) {
  const parcelaValue = value / parcelas;
  return `${parcelas}x de ${formatCurrency(parcelaValue)} sem juros`;
}

export function whatsappLink(message: string) {
  return `https://wa.me/5562982171886?text=${encodeURIComponent(message)}`;
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
