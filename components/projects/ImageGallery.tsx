import Image from 'next/image';
import { Tab } from '@headlessui/react';
import classNames from 'classnames';

import type { Image as IImage } from '.contentlayer/generated';

interface IProps {
  images: IImage[] | undefined;
  alt: string;
}

const ImageGallery = ({ images, alt }: IProps) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto block w-full max-w-2xl lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images?.map((image, idx) => (
            <Tab
              key={idx}
              className="relative flex h-12 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-neutral-900 hover:bg-neutral-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4 lg:h-28"
            >
              {({ selected }) => (
                <>
                  <span className="sr-only">{alt}</span>
                  <span className="absolute inset-0 overflow-hidden rounded-md">
                    <Image
                      src={image.url}
                      alt=""
                      layout="responsive"
                      width={4}
                      height={3}
                      objectFit="cover"
                      objectPosition="center"
                      className="h-full w-full bg-neutral-100"
                    />
                  </span>
                  <span
                    className={classNames(
                      selected ? 'ring-yellow-500' : 'ring-transparent',
                      'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2'
                    )}
                    aria-hidden="true"
                  />
                </>
              )}
            </Tab>
          ))}
        </Tab.List>
      </div>

      <Tab.Panels className="aspect-w-4 aspect-h-3 w-full pt-6">
        {images?.map((image, idx) => (
          <Tab.Panel key={idx}>
            <Image
              src={image.url}
              alt="Mockup"
              layout="responsive"
              width={4}
              height={3}
              objectFit="cover"
              objectPosition="center"
              className="h-full w-full bg-neutral-100 sm:rounded-lg"
            />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default ImageGallery;
