import es from './nearby-es.json';
import en from './nearby-en.json';
import fr from './nearby-fr.json';
import zh from './nearby-zh-Hant.json';
export const attractionSlugs = ['cimavilla', 'cerro-de-santa-catalina', 'termas-romanas-campo-valdes', 'playa-de-poniente'] as const;
export type AttractionSlug = typeof attractionSlugs[number];
export type Attraction = {
  title: string; tagline: string; description: string; intro: string; tips: string[]; highlights: string[];
  about: string; facts: string[][]; hours?: string; admission?: string; transport: string;
  appeal: {title: string; text: string}[]; route: string[]; notices: string[]; photo?: string; stay: string;
  faq: {q: string; a: string}[]; address: string;
};
export type NearbyData = { labels: Record<string, string>; pages: Record<string, Attraction> };
const data: Record<string, NearbyData> = {es: es, en: en, fr: fr, 'zh-Hant': zh};
export function getNearby(locale: string) {return data[locale] || data.es;}
export const sources: Record<AttractionSlug, {title: string; url: string}[]> = {
  cimavilla: [
    {title: 'Visita Gijón · Cimavilla', url: 'https://www.visitagijon.es/rutas/cimavilla/'},
    {title: 'Ayuntamiento de Gijón · Cimavilla', url: 'https://www.gijon.es/es/turismo/cimavilla'},
    {title: 'Visita Gijón · Cultural routes (2023)', url: 'https://drupal.gijon.es/sites/default/files/2023-06/culRUTAS_english(junio2023).pdf'},
  ],
  'cerro-de-santa-catalina': [
    {title: 'Visita Gijón · Elogio del Horizonte', url: 'https://www.visitagijon.es/poi/elogio-del-horizonte/'},
    {title: 'Ayuntamiento · 30º Aniversario del Elogio', url: 'https://www.gijon.es/es/eventos/30-aniversario-del-elogio-del-horizonte-de-eduardo-chillida'},
    {title: 'Visita Gijón · Cimavilla', url: 'https://www.visitagijon.es/rutas/cimavilla/'},
  ],
  'termas-romanas-campo-valdes': [
    {title: 'Turismo Asturias · Museo de las Termas Romanas de Campo Valdés', url: 'https://www.turismoasturias.es/en/descubre/cultura/museos-y-espacios-culturales/castros-y-espacios-arqueologicos/museo-de-las-termas-romanas-de-campo-valdes'},
    {title: 'Ayuntamiento · Museo Termas Romanas de Campo Valdés', url: 'https://www.gijon.es/es/directorio/museo-termas-romanas-de-campo-valdes'},
  ],
  'playa-de-poniente': [
    {title: 'Turismo Asturias · Playa de Poniente', url: 'https://www.turismoasturias.es/en/descubre/costa/playas/playa-de-poniente'},
    {title: 'Ayuntamiento · Playa de Poniente o de Pando', url: 'https://www.gijon.es/es/directorio/playa-de-poniente-o-de-pando'},
    {title: 'Visita Gijón · Playa Poniente · Accesibilidad (2024)', url: 'https://gijonturismoprofesional.es/files/shares/Accesibilidad/Fichas_2024_Impulsa_Igualdad/2024%20Playa%20Poniente.pdf'},
  ],
};
