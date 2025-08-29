"use client";

import SocialMedia from "@/components/SocialMedia";
import { ThemeToggle } from "@/components/ThemeToggle";
import { AnimateIn } from "@/components/animations/AnimateIn";
import Bun from "@/components/icons/Bun";
import DrizzleORM from "@/components/icons/Drizzle";
import Nextjs from "@/components/icons/Next";
import Nodejs from "@/components/icons/Nodejs";
import Postgres from "@/components/icons/Postgres";
import ReactIcon from "@/components/icons/React";
import TailwindCSS from "@/components/icons/Tailwind";
import TypeScript from "@/components/icons/Typescript";
import Vercel from "@/components/icons/Vercel";
import Vuejs from "@/components/icons/Vuejs";
import Html from "@/components/icons/Html";
import Css from "@/components/icons/Css";
import Javascript from "@/components/icons/Javascript";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { track } from "@vercel/analytics";
import { ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <main className="text-zinc-900 dark:text-zinc-100 max-w-xl mx-auto px-4 py-4 min-h-svh flex flex-col justify-between">
      <div>
        <AnimateIn variant="fadeUp">
          <section className="mb-6">
            <AnimateIn variant="fadeUp" delay={0.2}>
              <h1 className="text-xl font-medium tracking-tight mb-4 flex items-baseline justify-between">
                <span>Hey, I&apos;m Birat Roka</span>
                <ThemeToggle />
              </h1>
            </AnimateIn>
            <AnimateIn variant="fadeUp" delay={0.4}>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-xl mb-8">
                Full Stack Developer. Contact me below.
              </p>
            </AnimateIn>

            <AnimateIn variant="fadeUp" delay={0.6}>
              <div className="flex items-center gap-5">
                <SocialMedia />
              </div>
            </AnimateIn>
          </section>
        </AnimateIn>

        <Tabs defaultValue="projects">
          <AnimateIn variant="fadeUp" delay={0.2}>
            <TabsList className="mb-4 border-none bg-transparent p-0 -ml-[8px]">
              <TabsTrigger
                value="projects"
                className={cn(
                  "!bg-transparent !border-none !shadow-none",
                  "!font-light data-[state=active]:!font-bold transition-all duration-300 ease-out",
                  "!text-neutral-400 dark:!text-neutral-400",
                  "data-[state=active]:!text-neutral-800 dark:data-[state=active]:!text-neutral-100"
                )}
              >
                Projects
              </TabsTrigger>
              <TabsTrigger
                value="experience"
                className={cn(
                  "!bg-transparent !border-none !shadow-none",
                  "!font-light data-[state=active]:!font-bold transition-all duration-300 ease-out",
                  "!text-neutral-400 dark:!text-neutral-400",
                  "data-[state=active]:!text-neutral-800 dark:data-[state=active]:!text-neutral-100"
                )}
              >
                Experience
              </TabsTrigger>
              <TabsTrigger
                value="tools"
                className={cn(
                  "!bg-transparent !border-none !shadow-none",
                  "!font-light data-[state=active]:!font-bold transition-all duration-300 ease-out",
                  "!text-neutral-400 dark:!text-neutral-400",
                  "data-[state=active]:!text-neutral-800 dark:data-[state=active]:!text-neutral-100"
                )}
              >
                Tools
              </TabsTrigger>
            </TabsList>
          </AnimateIn>

          <TabsContent value="projects">
            <AnimateIn variant="fadeUp" delay={0}>
              <section className="mb-12">
                <div className="space-y-8">
                  <ul className="space-y-8">
                    {projects.map((project, index) => {
                      const delay = 0.1 + index * 0.1;
                      return (
                        <AnimateIn key={index} variant="fadeLeft" delay={delay}>
                          <li className="group hover:translate-x-1 transition-all duration-300 ease-out">
                            <div className="flex items-baseline justify-between mb-1">
                              <h3 className="text-md font-medium">{project.title}</h3>
                              <div className="flex flex-row gap-2">
                                {project.github ? (
                                  <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                                    onClick={() => track(`${project.title}_github_clicked`)}
                                  >
                                    GitHub <ExternalLink className="w-3 h-3" />
                                  </a>
                                ) : null}

                              </div>
                            </div>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className="text-xs text-zinc-400 dark:text-zinc-500">
                                  {tech}
                                  {techIndex < project.technologies.length - 1 ? " /" : ""}
                                </span>
                              ))}
                            </div>
                          </li>
                        </AnimateIn>
                      );
                    })}
                  </ul>
                </div>
              </section>
            </AnimateIn>
          </TabsContent>

          <TabsContent value="experience">
            <AnimateIn variant="fadeUp" delay={0}>
              <section className="mb-12">
                <div className="space-y-8">
                  <ul className="space-y-8">
                    {experience.map((job, index) => {
                      const delay = 0.1 + index * 0.1;
                      return (
                        <AnimateIn key={index} variant="fadeLeft" delay={delay}>
                          <li className="group hover:translate-x-1 transition-all duration-300 ease-out">
                            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                              <h3 className="text-md font-medium">
                                {job.role} {job.role.toLowerCase().includes("freelance") ? "" : "at"} {job.company}
                              </h3>
                              <span className="text-xs text-zinc-400 dark:text-zinc-500">{job.period}</span>
                            </div>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">{job.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {job.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className="text-xs text-zinc-400 dark:text-zinc-500">
                                  {tech}
                                  {techIndex < job.technologies.length - 1 ? " /" : ""}
                                </span>
                              ))}
                            </div>
                          </li>
                        </AnimateIn>
                      );
                    })}
                  </ul>
                </div>
              </section>
            </AnimateIn>
          </TabsContent>
          <TabsContent value="tools">
            <AnimateIn variant="fadeUp" delay={0}>
              <h2 className="text-md font-medium mb-4">Frontend</h2>
              <section className="mb-12">
                <div className="flex flex-wrap gap-y-6 gap-x-4 justify-start">
                  {tools.frontend.map(({ Logo, title }, index) => (
                    <AnimateIn key={index} variant="scale" delay={0.1 + index * 0.03} className="w-[calc(25%-12px)] sm:w-[calc(20%-13px)]">
                      <div className="flex flex-col items-center group">
                        <div className="relative h-7 w-7 sm:h-8 sm:w-8 mb-3 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                          <Logo className="h-full w-full" />
                        </div>
                        <span className="text-xs text-zinc-500 dark:text-zinc-400 text-center whitespace-nowrap">{title}</span>
                      </div>
                    </AnimateIn>
                  ))}
                </div>
              </section>
            </AnimateIn>
            <AnimateIn variant="fadeUp" delay={0}>
              <h2 className="text-md font-medium mb-4">Backend and Infrastructure</h2>
              <section className="mb-12">
                <div className="flex flex-wrap gap-y-6 gap-x-4 justify-start">
                  {tools.backend_and_infrastructure.map(({ Logo, title }, index) => (
                    <AnimateIn key={index} variant="scale" delay={0.1 + index * 0.03} className="w-[calc(25%-12px)] sm:w-[calc(20%-13px)]">
                      <div className="flex flex-col items-center group">
                        <div className="relative h-7 w-7 sm:h-8 sm:w-8 mb-3 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                          <Logo className="h-full w-full" />
                        </div>
                        <span className="text-xs text-zinc-500 dark:text-zinc-400 text-center whitespace-nowrap">{title}</span>
                      </div>
                    </AnimateIn>
                  ))}
                </div>
              </section>
            </AnimateIn>
          </TabsContent>
        </Tabs>
      </div>

      <AnimateIn variant="fadeUp" delay={0.8}>
        <footer className="pt-4 text-xs text-zinc-400 dark:text-zinc-500 flex justify-between items-center">
          <div>birat.studio</div>
          <div>Built with Next.js</div>
        </footer>
      </AnimateIn>
    </main>
  );
}

