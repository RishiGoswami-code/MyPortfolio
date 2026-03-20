import ArchitectSection from '../components/ArchitectSection';
import ProfileCard from '../components/ProfileCard';

const About = () => {
  return (
    <div id="about" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* Left Column: Vision & Principles */}
        <div className="lg:col-span-8 lg:pr-8 lg:border-r border-zinc-100">
          <div className="mb-12">
            <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-black mb-2 block">
              VISION_CORE_0.1
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-black uppercase leading-[0.9] mb-4">
              MODERN <span className="text-zinc-200">ARCHITECT</span>
            </h2>
            <p className="text-[13px] text-zinc-500 max-w-xl leading-relaxed uppercase font-mono">
              "Building digital ecosystems where performance meets aesthetics, and complex logic becomes a seamless user experience."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:border-r border-zinc-50 md:pr-8">
              <ArchitectSection />
            </div>

            <div className="space-y-6">
              <h4 className="text-[8px] font-bold uppercase tracking-[0.4em] text-black">CORE_PRINCIPLES</h4>
              <ul className="space-y-4">
                {[
                  { title: "Scalability", desc: "Code that grows with the business." },
                  { title: "Precision", desc: "Pixel-perfect and bug-free delivery." },
                  { title: "Innovation", desc: "Integrating AI at the core of logic." }
                ].map((p, i) => (
                  <li key={i} className="group">
                    <span className="text-[10px] font-black text-black uppercase tracking-widest block mb-1 group-hover:text-zinc-400 transition-colors">{" >> "} {p.title}</span>
                    <p className="text-zinc-400 text-[9px] font-mono uppercase">{p.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column: Profile Card */}
        <div className="lg:col-span-4 flex items-center justify-center lg:justify-end">
          <ProfileCard />
        </div>

      </div>
    </div>
  );
};

export default About;