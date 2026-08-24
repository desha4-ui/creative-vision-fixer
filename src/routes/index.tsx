import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/about";
import { Breakdown } from "@/components/breakdown";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { ProjectSlide } from "@/components/project-slide";
import { Reveal } from "@/components/reveal";
import { Services } from "@/components/services";
import { SiteNav } from "@/components/site-nav";
import { projects } from "@/data/projects";

const title = "Mostafa Samir — Healthcare Full-Stack Engineer";
const description =
  "Healthcare full-stack engineer building EHR platforms, HL7/FHIR interoperability, telehealth, and patient portals with .NET 8, Angular, React, and Next.js. Based in Tanta, Egypt.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <main>
        <Hero />
        <About />

        <section id="work" className="px-4 py-8 sm:px-6 lg:py-12">
          <div className="mx-auto max-w-6xl space-y-4">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-4 px-2">
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] text-brand-orange uppercase">
                    Selected work
                  </p>
                  <h2 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">
                    Projects &amp; case studies
                  </h2>
                </div>
                <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                  EHR platforms, telehealth and remote monitoring, HL7/FHIR interoperability, and
                  patient-facing portals.
                </p>
              </div>
            </Reveal>

            {projects.map((project) => (
              <Reveal key={project.slug}>
                <ProjectSlide project={project} />
              </Reveal>
            ))}
          </div>
        </section>

        <Breakdown />
        <Services />
        <Contact />
      </main>
    </div>
  );
}
