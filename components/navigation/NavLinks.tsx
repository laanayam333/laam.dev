import Link from 'next/link';

const links = [
  { id: 1, label: 'Work', to: '/' },
  { id: 2, label: 'Blog', to: 'blog' },
  { id: 3, label: 'Contact', to: 'contact' },
];

const NavLinks = () => {
  return (
    <ul className="flex gap-x-6 text-lg font-medium uppercase tracking-widest">
      {links.map((link) => (
        <li
          key={link.id}
          className="tw-transition text-sm hover:text-yellow-600"
        >
          <Link href={link.to}>
            <a>{link.label}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
