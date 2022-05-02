import { ReactNode } from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import classNames from 'classnames';
import { IoAddOutline, IoRemoveOutline } from 'react-icons/io5';

interface IProps {
  label: string;
  children: ReactNode;
}

const DetailsTab = ({ label, children }: IProps) => {
  return (
    <Disclosure as="div" defaultOpen={label === 'Details' ? true : false}>
      {({ open }) => (
        <>
          <h3>
            <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
              <span
                className={classNames(
                  open ? 'text-yellow-600' : 'text-neutral-900',
                  'text-lg font-medium uppercase tracking-widest lg:text-xl'
                )}
              >
                {label}
              </span>
              <span className="ml-6 flex items-center">
                {open ? (
                  <IoRemoveOutline
                    className="tw-transition block h-6 w-6 text-yellow-400 group-hover:text-yellow-500"
                    aria-hidden="true"
                  />
                ) : (
                  <IoAddOutline
                    className="tw-transition block h-6 w-6 text-neutral-400 group-hover:text-neutral-500"
                    aria-hidden="true"
                  />
                )}
              </span>
            </Disclosure.Button>
          </h3>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel as="div">{children}</Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default DetailsTab;
