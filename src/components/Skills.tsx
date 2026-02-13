import { Code2, Server, Wrench } from 'lucide-react'
import profileImg from '../assets/Portifolio/Image-portifolio.png';
import { BackgroundParticles } from './BackgroundParticles';

const getIconUrl = (name: string) => {
  const map: Record<string, string> = {
    'JavaScript': 'javascript',
    'TypeScript': 'typescript',
    'React': 'react',
    'Next.js': 'nextjs',
    'Tailwind CSS': 'tailwindcss',
    'Shadcn UI': 'shadcnui',
    'Styled Components': 'styledcomponents',
    'Python': 'python',
    'Node.js': 'nodejs',
    'Express': 'express',
    'Flask': 'flask',
    'Bun': 'bun',
    'Swagger': 'swagger',
    'APIs REST': 'postman',
    'Elysia': 'elysia',
    'PostgreSQL': 'postgresql',
    'MySQL': 'mysql',
    'MongoDB': 'mongodb',
    'Redis': 'redis',
    'Git': 'git',
    'GitHub Actions': 'githubactions',
    'CI/CD': 'jenkins',
    'Docker': 'docker',
    'AWS S3': 'aws',
    'PWA': 'pwa',
    'Scrum': 'jira',
    'Kanban': 'trello',
    'Clean Code': 'eslint',
    'Princípios SOLID': 'typescript'
  };
  const icon = map[name] || 'javascript';
  
  // Shadcn and Elysia are special cases for devicon, using placeholder if not found
  if (icon === 'shadcnui') return 'https://raw.githubusercontent.com/shadcn-ui/ui/main/apps/www/public/favicon.ico';
  if (icon === 'elysia') return 'https://elysiajs.com/assets/elysia.svg';
  
  return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`;
}

const frontEnd = [
  { name: 'JavaScript' },
  { name: 'TypeScript' },
  { name: 'React' },
  { name: 'Next.js' },
  { name: 'Tailwind CSS' },
  { name: 'Shadcn UI' },
  { name: 'Styled Components' },
]

const backEnd = [
  { name: 'Python' },
  { name: 'Node.js' },
  { name: 'Express' },
  { name: 'Flask' },
  { name: 'Bun' },
  { name: 'Swagger' },
  { name: 'APIs REST' },
  { name: 'Elysia' },
  { name: 'PostgreSQL' },
  { name: 'MySQL' },
  { name: 'MongoDB' },
  { name: 'Redis' },
]

const others = [
  { name: 'Git' },
  { name: 'GitHub Actions' },
  { name: 'CI/CD' },
  { name: 'Docker' },
  { name: 'AWS S3' },
  { name: 'PWA' },
  { name: 'Scrum' },
  { name: 'Kanban' },
  { name: 'Clean Code' },
  { name: 'Princípios SOLID' },
]

export default function Skills() {
  return (
    <section id="habilidades" className="px-6 md:px-24 py-24 bg-[#0a0a0a] relative">
      <BackgroundParticles />
      <div className="relative z-10 mb-10 text-center lg:text-left">
        <div className="flex items-center justify-center lg:justify-start gap-3">
          <span className="w-12 h-[3px] bg-brand rounded-full" />
          <span className="uppercase tracking-[0.2em] text-sm text-gray-300">Habilidades</span>
        </div>
        <h2 className="mt-4 text-3xl md:text-6xl font-black text-accent">Tecnologias & Ferramentas</h2>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-stretch">
        {/* Imagem que desce com o scroll */}
        <div className="order-first lg:order-none h-full">
          <div className="lg:sticky lg:top-32 flex justify-center py-4">
            <img 
              src={profileImg} 
              alt="Matheus Felipe" 
              className="w-48 md:w-full max-w-sm object-contain"
            />
          </div>
        </div>

        {/* Conteúdo das Habilidades */}
        <div className="lg:col-span-2 space-y-12 md:space-y-16">
          {/* Front-end */}
          <div>
            <div className="mb-6 flex items-center justify-center lg:justify-start gap-2 text-gray-300">
              <Code2 className="w-5 h-5 text-accent" />
              <span className="text-lg font-semibold">Front-end</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {frontEnd.map((t) => (
                <SkillCard key={t.name} t={t} category="Front-end" />
              ))}
            </div>
          </div>

          {/* Back-end */}
          <div>
            <div className="mb-6 flex items-center justify-center lg:justify-start gap-2 text-gray-300">
              <Server className="w-5 h-5 text-accent" />
              <span className="text-lg font-semibold">Back-end</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {backEnd.map((t) => (
                <SkillCard key={t.name} t={t} category="Back-end" />
              ))}
            </div>
          </div>

          {/* Outros */}
          <div>
            <div className="mb-6 flex items-center justify-center lg:justify-start gap-2 text-gray-300">
              <Wrench className="w-5 h-5 text-accent" />
              <span className="text-lg font-semibold">Outros</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {others.map((t) => (
                <SkillCard key={t.name} t={t} category="Outros" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillCard({ t, category }: { t: any, category: string }) {
  return (
    <div className="group rounded-xl border border-brand/30 bg-brand/10 p-4 flex items-center gap-4 hover:bg-accent/15 hover:border-accent/40 transition-colors">
      <div className="w-12 h-12 rounded-lg bg-brand/20 flex items-center justify-center p-2 group-hover:scale-110 transition-transform">
        <img 
          src={getIconUrl(t.name)} 
          alt={t.name} 
          className="w-full h-full object-contain filter brightness-90 group-hover:brightness-100"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${t.name}&background=4701B2&color=fff`;
          }}
        />
      </div>
      <div className="flex-1">
        <div className="text-white font-semibold">{t.name}</div>
        <div className="text-sm text-gray-400">{category}</div>
      </div>
    </div>
  )
}