const projects = [
  {
    title: "Brainly",
    description: "A personal knowledge management system where users can add and organize content from multiple sources in one place.",
    github: "https://github.com/birat04/Brainly",
    technologies: ["Node.js", "Express.js", "TypeScript", "PostgreSQL", "React"],
  },
  {
    title: "ZynkDrive",
    description: "A cloud-based file storage and sharing platform with real-time synchronization, secure file access, and collaboration features.",
    
    github: "https://github.com/birat04/ZynkDrive",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Cloud Storage"],
  },
  {
    title: "InteliBridge",
    description: "An AI-driven automation platform that integrates multiple applications to optimize workflows, reduce manual effort, and enhance efficiency with predictive analytics.",
    
    github: "https://github.com/birat04/InteliBridge",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "AI/ML APIs", "Workflow Automation"],
  },
  {
    title: "Subscription-tracking-api",
    description: "A full backend api to manage and track recurring subscriptions with reminders, spending analytics, and categorization for better financial control.",
    
    github: "https://github.com/birat04/Subscription-tracking-api",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL"],
  },

  
];

const experience = [
  {
    role: "MERN Stack Developer Intern",
    company: "Codtech IT Solutions",
    period: "Mar 2025 - May 2025",
    description: "Completed a 2-month internship focused on MERN stack web development. Built projects including a landing page, weather app, personal portfolio, and backend API, gaining hands-on experience in full-stack development.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "GitHub", "Postman"],
  },
  
];

const tools = {
  frontend: [
    {
      Logo: (props: React.SVGProps<SVGSVGElement>) => <ReactIcon {...props} />,
      title: "React",
    },
    {
      Logo: (props: React.SVGProps<SVGSVGElement>) => <Nextjs {...props} />,
      title: "NextJS",
    },
    {
      Logo: (props: React.SVGProps<SVGSVGElement>) => <Vuejs {...props} />,
      title: "VueJS",
    },
    {
      Logo: (props: React.SVGProps<SVGSVGElement>) => <Html {...props} />,
      title: "HTML",
    },
    {
      Logo: (props: React.SVGProps<SVGSVGElement>) => <Css {...props} />,
      title: "CSS",
    },
    {
      Logo: (props: React.SVGProps<SVGSVGElement>) => <Javascript {...props} />,
      title: "Javascript",
    },
    {
      Logo: (props: React.SVGProps<SVGSVGElement>) => <TypeScript {...props} />,
      title: "Typescript",
    },
    {
      Logo: (props: React.SVGProps<SVGSVGElement>) => <TailwindCSS {...props} />,
      title: "TailwindCSS",
    },
  ],
    backend_and_infrastructure: [
   
    {
      Logo: (props: React.SVGProps<SVGSVGElement>) => <Vercel className="fill-black dark:fill-white" {...props} />,
      title: "Vercel",
      },
    {
      Logo: (props: React.SVGProps<SVGSVGElement>) => <DrizzleORM {...props} />,
      title: "DrizzleORM",
    },
    {
      Logo: (props: React.SVGProps<SVGSVGElement>) => <Bun {...props} />,
      title: "Bun",
    },
    {
      Logo: (props: React.SVGProps<SVGSVGElement>) => <Nodejs {...props} />,
      title: "NodeJS",
    },
    {
      Logo: () => <div className="w-full h-full bg-gray-300 rounded flex items-center justify-center text-xs font-bold text-gray-600">EX</div>,
      title: "ExpressJS",
    },
    {
      Logo: (props: React.SVGProps<SVGSVGElement>) => <Postgres {...props} />,
      title: "PostgreSQL",
    },
  ],
};
