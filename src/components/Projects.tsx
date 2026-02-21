import { BackgroundParticles } from './BackgroundParticles'
import projectImg from '../assets/Portifolio/smartBussines.png'

const techs = ['Vite', 'React', 'Tailwind CSS', 'Shadcn UI']

export default function Projects() {
  return (
    <section id="projetos" className="px-6 md:px-24 py-24 bg-[#0a0a0a] relative overflow-hidden">
      <BackgroundParticles />
      <div className="relative z-10 mb-12 text-center lg:text-left">
        <div className="flex items-center justify-center lg:justify-start gap-3">
          <span className="w-12 h-[3px] bg-brand rounded-full" />
          <span className="uppercase tracking-[0.2em] text-sm text-gray-300">Projetos</span>
        </div>
        <h2 className="mt-4 text-3xl md:text-6xl font-black text-accent">Meus Projetos</h2>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <a
          href="https://smartbusiness-iota.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          <div className="relative rounded-2xl overflow-hidden">
            <img src={projectImg} alt="SmartBusiness preview" className="w-full h-auto object-contain rounded-2xl" loading="lazy" />
          </div>
        </a>

        <div className="space-y-6">
          <h3 className="text-3xl md:text-5xl font-extrabold text-white">SmartBusiness</h3>
          <p className="text-gray-300 leading-relaxed">
            Plataforma completa para escalar sua empresa: controle financeiro, gestão de clientes e
            análises avançadas em um só lugar. Interface simples e intuitiva com ferramentas poderosas.
          </p>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-accent" />
              <span>KPIs em tempo real com gráficos interativos e personalizáveis.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-accent" />
              <span>Gestão de equipe com permissões, tarefas e produtividade.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-accent" />
              <span>Segurança com criptografia de ponta a ponta e backups automáticos.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-accent" />
              <span>Automação de processos e exportação de relatórios em PDF/Excel.</span>
            </li>
          </ul>

          <div className="flex flex-wrap gap-2">
            {techs.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-md border border-brand/40 bg-brand/15 text-brand text-xs md:text-sm font-medium"
              >
                {t}
              </span>
            ))}
          </div>

          <div>
            <a
              href="https://smartbusiness-iota.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand hover:bg-brand/90 text-white font-bold transition-all shadow-lg shadow-brand/20 border border-white/10"
            >
              VER PROJETO
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
