import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { navLinks } from '@/utils/constants';

import Logo from '@/components/logos/Logo';

export default function Header() {
  const [selected, setSelected] = useState(0);

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

      <ul className="flex gap-x-6">
        {navLinks.map((item) => (
          <li
            onClick={() => setSelected(item.id)}
            onKeyDown={(event: { key: string }) =>
              event.key === 'Enter' ? setSelected(item.id) : null
            }
            tabIndex={0}
            key={item.id}
            className="text-lg capitalize"
          >
            <Link href={item.url}>
              <a>{item.label}</a>
            </Link>

            {item.id === selected ? (
              <motion.div
                layoutId="arrow"
                className="flex justify-center bg-amber-400"
              >
                <div className="border-t-2" />
              </motion.div>
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
  );
}
