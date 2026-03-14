
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useEffect, useMemo, useState } from 'react';

function SkillChip({ children }) {
  return (
    <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium text-slate-200 bg-slate-900/50 border border-slate-700/60 hover:border-cyan-500/40 hover:text-cyan-200 transition-colors print:bg-white print:text-slate-800 print:border-slate-200">
      {children}
    </span>
  )
}

function SkillGroupCard({ title, items, icon, accent = 'from-cyan-500/25 via-cyan-500/10 to-transparent' }) {
  return (
    <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-slate-700/70 via-slate-800/40 to-slate-700/30 print:bg-slate-200">
      <div className="relative rounded-2xl p-6 bg-slate-900/40 backdrop-blur border border-slate-700/40 shadow-card hover:shadow-glow transition-all duration-300 print:bg-white print:border-slate-200">
        <div className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br ${accent}`} />
        <div className="relative flex items-start justify-between gap-4">
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-slate-100 print:text-slate-900">
              {title}
            </h3>
          </div>
          <div className="shrink-0 w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-xl text-cyan-300 print:bg-slate-50 print:border-slate-200 print:text-slate-700">
            {icon}
          </div>
        </div>

        <div className="relative mt-5 flex flex-wrap gap-2.5">
          {items.map((s) => (
            <SkillChip key={s}>{s}</SkillChip>
          ))}
        </div>
      </div>
    </div>
  )
}

// Section wrapper with consistent styling
function Section({ id, title, children, icon }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="flex items-center gap-3 text-xl font-semibold text-cyan-400 mb-6 print:text-slate-800">
        <span className="text-2xl">{icon}</span>
        {title}
      </h2>
      {children}
    </section>
  )
}

// Project card with hover effects
function ProjectCard({ title, description, stack, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 rounded-xl bg-slate-800/60 border border-slate-700/50 hover:border-cyan-500/50 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group print:border-slate-200 print:bg-slate-50"
    >
      <h3 className="font-semibold text-lg text-slate-100 group-hover:text-cyan-400 transition-colors print:text-slate-900">
        {title}
      </h3>
      <p className="text-slate-400 text-sm mt-2 leading-relaxed print:text-slate-700">{description}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {stack.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 text-xs font-mono bg-cyan-500/10 text-cyan-400 rounded border border-cyan-500/20 print:bg-cyan-50 print:text-cyan-800 print:border-cyan-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </a>
  )
}

export default function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    loadSlim().then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = useMemo(() => ({
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        onClick: {
          enable: false,
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: ["#06b6d4", "#14b8a6", "#0ea5e9", "#10b981", "#6366f1"], // cyan, teal, sky, emerald, indigo
      },
      links: {
        color: "#06b6d4",
        distance: 150,
        enable: false,
        opacity: 0.1,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: true,
        speed: 0.5,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 50,
      },
      opacity: {
        value: { min: 0.1, max: 0.5 },
        animation: {
          enable: true,
          speed: 0.5,
          minimumValue: 0.1,
          sync: false,
        },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 5, max: 7 },
        animation: {
          enable: true,
          speed: 2,
          minimumValue: 5,
          sync: false,
        },
      },
      rotate: {
        value: { min: 0, max: 360 },
        animation: {
          enable: true,
          speed: 0.5,
          sync: false,
        },
      },
      shadow: {
        enable: true,
        color: {
          value: "#06b6d4",
        },
        blur: 5,
      },
    },
    detectRetina: true,
  }), []);

  const skillGroups = [
    {
      title: 'Cybersecurity & Defense',
      icon: '🛡️',
      accent: 'from-cyan-500/25 via-cyan-500/10 to-transparent',
      items: [
        'Threat Analysis',
        'Vulnerability Assessment',
        'Penetration Testing',
        'SIEM Monitoring',
        'Endpoint Detection & Response (EDR)',
        'Secure Software Development Lifecycle (Secure SDLC)',
      ],
    },
    {
      title: 'Security Tools & Frameworks',
      icon: '🧰',
      accent: 'from-teal-500/25 via-teal-500/10 to-transparent',
      items: [
        'Nessus',
        'Wireshark',
        'Nmap',
        'Burp Suite',
        'OWASP ZAP',
        'Metasploit',
        'Suricata',
        'Kali Linux',
        'Linux',
      ],
    },
    {
      title: 'Programming & Automation',
      icon: '⌨️',
      accent: 'from-sky-500/25 via-sky-500/10 to-transparent',
      items: ['Python', 'JavaScript', 'Bash', 'SQL', 'PowerShell', 'FastAPI'],
    },
    {
      title: 'Cloud & DevSecOps',
      icon: '☁️',
      accent: 'from-emerald-500/25 via-emerald-500/10 to-transparent',
      items: ['AWS', 'Microsoft Azure', 'Docker', 'Kubernetes', 'Linux System Administration'],
    },
    {
      title: 'Compliance & Security Standards',
      icon: '📚',
      accent: 'from-indigo-500/25 via-indigo-500/10 to-transparent',
      items: [
        'OWASP Top 10',
        'Risk Assessment',
        'NIST Cybersecurity Framework',
        'Zero Trust Architecture',
      ],
    },
  ]

  return (
    <div className="min-h-screen relative">
      {init && (
        <Particles
          id="tsparticles"
          options={particlesOptions}
          className="absolute inset-0 -z-10"
        />
      )}
      {/* Top navigation: section links + resume button, perfectly centered */}
      <nav className="no-print fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full px-4">
        <div className="w-full max-w-7xl mx-auto rounded-2xl bg-slate-900/70 border border-slate-700/70 backdrop-blur flex flex-col sm:flex-row items-center justify-between gap-3 px-4 py-2 shadow-card">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {['summary', 'skills', 'education', 'experience', 'projects', 'certifications'].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="px-3 py-1.5 text-xs font-medium rounded-full bg-slate-800/80 text-slate-200 hover:text-cyan-300 hover:bg-slate-700/80 transition-colors"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </div>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold shadow-glow transition-transform hover:scale-105 active:scale-95"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Resume (PDF)
          </a>
        </div>
      </nav>

      <main className="w-full px-8 pt-20 pb-24 print:py-0 print:max-w-none">
        <div className="space-y-12 print:space-y-8 print:text-slate-900">
          {/* Header / Personal Info */}
          <header className="text-center space-y-4 animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tight text-white print:text-slate-900">
              T.R. Thirunavukarasu
            </h1>
            <p className="text-cyan-400 font-medium">Cybersecurity Engineer</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-400 print:text-slate-700">
              <a href="mailto:santhosh21.tr.thiru@gmail.com" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                santhosh21.tr.thiru@gmail.com
              </a>
              <a href="tel:9363094921" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                +91 9363094921
              </a>
              <a
                href="https://www.linkedin.com/in/thirunavukarasu-thirupathi-05550b320/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/Thirunavukarasu21"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </header>

          {/* Professional Summary */}
          <Section id="summary" title="Professional Summary" icon="📋">
            <p className="text-slate-300 leading-relaxed print:text-slate-700">
              Motivated Technical Support and Software Engineering professional with hands-on experience in full-stack
              application development, API debugging, and enterprise system troubleshooting. Skilled in identifying,
              reproducing, and resolving technical issues across web applications, backend services, and database
              systems while working with modern developer tools, cloud platforms, and containerized environments to
              maintain reliable and scalable systems. A strong communicator who can translate complex technical
              problems into clear solutions for users and development teams, with a passion for developer productivity,
              application security, and open-source ecosystems.
            </p>
          </Section>

          {/* Skills */}
          <Section id="skills" title="Skills" icon="🛡️">
            <div className="grid gap-6 sm:grid-cols-2">
              {skillGroups.map((group, gi) => (
                <div key={group.title}>
                  <SkillGroupCard title={group.title} icon={group.icon} items={group.items} accent={group.accent} />
                </div>
              ))}
            </div>
          </Section>

          {/* Education */}
          <Section id="education" title="Education" icon="🎓">
            <div className="space-y-6">
              <div className="p-5 rounded-xl bg-slate-800/40 border border-slate-700/50 print:bg-slate-50 print:border-slate-200">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-lg text-slate-100 print:text-slate-900">
                      Bachelor of Engineering, Computer Science Engineering
                    </h3>
                    <p className="text-cyan-400 font-medium mt-1">Stephen Gresham College of Engineering</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-slate-400 text-sm print:text-slate-700">2023 – Present</p>
                    <p className="text-slate-300 mt-1 print:text-slate-700">
                      <span className="font-medium text-cyan-400 print:text-slate-800">CGPA:</span> 7.420/10
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-slate-800/40 border border-slate-700/50 print:bg-slate-50 print:border-slate-200">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-lg text-slate-100 print:text-slate-900">
                      SENIOR SECONDARY (CLASS XII) – STATE BOARD
                    </h3>
                    <p className="text-cyan-400 font-medium mt-1">
                      ST. ANTONY'S MATRIC HIGHER SECONDARY SCHOOL, PUZHAL, CHENNAI
                    </p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-slate-400 text-sm print:text-slate-700">Board Examination</p>
                    <p className="text-slate-300 mt-1 print:text-slate-700">
                      <span className="font-medium text-cyan-400 print:text-slate-800">Score:</span> 70.67%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* Experience */}
          <Section id="experience" title="Experience" icon="💼">
            <div className="space-y-6">
              <div className="p-5 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-cyan-500/30 transition-colors print:bg-slate-50 print:border-slate-200">
                <h3 className="font-semibold text-lg text-slate-100 print:text-slate-900">
                  SPIC (Southern Petrochemical Industries Corporation Ltd) – IT Systems & Application Support Intern
                </h3>
                <p className="text-cyan-400 text-sm mt-1">December 2025 – January 2026 · Onsite</p>
                <ul className="mt-3 space-y-1.5 text-slate-300 text-sm list-disc list-inside print:text-slate-700">
                  <li>Provided technical support for internal enterprise applications and software systems used by organizational teams.</li>
                  <li>Assisted in troubleshooting application issues and resolving user-reported system errors.</li>
                  <li>Documented software issues, coordinated fixes with IT teams, and maintained technical documentation.</li>
                  <li>Supported data validation, reporting tasks, and monitoring of internal software operations.</li>
                </ul>
              </div>
              <div className="p-5 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-cyan-500/30 transition-colors print:bg-slate-50 print:border-slate-200">
                <h3 className="font-semibold text-lg text-slate-100 print:text-slate-900">
                  Turbo Energy Private Limited – Enterprise Applications & Database Intern
                </h3>
                <p className="text-cyan-400 text-sm mt-1">June 2025 – July 2025 · Onsite</p>
                <ul className="mt-3 space-y-1.5 text-slate-300 text-sm list-disc list-inside print:text-slate-700">
                  <li>Supported the IT team in maintaining internal enterprise applications and database systems.</li>
                  <li>Identified and resolved application-related issues reported by internal users.</li>
                  <li>Performed data validation, reporting, and documentation for internal software systems.</li>
                  <li>Monitored application performance and supported routine system maintenance activities.</li>
                  <li>Collaborated with technical teams to ensure smooth operation of internal IT systems.</li>
                </ul>
              </div>
            </div>
          </Section>

          {/* Projects */}
          <Section id="projects" title="Projects" icon="🚀">
            <div className="grid gap-6 sm:grid-cols-2">
              <ProjectCard
                title="AltCred – Alternative Credit Scoring Platform"
                description="Developed a backend system to analyze behavioral financial data for alternative credit scoring. Built REST APIs using Flask for secure data processing and validation, designed database structures to store transaction records and credit metrics, and implemented robust error handling to deliver reliable API responses."
                stack={['Python', 'Flask', 'SQLite']}
                link="#"
              />
              <ProjectCard
                title="Rusi – AI Kitchen Management System"
                description="Built a full-stack application for pantry management and AI-based recipe suggestions. Implemented backend services using FastAPI with secure user authentication and data management, integrated AI APIs for recommendations, and debugged API communication issues between frontend and backend services."
                stack={['FastAPI', 'React', 'MongoDB']}
                link="#"
              />
              <ProjectCard
                title="SocialSage – AI-Powered Community Analytics Dashboard"
                description="Designed and implemented React interfaces for an AI-powered user analytics dashboard, building interactive graph network visualizations with real-time metrics and a responsive Gemini chatbot UI for community insights."
                stack={['React', 'TypeScript', 'Graph Visualization', 'Gemini API']}
                link="#"
              />
            </div>
          </Section>

          {/* Certifications */}
          <Section id="certifications" title="Certifications / Achievements" icon="🏆">
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-slate-800/40 border border-slate-700/50 print:bg-slate-50 print:border-slate-200">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-slate-100 font-semibold print:text-slate-900">Network Security Essentials</p>
                    <p className="text-slate-400 text-sm mt-1 print:text-slate-700">INFOSYS SPRINGBOARD</p>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 print:bg-slate-100 print:text-slate-700 print:border-slate-200">
                    Certificate
                  </span>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-slate-800/40 border border-slate-700/50 print:bg-slate-50 print:border-slate-200">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-slate-100 font-semibold print:text-slate-900">Ethical Hacking</p>
                    <p className="text-slate-400 text-sm mt-1 print:text-slate-700">NPTEL</p>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 print:bg-slate-100 print:text-slate-700 print:border-slate-200">
                    Certificate
                  </span>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-slate-800/40 border border-slate-700/50 print:bg-slate-50 print:border-slate-200">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-slate-100 font-semibold print:text-slate-900">Software Testing</p>
                    <p className="text-slate-400 text-sm mt-1 print:text-slate-700">INFOSYS SPRINGBOARD</p>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 print:bg-slate-100 print:text-slate-700 print:border-slate-200">
                    Certificate
                  </span>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-slate-800/40 border border-slate-700/50 print:bg-slate-50 print:border-slate-200">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-slate-100 font-semibold print:text-slate-900">Java Programming Fundamentals</p>
                    <p className="text-slate-400 text-sm mt-1 print:text-slate-700">INFOSYS SPRINGBOARD</p>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 print:bg-slate-100 print:text-slate-700 print:border-slate-200">
                    Certificate
                  </span>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-slate-800/40 border border-slate-700/50 print:bg-slate-50 print:border-slate-200">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-slate-100 font-semibold print:text-slate-900">Java I/O with Case Studies</p>
                    <p className="text-slate-400 text-sm mt-1 print:text-slate-700">INFOSYS SPRINGBOARD</p>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 print:bg-slate-100 print:text-slate-700 print:border-slate-200">
                    Certificate
                  </span>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-slate-800/40 border border-slate-700/50 print:bg-slate-50 print:border-slate-200">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-slate-100 font-semibold print:text-slate-900">Multithreading in Java</p>
                    <p className="text-slate-400 text-sm mt-1 print:text-slate-700">INFOSYS SPRINGBOARD</p>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 print:bg-slate-100 print:text-slate-700 print:border-slate-200">
                    Certificate
                  </span>
                </div>
              </div>
            </div>
          </Section>

          {/* Modern Portfolio Section */}
          <section className="relative py-16 mt-16">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl"></div>
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 p-8 md:p-12">
              {/* Left Column - Profile */}
              <div className="text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  T.R. Thirunavukarasu
                </h2>
                <p className="text-slate-300 text-lg font-medium">
                  Cybersecurity Engineer
                </p>
              </div>

              {/* Middle Column - Contact */}
              <div>
                <h3 className="text-xl font-semibold text-slate-100 mb-6 uppercase tracking-wide">
                  Contact
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:santhosh21.tr.thiru@gmail.com"
                    className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors group"
                  >
                    <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span>santhosh21.tr.thiru@gmail.com</span>
                  </a>
                  <a
                    href="tel:9363094921"
                    className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors group"
                  >
                    <FontAwesomeIcon icon={faPhone} className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span>+91 9363094921</span>
                  </a>
                  <div className="flex items-center gap-3 text-slate-300">
                    <FontAwesomeIcon icon={faLocationDot} className="w-5 h-5 text-cyan-400" />
                    <span>Chennai, Tamil Nadu, India</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Profiles */}
              <div>
                <h3 className="text-xl font-semibold text-slate-100 mb-6 uppercase tracking-wide">
                  Profiles
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Thirunavukarasu21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 hover:scale-105"
                  >
                    <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/thirunavukarasu-thirupathi-05550b320/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 hover:scale-105"
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="text-center py-8 mt-8 border-t border-slate-700/50">
            <p className="text-slate-400 text-sm">
              © 2026 T.R. Thirunavukarasu. Crafted with intention.
            </p>
          </footer>

        </div>
      </main>
    </div>
  )
}
