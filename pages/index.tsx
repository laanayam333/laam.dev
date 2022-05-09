import { pick } from '@contentlayer/client';

import { allProjects } from '.contentlayer/generated';
import type { Project } from '.contentlayer/generated';

import SEO from '@/components/shared/SEO';
import ProjectList from '@/components/projects/ProjectList';

interface IProps {
  projects: Project[];
}

const HomePage = ({ projects }: IProps) => {
  return (
    <>
      <SEO
        metaTitle="Home"
        metaDescription="Portfolio website of Madrid-based frontend web developer Luis Alejandro Anaya Marín."
      />

      <article className="mx-auto max-w-7xl">
        <section className="flex justify-end text-right">
          <h1 className="w-full text-4xl md:w-2/3 md:text-5xl">
            <span className="text-amber-400">L</span>uis{' '}
            <span className="text-amber-400">A</span>lejandro{' '}
            <span className="text-amber-400">A</span>naya{' '}
            <span className="text-amber-400">M</span>arín
            <span>
              , freelance frontend web developer and UX/UI designer based in
              Madrid, Spain.
            </span>
          </h1>
        </section>

        <section className="mt-24">
          <ProjectList projects={projects} />
        </section>
      </article>
    </>
  );
};

export default HomePage;

export function getStaticProps() {
  const projects = allProjects
    .map((project) =>
      pick(project, [
        'slug',
        'title',
        'description',
        'role',
        'year',
        'siteURL',
        'cover',
        'images',
        'frontend',
        'css',
        'animation',
        'cms',
        'hosting',
      ])
    )
    .sort((a, b) => Number(new Date(b.year)) - Number(new Date(a.year)));

  return {
    props: {
      projects,
    },
  };
}
