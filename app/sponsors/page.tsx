import Image from 'next/image'

export default function Trainers() {
  return (
   <main className="flex min-h-screen flex-col items-center justify-between p-24">
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


<div className="max-w-5xl mx-auto">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    {/* First Column */}
    <div className="flex flex-col justify-center">
      {/* First Item */}
      <div className="mx-10 mb-6" style={{ height: '200px' }}>
        <Image
          src="/images/AIM-RSF_Logo-white.png"
          alt="The Alan Turing Institute AIM RSF"
          className="object-cover object-center h-full"
          priority
        />
      </div>
      <div className="mx-10">
        <h3 className={`m-0 mt-4 text-xl font-bold`}>
          The Alan Turing Institute AIM RSF
        </h3>
        <p className={`mt-2 text-base opacity-50`}>
          AI for Multiple Long-term Conditions, Research Support Facility. London, UK
        </p>
      </div>
    </div>
    {/* Second Column */}
    <div className="flex flex-col justify-center">
      {/* Second Item */}
      <div className="mx-10 mb-6" style={{ height: '200px' }}>
        <Image
          src="/images/kestrel-rising-logo.svg"
          alt="Kestrel Rising"
          className="object-cover object-center h-full"
          priority
        />
      </div>
      <div className="mx-10">
        <h3 className={`m-0 mt-4 text-xl font-bold`}>
          Kestrel Rising
        </h3>
        <p className={`mt-2 text-base opacity-50`}>
          Business Consulting and Services. Minneapolis, MN USA
        </p>
      </div>
    </div>
    {/* Third Item */}
    <div className="flex flex-col justify-center">
      <div className="mx-10 mb-6" style={{ height: '200px' }}>
        <Image
          src="/compute-logo.svg"
          alt="CoMPuTE"
          className="object-cover object-center h-full"
          priority
        />
      </div>
      <div className="mx-10">
        <h3 className={`m-0 mt-4 text-xl font-bold`}>
          CoMPuTE
        </h3>
        <p className={`mt-2 text-base opacity-50`}>
          University of Oxford.
        </p>
      </div>
    </div>
    {/* Fourth Item */}
    <div className="flex flex-col justify-center">
      <div className="mx-10 mb-6" style={{ height: '200px' }}>
        <Image
          src="/images/cfads.svg"
          alt="The Center for Advanced Design Studies"
          className="object-cover object-center h-full"
          priority
        />
      </div>
      <div className="mx-10">
        <h3 className={`m-0 mt-4 text-xl font-bold`}>
          The Center for Advanced Design Studies
        </h3>
        <p className={`mt-2 text-base opacity-50`}>
          Design Consultancy. Palo Alto, CA USA
        </p>
      </div>
    </div>
    {/* Fifth Item */}
    <div className="flex flex-col justify-center">
      <div className="mx-10 mb-6" style={{ height: '200px' }}>
        <Image
          src="/images/st-hughs-logo.svg"
          alt="St Hugh's College"
          className="object-cover object-center h-full"
          priority
        />
      </div>
      <div className="mx-10">
        <h3 className={`m-0 mt-4 text-xl font-bold`}>
          St Hugh&apos;s College
        </h3>
        <p className={`mt-2 text-base opacity-50`}>
          University of Oxford
        </p>
      </div>
    </div>
    {/* Sixth Item */}
    <div className="flex flex-col justify-center">
      <div className="mx-10 mb-6" style={{ height: '200px' }}>
        <Image
          src="/images/nihr-arc-logo.png"
          alt="NIHR ARC OxTV"
          className="object-cover object-center h-full"
          priority
        />
      </div>
      <div className="mx-10">
        <h3 className={`m-0 mt-4 text-xl font-bold`}>
          NIHR ARC OxTV
        </h3>
        <p className={`mt-2 text-base opacity-50`}>
          Oxford and Thames Valley Applied Research Collaboration, NIHR
        </p>
      </div>
    </div>
    {/* Seventh Item */}
    <div className="flex flex-col justify-center">
      <div className="mx-10 mb-6" style={{ height: '200px' }}>
        <Image
          src="/images/become-a-sponsor.svg"
          alt="Become a sponsor"
          className="object-cover object-center h-full"
          priority
        />
      </div>
      <div className="mx-10">
        <h3 className={`m-0 mt-4 text-xl font-bold`}>
          Become a sponsor!
        </h3>
        <p className={`mt-2 text-base opacity-50`}>
          Be part of this unique AI Event at Oxford.
        </p>
      </div>
    </div>
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
