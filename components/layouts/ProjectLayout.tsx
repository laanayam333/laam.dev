import type { PropsWithChildren } from 'react';
import type { Project } from 'contentlayer/generated';

import TechStack from '@/components/projects/TechStack';
import Details from '@/components/projects/Details';
import DetailsContainer from '@/components/projects/accordion/Container';
import DetailsTab from '@/components/projects/accordion/Tab';
import LiveSite from '@/components/projects/LiveSite';
import ImageGallery from '@/components/projects/ImageGallery';

export default function ProjectLayout({
  children,
  project,
}: PropsWithChildren<{ project: Project }>) {
  return (
    <main>
      <section className="grid grid-cols-5 gap-x-0 lg:gap-x-24">
        <div className="col-span-5 lg:col-span-2">
          <h1 className="font-heading text-7xl font-bold lg:text-8xl">
            {project.title}
          </h1>

          <p className="mt-2 text-xl lg:text-2xl">{project.description}</p>

          <div aria-labelledby="details-heading" className="mt-4">
            <h2 id="details-heading" className="sr-only">
              Project details
            </h2>
          </div>

          <div className="hidden lg:block">
            <DetailsContainer>
              <DetailsTab label="Details">
                <Details
                  year={project.year}
                  role={project.role}
                  client={project.client}
                />
              </DetailsTab>

              <DetailsTab label="Tech Stack">
                <TechStack
                  frontend={project.frontend}
                  css={project.css}
                  animation={project.animation}
                  cms={project.cms}
                  hosting={project.hosting}
                />
              </DetailsTab>
            </DetailsContainer>
          </div>
        </div>

        <div className="col-span-5 lg:col-span-3">
          <div className="mb-4">
            <LiveSite siteURL={project.siteURL} />
          </div>

          <ImageGallery images={project.images} alt={project.title} />
        </div>
      </section>

      <section className="mt-12 block lg:hidden">
        <DetailsContainer>
          <DetailsTab label="Details">
            <Details
              year={project.year}
              role={project.role}
              client={project.client}
            />
          </DetailsTab>

          <DetailsTab label="Tech Stack">
            <TechStack
              frontend={project.frontend}
              css={project.css}
              animation={project.animation}
              cms={project.cms}
              hosting={project.hosting}
            />
          </DetailsTab>
        </DetailsContainer>
      </section>

      <div className="prose prose-xl col-span-3 col-start-3 mx-auto my-12 lg:col-span-2 lg:my-24">
        {children}
      </div>
    </main>
  );
}
