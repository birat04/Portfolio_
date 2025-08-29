"use client";

import { ThemeToggle } from "@/components/ThemeToggle";
import { AnimateIn } from "@/components/animations/AnimateIn";
import { ArrowUpRight } from "lucide-react";
import { track } from "@vercel/analytics";
import Link from "next/link";

export default function Links() {
  return (
    <main className="text-zinc-900 dark:text-zinc-100 max-w-xl mx-auto px-4 py-4 flex flex-col h-svh justify-between">
      <div>
        <AnimateIn variant="fadeUp">
          <section className="mb-12">
            <AnimateIn variant="fadeUp" delay={0.2}>
              <h1 className="text-lg font-medium tracking-tight mb-8 flex items-baseline justify-between">
                <span>some of my useful links</span>
                <ThemeToggle />
              </h1>
            </AnimateIn>
          </section>
        </AnimateIn>

        

        <AnimateIn variant="fadeUp" delay={0.4}>
          <div className="flex flex-col gap-2">
            {projectLinks.map((link) => (
              <div key={link.name} className="group">
                <Link
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-lg hover:translate-x-1 transition-all duration-300 ease-out"
                  onClick={() => track(link.track || `${link.name.toLowerCase()}_link_clicked`)}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight />
                </Link>
              </div>
            ))}
          </div>
        </AnimateIn>

        <AnimateIn variant="fadeUp" delay={0.4} className="mt-8">
          <div className="flex flex-col gap-2">
            {socialLinks.map((link) => (
              <div key={link.name} className="group">
                <Link
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-lg hover:translate-x-1 transition-all duration-300 ease-out"
                  onClick={() => track(link.track || `${link.name.toLowerCase()}_link_clicked`)}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight />
                </Link>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>

      <AnimateIn variant="fadeUp" delay={0.8} className="">
        <footer className="pt-4 text-xs text-zinc-400 dark:text-zinc-500 flex justify-between items-center">
          <div>birat.studio</div>
          <div>Built with Next.js</div>
        </footer>
      </AnimateIn>
    </main>
  );
}

type Link = {
  name: string;
  url: string;
  track?: string;
};

const projectLinks: Link[] = [
  {
    name: "Brainly",
    url: "https://github.com/birat04/Brainly",
    track: "brainly_github_clicked"
  },
  {
    name: "ZynkDrive",
    url: "https://github.com/birat04/ZynkDrive",
    track: "zynkdrive_github_clicked"
  },
  {
    name: "InteliBridge",
    url: "https://github.com/birat04/InteliBridge",
    track: "intelibridge_github_clicked"
  },
  {
    name: "Subscription API",
    url: "https://github.com/birat04/Subscription-tracking-api",
    track: "subscription_api_github_clicked"
  }
];

const socialLinks: Link[] = [
  {
    name: "Portfolio",
    url: "https://birat.dev",
  },
  {
    name: "github",
    url: "https://github.com/birat04",
  },
  {
    name: "x",
    url: "https://x.com/BiratRoka",
  },

  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/birat-roka-01a7481b2/",
  },
  {
    name: "email",
    url: "mailto:rokabirat059@gmail.com",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/birat.xyz/",
  },
];
