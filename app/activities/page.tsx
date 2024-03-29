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
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center mt-10">
  {/* Card 1 */}
  <div className="flex flex-col items-center bg-white dark:bg-gray-800 shadow-lg rounded-lg">
    <div className="w-full max-h-64 overflow-hidden rounded-t-lg">
      <Image
        src="https://images.unsplash.com/photo-1552664730-d307ca884978"
        alt="Design Innovation"
        className="object-cover w-full"
        width={400}
        height={300}
        priority
      />
    </div>
    <div className="p-4">
      <h3 className="text-xl font-bold mb-2">Design Innovation</h3>
      <p className="text-base opacity-70">
        Participants will work in groups to identify, design, and prototype digital health solutions for Multiple Long-Term Conditions.
      </p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="flex flex-col items-center bg-white dark:bg-gray-800 shadow-lg rounded-lg">
    <div className="w-full max-h-64 overflow-hidden rounded-t-lg">
      <Image
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
        alt="Domain experts"
        className="object-cover w-full"
        width={400}
        height={300}
        priority
      />
    </div>
    <div className="p-4">
      <h3 className="text-xl font-bold mb-2">Domain experts</h3>
      <p className="text-base opacity-70">
        There will be access to healthcare professionals, digital health designers, AI experts, patients who can all collaborate.
      </p>
    </div>
  </div>

  {/* Card 3 */}
  <div className="flex flex-col items-center bg-white dark:bg-gray-800 shadow-lg rounded-lg">
    <div className="w-full max-h-64 overflow-hidden rounded-t-lg">
      <Image
        src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66"
        alt="Rapid Lectures"
        className="object-cover w-full"
        width={400}
        height={300}
        priority
      />
    </div>
    <div className="p-4">
      <h3 className="text-xl font-bold mb-2">Rapid Lectures</h3>
      <p className="text-base opacity-70">
        Lectures for beginners and pros on HcAI and digital health AI/ML topics that are relevant to healthcare.
      </p>
    </div>
  </div>

  {/* Card 4 */}
  <div className="flex flex-col items-center bg-white dark:bg-gray-800 shadow-lg rounded-lg">
    <div className="w-full max-h-64 overflow-hidden rounded-t-lg">
      <Image
        src="https://images.unsplash.com/photo-1576595580361-90a855b84b20"
        alt="Hands-on exercices"
        className="object-cover w-full"
        width={400}
        height={300}
        priority
      />
    </div>
    <div className="p-4">
      <h3 className="text-xl font-bold mb-2">Hands-on exercises</h3>
      <p className="text-base opacity-70">
        Hands-on HcAI design exercises to apply on participant’s own projects or what the team has identified.
      </p>
    </div>
  </div>

  {/* Card 5 */}
  <div className="flex flex-col items-center bg-white dark:bg-gray-800 shadow-lg rounded-lg">
    <div className="w-full max-h-64 overflow-hidden rounded-t-lg">
      <Image
        src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04"
        alt="Team presentations"
        className="object-cover w-full"
        width={400}
        height={300}
        priority
      />
    </div>
    <div className="p-4">
      <h3 className="text-xl font-bold mb-2">Team presentations</h3>
      <p className="text-base opacity-70">
        Team presentations and plenary sessions for feedback, and to discuss potential approach to solutions.
      </p>
    </div>
  </div>

  {/* Card 6 */}
  <div className="flex flex-col items-center bg-white dark:bg-gray-800 shadow-lg rounded-lg">
    <div className="w-full max-h-64 overflow-hidden rounded-t-lg">
      <Image
        src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d"
        alt="Advanced prototyping"
        className="object-cover w-full"
        width={400}
        height={300}
        priority
      />
    </div>
    <div className="p-4">
      <h3 className="text-xl font-bold mb-2">Advanced prototyping</h3>
      <p className="text-base opacity-70">
        Create prototypes with help of IT experts for pitch-ready digital health solutions for review by our entrepreneur in residence.
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
