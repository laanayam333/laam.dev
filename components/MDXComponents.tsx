import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import TechStack from '@/components/projects/TechStack';

export interface ImageProps {
  alt: string;
  src: string;
}

export interface IImage {
  props: ImageProps;
}

export interface LinkProps {
  href: string;
  children: ReactNode;
}

export interface ILink {
  props: LinkProps;
}

const CustomLink = (props: LinkProps) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

function RoundedImage(props: ImageProps) {
  return (
    <Image
      alt={props.alt}
      src={props.src}
      className="rounded-lg bg-neutral-100"
      layout="responsive"
      width={4}
      height={3}
    />
  );
}

const MDXComponents = {
  Image: RoundedImage,
  a: CustomLink,
  TechStack,
};

export default MDXComponents;
