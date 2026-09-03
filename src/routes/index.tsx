import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Github,
  Mail,
  Phone,
  MapPin,
  Code2,
  Sparkles,
  Braces,
  Workflow,
  Layout,
  Search,
  GraduationCap,
  Languages as LanguagesIcon,
  ExternalLink,
  Stethoscope,
  Image as ImageIcon,
  Brain,
} from "lucide-react";
import heroArt from "@/assets/hero-abstract.jpg";
import { ThemeProvider } from "@/components/portfolio/theme";
import { Nav } from "@/components/portfolio/Nav";
import { Reveal } from "@/components/portfolio/Reveal";

const GITHUB_URL = "https://github.com/arish096";
const LEETCODE_URL = "https://leetcode.com/u/arish096";
const EMAIL = "arishislam096@gmail.com";
const PHONE = "+91 6206070859";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arish Islam — Web Developer & AI Enthusiast Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Arish Islam, an aspiring web developer and AI professional building AI-assisted tools, prompt-engineered workflows and clean web interfaces.",
      },
      { property: "og:title", content: "Arish Islam — Web Developer & AI Enthusiast" },
      {
        property: "og:description",
        content:
          "AI-assisted projects, prompt engineering work, DSA practice and web design by Arish Islam.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

function Section({
  id,
  eyebrow,
  title,
  children,
  lead,
}: {
  id: string;
  eyebrow: string;
  title: string;
  lead?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
          {lead && <p className="mt-4 max-w-2xl text-muted-foreground">{lead}</p>}
        </Reveal>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

const SKILL_GROUPS = [
  {
    icon: Braces,
    title: "Programming",
    items: ["C++ (DSA)", "Python", "Basic programming concepts", "Data Structures & Algorithms"],
  },
  {
    icon: Layout,
    title: "Web & Design",
    items: ["HTML5", "CSS3", "Website Design", "Basic UI/UX Design Principles"],
  },
  {
    icon: Sparkles,
    title: "AI & Prompting",
    items: ["AI Prompt Engineering", "Prompt Design", "AI Workflow Creation & Automation"],
  },
  {
    icon: Search,
    title: "Core Strengths",
    items: ["Logical Problem Solving", "Content Structuring", "Internet Research", "Digital Tools"],
  },
];

const PROJECTS = [
  {
    icon: Stethoscope,
    name: "MedVitals AI",
    tag: "AI Medical Assistant",
    desc: "An AI-based medical assistant that helps users understand health-related information through an AI-assisted interface.",
    stack: ["Python", "Streamlit", "AI Prompt Engineering"],
  },
  {
    icon: ImageIcon,
    name: "ThumbForge",
    tag: "AI YouTube Thumbnail Generator",
    desc: "An AI tool that generates YouTube thumbnail concepts, focused on fast, prompt-driven creative output.",
    stack: ["Lovable", "AI Prompt Engineering", "Website Design"],
  },
  {
    icon: Brain,
    name: "Prompt Engineering Projects",
    tag: "Prompt Design & Automation",
    desc: "A set of prompt design and AI workflow experiments exploring structured prompting and automation of repetitive tasks.",
    stack: ["Prompt Design", "AI Workflow Creation", "Content Structuring"],
  },
];

const TOOLS = [
  { group: "Languages", items: ["C++ (DSA)", "Python", "HTML5", "CSS3"] },
  { group: "Build & Ship", items: ["Streamlit", "Lovable", "Website Design", "Basic UI/UX"] },
  {
    group: "AI Workflow",
    items: ["AI Prompt Engineering", "Prompt Design", "AI Workflow Creation & Automation"],
  },
  {
    group: "Thinking & Research",
    items: [
      "Data Structures & Algorithms",
      "Logical Problem Solving",
      "Content Structuring",
      "Internet Research",
      "Digital Tools",
    ],
  },
];

function Portfolio() {
  return (
    <ThemeProvider>
      <div id="top" className="min-h-screen bg-background font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-secondary focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <Nav />

        <main id="main">
          {/* HERO */}
          <section className="relative overflow-hidden pb-20 pt-32 sm:pt-40">
            <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
            <div
              className="pointer-events-none absolute -top-40 left-1/2 size-[42rem] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
              style={{ backgroundImage: "var(--gradient-accent)" }}
              aria-hidden="true"
            />
            <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.1fr_0.9fr]">
              <Reveal>
                <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground">
                  <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
                  Available for collaboration & learning projects
                </span>
                <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-6xl">
                  Arish Islam
                  <span className="mt-2 block gradient-text">
                    Aspiring Web Developer &amp; AI Professional
                  </span>
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  A motivated learner building AI-assisted tools and clean web interfaces. I work
                  with C++ and Python fundamentals, HTML5/CSS3, and prompt engineering to design AI
                  workflows that turn ideas into usable products.
                </p>

                <div className="mt-9 flex flex-wrap gap-3">
                  <a
                    href="#projects"
                    className="glow-ring inline-flex min-h-12 items-center gap-2 rounded-full px-6 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
                    style={{ backgroundImage: "var(--gradient-accent)" }}
                  >
                    Explore My Work
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </a>
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass inline-flex min-h-12 items-center gap-2 rounded-full px-6 text-sm font-semibold underline-offset-4 hover:underline"
                  >
                    <Github className="size-4" aria-hidden="true" />
                    GitHub
                  </a>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="glass inline-flex min-h-12 items-center gap-2 rounded-full px-6 text-sm font-semibold underline-offset-4 hover:underline"
                  >
                    <Mail className="size-4" aria-hidden="true" />
                    Contact Me
                  </a>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="relative mx-auto max-w-md">
                  <div
                    className="absolute inset-4 rounded-[2rem] opacity-40 blur-2xl"
                    style={{ backgroundImage: "var(--gradient-accent)" }}
                    aria-hidden="true"
                  />
                  <img
                    src={heroArt}
                    width={1200}
                    height={1200}
                    alt="Abstract neural network illustration representing AI and web development"
                    className="float-slow relative w-full rounded-[2rem] border border-border object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </section>

          {/* ABOUT */}
          <Section
            id="about"
            eyebrow="About"
            title="Learning by building, one project at a time"
            lead="I'm a Class XI Science student from Bihar, India, focused on becoming a web developer and AI professional."
          >
            <div className="grid gap-6 md:grid-cols-3">
              <Reveal className="md:col-span-2">
                <article className="glass h-full p-7">
                  <p className="leading-relaxed text-muted-foreground">
                    My objective is to grow into a skilled web developer and AI professional by
                    strengthening my programming fundamentals and applying them to real, useful
                    tools. I practice Data Structures &amp; Algorithms in C++, build interfaces with
                    HTML5 and CSS3, and use prompt engineering to design AI workflows.
                  </p>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    So far that has meant shipping AI-assisted projects like MedVitals AI and
                    ThumbForge, and running structured prompt experiments to automate repetitive
                    work. I care about clear logic, organised content and interfaces that are simple
                    to use.
                  </p>
                </article>
              </Reveal>
              <Reveal delay={100}>
                <ul className="grid h-full gap-4">
                  {[
                    { label: "Focus", value: "Web Development & AI" },
                    { label: "Currently", value: "Class XI, Science Stream" },
                    { label: "Based in", value: "Bihar, India" },
                  ].map((s) => (
                    <li key={s.label} className="glass p-5">
                      <p className="text-xs uppercase tracking-widest text-muted-foreground">
                        {s.label}
                      </p>
                      <p className="mt-1 font-display text-lg font-semibold">{s.value}</p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </Section>

          {/* SKILLS */}
          <Section
            id="skills"
            eyebrow="Skills"
            title="What I work with"
            lead="Skills built through study, practice and hands-on projects."
          >
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {SKILL_GROUPS.map((g, i) => (
                <Reveal as="li" key={g.title} delay={i * 80}>
                  <div className="glass h-full p-6">
                    <span
                      className="inline-flex size-11 items-center justify-center rounded-xl text-accent-foreground"
                      style={{ backgroundImage: "var(--gradient-accent)" }}
                    >
                      <g.icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold">{g.title}</h3>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      {g.items.map((it) => (
                        <li key={it} className="flex gap-2">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </ul>
          </Section>

          {/* PROJECTS */}
          <Section
            id="projects"
            eyebrow="Featured Projects"
            title="Things I've built"
            lead="AI-assisted projects created while learning prompt engineering and web development."
          >
            <ul className="grid gap-6 lg:grid-cols-3">
              {PROJECTS.map((p, i) => (
                <Reveal as="li" key={p.name} delay={i * 90}>
                  <article className="glass flex h-full flex-col p-7">
                    <span
                      className="inline-flex size-12 items-center justify-center rounded-2xl text-accent-foreground"
                      style={{ backgroundImage: "var(--gradient-accent)" }}
                    >
                      <p.icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-xl font-semibold">{p.name}</h3>
                    <p className="mt-1 text-sm font-medium text-accent">{p.tag}</p>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {p.desc}
                    </p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <li
                          key={s}
                          className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </ul>
          </Section>

          {/* TOOLS */}
          <Section
            id="tools"
            eyebrow="Tech & Tools"
            title="The tools I actually use"
            lead="A practical look at the languages, platforms and methods behind my projects — Streamlit powers MedVitals AI, and ThumbForge was built with Lovable."
          >
            <ul className="grid gap-6 sm:grid-cols-2">
              {TOOLS.map((t, i) => (
                <Reveal as="li" key={t.group} delay={i * 80}>
                  <div className="glass h-full p-6">
                    <h3 className="font-display text-sm uppercase tracking-[0.2em] text-accent">
                      {t.group}
                    </h3>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {t.items.map((it) => (
                        <li
                          key={it}
                          className="rounded-full bg-secondary px-3.5 py-1.5 text-sm text-secondary-foreground"
                        >
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </ul>
          </Section>

          {/* DSA */}
          <Section
            id="dsa"
            eyebrow="Problem Solving"
            title="DSA practice in C++"
            lead="I practise data structures and algorithms regularly to sharpen logical problem solving."
          >
            <Reveal>
              <div className="glass flex flex-col items-start gap-6 p-8 sm:flex-row sm:items-center sm:justify-between">
                <div className="max-w-xl">
                  <h3 className="text-xl font-semibold">Consistent practice, not vanity metrics</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    My focus is on core topics — arrays, strings, recursion and complexity thinking —
                    solved in C++. You can follow my ongoing practice on LeetCode and my code on
                    GitHub.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={LEETCODE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center gap-2 rounded-full px-6 text-sm font-semibold text-accent-foreground"
                    style={{ backgroundImage: "var(--gradient-accent)" }}
                  >
                    <Code2 className="size-4" aria-hidden="true" />
                    LeetCode
                    <ExternalLink className="size-3.5" aria-hidden="true" />
                  </a>
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass inline-flex min-h-12 items-center gap-2 rounded-full px-6 text-sm font-semibold underline-offset-4 hover:underline"
                  >
                    <Github className="size-4" aria-hidden="true" />
                    GitHub
                  </a>
                </div>
              </div>
            </Reveal>
          </Section>

          {/* EDUCATION + LANGUAGES */}
          <Section id="education" eyebrow="Education & Languages" title="Background">
            <div className="grid gap-6 lg:grid-cols-2">
              <Reveal>
                <ul className="grid gap-4">
                  {[
                    {
                      title: "Class XI — Science Stream",
                      org: "Islamiya Urdu Academy, Bihar",
                      meta: "2026 – Present",
                    },
                    {
                      title: "Class X — CBSE",
                      org: "Vatayan School, Bihar",
                      meta: "2026 · 86%",
                    },
                  ].map((e) => (
                    <li key={e.title} className="glass flex gap-4 p-6">
                      <span className="mt-1 inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-accent">
                        <GraduationCap className="size-5" aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="font-semibold">{e.title}</h3>
                        <p className="text-sm text-muted-foreground">{e.org}</p>
                        <p className="mt-1 text-xs uppercase tracking-widest text-accent">
                          {e.meta}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={100}>
                <div className="glass h-full p-7">
                  <h3 className="flex items-center gap-2 font-semibold">
                    <LanguagesIcon className="size-5 text-accent" aria-hidden="true" />
                    Languages
                  </h3>
                  <ul className="mt-6 space-y-5">
                    {[
                      { name: "Hindi", level: "Native", width: "100%" },
                      { name: "English", level: "Professional working proficiency", width: "75%" },
                      { name: "French", level: "Basic / Intermediate", width: "45%" },
                    ].map((l) => (
                      <li key={l.name}>
                        <div className="flex items-baseline justify-between gap-4">
                          <span className="font-medium">{l.name}</span>
                          <span className="text-xs text-muted-foreground">{l.level}</span>
                        </div>
                        <div
                          className="mt-2 h-1.5 overflow-hidden rounded-full bg-secondary"
                          role="presentation"
                        >
                          <div
                            className="h-full rounded-full"
                            style={{ width: l.width, backgroundImage: "var(--gradient-accent)" }}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </Section>

          {/* CONTACT */}
          <Section
            id="contact"
            eyebrow="Contact"
            title="Let's build something"
            lead="Open to learning opportunities, collaborations and feedback on my projects."
          >
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: EMAIL,
                  href: `mailto:${EMAIL}`,
                  external: false,
                },
                { icon: Phone, label: "Phone", value: PHONE, href: `tel:+916206070859`, external: false },
                {
                  icon: Github,
                  label: "GitHub",
                  value: "github.com/arish096",
                  href: GITHUB_URL,
                  external: true,
                },
                {
                  icon: Code2,
                  label: "LeetCode",
                  value: "leetcode.com/u/arish096",
                  href: LEETCODE_URL,
                  external: true,
                },
              ].map((c, i) => (
                <Reveal key={c.label} delay={i * 80}>
                  <a
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="glass flex h-full flex-col gap-3 p-6 underline-offset-4 hover:underline"
                  >
                    <span className="inline-flex size-10 items-center justify-center rounded-xl bg-secondary text-accent">
                      <c.icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">
                      {c.label}
                    </span>
                    <span className="break-all text-sm font-medium">{c.value}</span>
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <p className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="size-4 text-accent" aria-hidden="true" />
                Bihar, India
              </p>
            </Reveal>
          </Section>
        </main>

        <footer className="border-t border-border py-10">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-muted-foreground sm:flex-row">
            <p>© {new Date().getFullYear()} Arish Islam. All rights reserved.</p>
            <nav aria-label="Footer" className="flex items-center gap-5">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-foreground"
              >
                <Github className="size-4" aria-hidden="true" /> GitHub
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 hover:text-foreground"
              >
                <Mail className="size-4" aria-hidden="true" /> Email
              </a>
              <a href="#top" className="inline-flex items-center gap-2 hover:text-foreground">
                Back to top
              </a>
            </nav>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

/* eslint-disable-next-line no-unused-vars */
const _unused = { Workflow };
