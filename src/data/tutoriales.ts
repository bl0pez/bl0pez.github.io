// Catálogo de tutoriales. Una categoría sin guías publicadas se muestra como "Próximamente".
export interface Tutorial {
  slug: string;
  title: string;
  summary: string;
  minutes: number;
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
        summary: 'Las herramientas que necesitas, cómo instalarlas y el prompt para que Claude haga el video por ti.',
        minutes: 15,
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
];
