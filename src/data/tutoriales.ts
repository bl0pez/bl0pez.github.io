// Catálogo del sitio. Una categoría sin guías publicadas se muestra como "Próximamente".
export interface Tutorial {
  slug: string;
  title: string;
  summary: string;
  minutes: number;
  nivel: 'Principiante' | 'Intermedio';
}

export interface Categoria {
  id: string;
  icon: string;
  title: string;
  text: string;
  tutoriales: Tutorial[];
}

export const categorias: Categoria[] = [
  {
    id: 'videos',
    icon: 'film-slate',
    title: 'Videos con IA',
    text: 'Shorts para TikTok, Reels y YouTube hechos con Claude Code: guion, voz, animación 3D y subtítulos.',
    tutoriales: [
      {
        slug: 'short-3d-con-ia',
        title: 'Tu primer short 3D con Claude Code',
        summary: 'Instalas una sola cosa y copias un prompt por paso: Claude instala lo demás y hace el video contigo.',
        minutes: 15,
        nivel: 'Principiante',
      },
    ],
  },
  {
    id: 'roblox',
    icon: 'game-controller',
    title: 'Roblox',
    text: 'Juegos y modelos en Roblox Studio con ayuda de la IA, desde cero.',
    tutoriales: [],
  },
  {
    id: 'web',
    icon: 'browser',
    title: 'Webs y automatizaciones',
    text: 'Páginas, bots de WhatsApp y flujos con n8n explicados paso a paso.',
    tutoriales: [],
  },
  {
    id: 'ia',
    icon: 'sparkle',
    title: 'Herramientas de IA',
    text: 'Claude, ChatGPT y compañía: qué hace cada una y cómo sacarles más.',
    tutoriales: [],
  },
];

export const tutoriales = categorias.flatMap((c) => c.tutoriales.map((t) => ({ ...t, categoria: c })));

// Consejos cortos de la portada.
export const consejos = [
  {
    title: 'Pídele el plan antes que el resultado',
    text: 'Escribe "primero muéstrame cómo lo harías" y corrige el plan. Arreglar un plan cuesta una frase; arreglar un video terminado cuesta rehacerlo.',
  },
  {
    title: 'Dale un ejemplo de lo que te gusta',
    text: 'Una captura, un link o "como este video" le explica más que tres párrafos de instrucciones.',
  },
  {
    title: 'Deja que te pregunte',
    text: 'Termina el prompt con "hazme las preguntas que necesites antes de empezar". Te ahorras suposiciones raras.',
  },
  {
    title: 'Pide cambios de a uno',
    text: '"Subtítulos más grandes" y después "música más baja" funciona mejor que diez cambios en un solo mensaje.',
  },
];
