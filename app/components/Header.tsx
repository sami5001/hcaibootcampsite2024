"use client";

import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Header() {
  const pathname = usePathname();

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {/* Join the Newsletter or Home */}
        <p className="flex w-auto justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          {pathname === '/' ? (
            <a
              href="https://forms.office.com/e/HukNaP5vQ6"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="text-lg font-semibold">
                Join the newsletter{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h3>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                And register your interest.
              </p>
            </a>
          ) : (
            <a
              href="/"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              rel="noopener noreferrer"
            >
              <h3 className="text-lg font-semibold">
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  &lt;-
                </span>{' '}
                Home
              </h3>
            </a>
          )}
        </p>

        {/* Logos */}
        <div className="flex h-auto w-auto items-center justify-center gap-4 bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 lg:pointer-events-auto"
            href="https://www.arc-oxtv.nihr.ac.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/funded-by-nihr-logo.png"
              alt="Funded by NIHR Logo"
              className="dark:invert(10%)"
              width={200}
              height={48}
              priority
            />
          </a>
          <a
            className="pointer-events-none flex place-items-center gap-2 lg:pointer-events-auto"
            href="https://www.phc.ox.ac.uk/research/groups-and-centres/medical-statistics/COMPUTE"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/compute-logo.svg"
              alt="CoMPuTE"
              className="dark:invert(10%)"
              width={100}
              height={100}
              priority
            />
          </a>
          <a
            className="pointer-events-none flex place-items-center gap-2 lg:pointer-events-auto"
            href="https://github.com/OxHcAI/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/oxhcai-logo.svg"
              alt="Oxford Human-Centred AI"
              className="dark:invert(10%)"
              width={100}
              height={100}
              priority
            />
          </a>
          <a
            className="pointer-events-none flex place-items-center gap-2 lg:pointer-events-auto"
            href="https://www.phc.ox.ac.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/oxford-logo.svg"
              alt="University of Oxford"
              className="dark:grayscale"
              width={100}
              height={100}
              priority
            />
          </a>
        </div>
      </div>
    </main>
  );
}
