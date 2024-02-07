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

<div className="flex flex-row justify-center mt-10 space-x-10">
  <div className="flex flex-col justify-center w-1/2">
    <div className="flex justify-center">
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert(10%) p-8 rounded-lg object-center"
        src="/images/sami.webp"
        alt="Sami Adnan"
        width={400}
        height={400}
        priority
      />
    </div>
    <div className="px-8 py-6">
      <h2 className="mb-3 text-2xl font-semibold">Trainer</h2>
      <h3 className="m-0 text-xl font-bold">Sami Adnan</h3>
      <p className="my-3 text-sm opacity-80 font-mono">
        DPhil Researcher <br />
        Nuffield Department of Primary Care Health Sciences <br />
        University of Oxford <br />
      </p>
      <p className="my-3 text-base opacity-50">
        Sami Adnan is a DPhil Candidate at the Nuffield Department of Primary Care Health Sciences, University of Oxford. His research focuses on developing and evaluating artificial intelligence and digital health solutions for mitigating complex healthcare challenges, e.g. multiple long-term conditions. Prior to his research in Oxford, Sami worked as a Research Fellow at Charit&eacute; – University Hospital Berlin, and prior to that as a Healthcare Researcher at Maastricht University, and as an External Consultant with the World Health Organization. Sami has also worked at Apple Inc. for 8 years in different roles ranging from sales and product development to training new employees and designing company-internal solutions.
      </p>
    </div>
  </div>
  <div className="flex flex-col justify-center w-1/2">
    <div className="flex justify-center">
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert(10%) p-8 rounded-lg object-center"
        src="/images/jonathan.webp"
        alt="Dr Jonathan Edelman"
        width={400}
        height={400}
        priority
      />
    </div>
    <div className="px-8 py-6">
      <h2 className="mb-3 text-2xl font-semibold">Trainer</h2>
      <h3 className="m-0 text-xl font-bold">Dr Jonathan Edelman</h3>
      <p className="my-3 text-sm opacity-80 font-mono">
        Founder & Executive Director <br />
        Center for Advanced Design Studies, Palo Alto, CA <br />
        Lecturer, Mechanical Engineering, University of Stanford <br />
      </p>
      <p className="my-3 text-base opacity-50">
        Dr Jonathan Edelman is Founder & Executive Director of the Center for Advanced Design Studies, CA&#59; and Lecturer, Mechanical Engineering at Stanford University. He is a senior design strategist and early-stage product development director with experience playing a leading role in creating breakthrough products for preeminent healthcare, software, and design companies. Jonathan&apos;s professional and academic experience includes working with, facilitating and teaching teams from the around the globe in a wide spectrum of domains including Product Service System Design, User Experience, Interaction Design, Business Innovation, Digital Transformation, Digital Health Design, and FinTech. His design practice has encompassed lighting design, interaction design and programming, product-service-system design, digital health design, designing for the new financial landscape, design for value creation, painting, speaking, teaching, advising and consulting.
      </p>
    </div>
  </div>
</div>
<div className="flex justify-center mt-10">
  <p className="mx-10 text-base opacity-50">
    Together, Sami and Jonathan are developing this bootcamp, tailored to the medical field to train participants on advanced methods in design innovation that will enable multiple stakeholders, regardless of their experience level, to engage in creating prototypes for Medical AI.
  </p>
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
