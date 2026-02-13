import { Briefcase, Building2, MapPin, Calendar } from 'lucide-react'
import { BackgroundParticles } from './BackgroundParticles'

const skills = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Express',
  'Elysia',
  'Python',
  'PostgreSQL',
  'Redis',
  'Tailwind CSS',
]

export default function Experience() {
  return (
    <section id="experiência" className="px-6 md:px-24 py-24 bg-[#0a0a0a] relative overflow-hidden">
      <BackgroundParticles />
      <div className="relative z-10 mb-12 text-center lg:text-left">
        <div className="flex items-center justify-center lg:justify-start gap-3">
          <span className="w-12 h-[3px] bg-brand rounded-full" />
          <span className="uppercase tracking-[0.2em] text-sm text-gray-300">Experiência</span>
        </div>
        <h2 className="mt-4 text-3xl md:text-6xl font-black text-accent">Experiência Profissional</h2>
      </div>

      <div className="relative rounded-xl border border-brand/20 bg-white/5 p-6 md:p-8 shadow-[0_0_40px_rgba(71,1,178,0.15)]">
        <div className="flex flex-col md:flex-row items-start gap-4 mb-8">
          <div className="w-12 h-12 rounded-lg bg-brand/20 text-brand flex items-center justify-center shrink-0">
            <Briefcase className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl md:text-3xl font-bold text-white">Desenvolvedor Full-Stack</h3>
            <div className="mt-3 flex flex-col sm:flex-row flex-wrap gap-x-6 gap-y-3 text-sm text-gray-300">
              <span className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-accent" />
                <span>Codelabs USA</span>
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Remoto</span>
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-accent" />
                <span>Maio 2024 - Atual</span>
              </span>
            </div>
          </div>
        </div>

        <ul className="space-y-4 text-gray-300 text-sm md:text-base">
          {[
            "Desenvolvimento de aplicações web completas utilizando React, Next.js, Express e Elysia.",
            "Atuação com metodologias ágeis (Scrum), participando de ciclos semanais de entrega e planejamento.",
            "Participação na construção e evolução de produtos end-to-end, incluindo landing pages, dashboards e sistemas internos.",
            "Colaboração desde o início no projeto JustApp (restaurantes e cafeterias), contribuindo para funcionalidades críticas e otimização de performance.",
            "Redução de mais de 40% no tempo de resposta de páginas através de paginação inteligente e estratégias de carregamento otimizado.",
            "Desenvolvimento de um servidor dedicado em Python para renderização otimizada, melhorando fluxo de dados e performance geral."
          ].map((item, idx) => (
            <li key={idx} className="relative pl-6">
              <span className="absolute left-0 top-2 w-2 h-2 bg-accent rounded-full" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-2">
          {skills.map((s) => (
            <span
              key={s}
              className="px-3 py-1 rounded-md border border-brand/40 bg-brand/15 text-brand text-xs md:text-sm font-medium"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
