import Link from 'next/link';

import Logo from '@/components/logos/Logo';
// // import NavLinks from '@/components/navigation/NavLinks';

export default function Header() {
  return (
    <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-3">
      <div>
        <Link href="/" passHref>
          <a>
            <div className="w-8">
              <Logo />
            </div>
          </a>
        </Link>
      </div>

      <div>
        <a href="mailto:hello@laam.dev">hello@laam.dev</a>
      </div>

      {/* <NavLinks /> */}
    </nav>
  );
}
