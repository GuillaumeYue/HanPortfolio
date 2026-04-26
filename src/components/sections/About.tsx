import SectionHeading from '../ui/SectionHeading'
import StatCard from '../ui/StatCard'
import CodeWindow from '../ui/CodeWindow'
import { UserIcon } from '../icons'
import { iconRegistry } from '../icons/registry'
import { aboutContent, sectionCopy, personal } from '../../data/personal'

function About() {
  return (
    <section id="about" className="section-pad">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title={sectionCopy.about.title} icon={UserIcon} />

        <div className="mt-16 grid gap-12 md:grid-cols-2 md:items-center">
          {/* Left: code window with offset gradient outline */}
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -left-3 -top-3 h-full w-full rounded-2xl border border-blue-500/40"
            />
            <div className="relative">
              <CodeWindow filename="about-me.tsx">
                <span className="text-pink-400">const </span>
                <span className="text-sky-300">developer</span>
                <span className="text-slate-300"> = {'{'}</span>
                {'\n'}
                {'  '}
                <span className="text-blue-300">name</span>
                <span className="text-slate-300">: </span>
                <span className="text-amber-300">&apos;{personal.name}&apos;</span>
                <span className="text-slate-300">,</span>
                {'\n'}
                {'  '}
                <span className="text-blue-300">role</span>
                <span className="text-slate-300">: </span>
                <span className="text-amber-300">&apos;{personal.role}&apos;</span>
                <span className="text-slate-300">,</span>
                {'\n'}
                {'  '}
                <span className="text-blue-300">location</span>
                <span className="text-slate-300">: </span>
                <span className="text-amber-300">
                  &apos;{personal.location}&apos;
                </span>
                <span className="text-slate-300">,</span>
                {'\n'}
                {'  '}
                <span className="text-blue-300">stack</span>
                <span className="text-slate-300">: [</span>
                <span className="text-amber-300">&apos;React&apos;</span>
                <span className="text-slate-300">, </span>
                <span className="text-amber-300">&apos;TypeScript&apos;</span>
                <span className="text-slate-300">, </span>
                <span className="text-amber-300">&apos;SwiftUI&apos;</span>
                <span className="text-slate-300">],</span>
                {'\n'}
                {'  '}
                <span className="text-blue-300">focus</span>
                <span className="text-slate-300">: </span>
                <span className="text-amber-300">
                  &apos;clean code &amp; great UX&apos;
                </span>
                <span className="text-slate-300">,</span>
                {'\n'}
                {'  '}
                <span className="text-blue-300">learning</span>
                <span className="text-slate-300">: </span>
                <span className="text-pink-400">true</span>
                <span className="text-slate-300">,</span>
                {'\n'}
                <span className="text-slate-300">{'}'}</span>
              </CodeWindow>
            </div>
          </div>

          {/* Right: copy + stats */}
          <div>
            {aboutContent.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`text-base leading-8 text-slate-300 md:text-lg ${
                  index > 0 ? 'mt-5' : ''
                }`}
              >
                {paragraph}
              </p>
            ))}

            <div className="mt-10 grid grid-cols-2 gap-4">
              {aboutContent.stats.map((stat) => (
                <StatCard
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  icon={iconRegistry[stat.icon]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
