import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const COMPANY = {
  name: "Bek Auto",
  phone: "+7 (778) 007-56-66",
  phoneRaw: "+77780075666",
  whatsapp: "77780075666",
  email: "info@bekauto.kz",
  address: "БЦ «Asia Most», ул. Тимирязева 42 к15/109, офис 222",
  city: "Алматы",
  country: "Казахстан",
  instagram: "https://www.instagram.com/bek_auto_rent",
  youtube: "https://www.youtube.com/@Bekauto_motors",
  workHours: "Круглосуточно, 24/7",
  experience: "11",
  clients: "2000",
  whatsappUrl: "https://wa.me/77780075666",
  callUrl: "tel:+77780075666",
} as const;

export const SITE_URL = "https://bekauto.kz";
