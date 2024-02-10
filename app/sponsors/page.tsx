import React from 'react';
import Image from 'next/image';

const Item: React.FC<{ imageSrc: string; altText: string; title: string; description: string; }> = ({ imageSrc, altText, title, description }) => {
  return (
    <div className="max-w-full sm:max-w-md mx-auto">
      <div className="flex flex-col h-full overflow-hidden items-stretch">
        <div className="relative flex items-end h-48 sm:h-64 max-h-96">
          <Image
            src={imageSrc}
            alt={altText}
            className="w-full h-full"
            layout="fill"
            objectFit="contain"
            objectPosition="bottom left"
          />
        </div>
        <div className="p-4 flex flex-col justify-end">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
};




export default function Trainers() {
  return (
   <main className="flex flex-col items-center justify-between min-h-screen p-8">
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
      <a
        href="/"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        rel="noopener noreferrer"
      >
        <h3 className={`text-lg font-semibold`}>
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            &lt;-
          </span>
          {' '} Home
        </h3>
      </a>
      </p>
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center gap-4 bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="https://www.arc-oxtv.nihr.ac.uk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
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
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://www.phc.ox.ac.uk/research/groups-and-centres/medical-statistics/COMPUTE"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
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
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://github.com/OxHcAI/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
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
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://www.phc.ox.ac.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
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

    <div className="max-w-5xl w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
          {/* Items */}
          <Item
            imageSrc="/images/AIM-RSF_Logo-white.png"
            altText="The Alan Turing Institute AIM RSF"
            title="The Alan Turing Institute AIM RSF"
            description="AI for Multiple Long-term Conditions, Research Support Facility. London, UK"
          />
          <Item
            imageSrc="/images/kestrel-rising-logo.svg"
            altText="Kestrel Rising"
            title="Kestrel Rising"
            description="Business Consulting and Services. Minneapolis, MN USA"
          />
          <Item
            imageSrc="compute-logo.svg"
            altText="CoMPuTE"
            title="CoMPuTE"
            description="University of Oxford."
          />
          <Item
            imageSrc="/images/cfads.svg"
            altText="The Center for Advanced Design Studies"
            title="The Center for Advanced Design Studies"
            description="Design Consultancy. Palo Alto, CA USA"
          />
          <Item
            imageSrc="/images/st-hughs-logo.svg"
            altText="St Hugh's College"
            title="St Hugh's College"
            description="University of Oxford"
          />
          <Item
            imageSrc="/images/nihr-arc-logo.png"
            altText="NIHR ARC OxTV"
            title="NIHR ARC OxTV"
            description="Oxford and Thames Valley Applied Research Collaboration, NIHR"
          />
          <Item
            imageSrc="/images/become-a-sponsor.svg"
            altText="Become a sponsor"
            title="Become a sponsor!"
            description="Be part of this unique AI Event at Oxford."
          />
          <Item
            imageSrc="/images/become-a-sponsor.svg"
            altText="Become a sponsor"
            title="Become a sponsor!"
            description="Be part of this unique AI Event at Oxford."
          />
        </div>
      </div>

    <div className="mb-32 mt-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      <a
        href="./speakers"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Speakers{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Experts and pioneers in the field, including Keynote Speech by Professor Ben Shneiderman.
        </p>
      </a>

      <a
        href="./trainers"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Trainers{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Learn design innovation methods to create Digital Health solutions!
        </p>
      </a>

      <a
        href="./activities"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Activities{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Bootcamp activities from design to prototyping. Take your solutions towards deployment!
        </p>
      </a>

      <a
        href="./sponsors"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Sponsors{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Be part of this unique AI Event at Oxford. Empower stakeholders to build Medical AI.
        </p>
      </a>
    </div>
  </main>
  )
}
