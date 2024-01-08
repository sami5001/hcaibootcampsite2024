import Image from 'next/image'

export default function Speakers() {
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
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
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
        </div>
      </div>

      <div className="flex flex-row justify-center">
        <div className="basis-1/3">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert(10%) p-8 rounded-md"
          src="https://www.cs.umd.edu/users/ben/ben_pic_proper-color.jpg"
          alt="Prof Ben Shneiderman"
          width={400}
          height={400}
          priority
        />
        </div>
        <div className="basis-1/2">
            <h2 className={`mb-3 text-2xl font-semibold`}>
                Keynote Speaker
            </h2>
            <h3 className={`m-0 max-w-[30ch] text-xl font-bold`}>
                Professor Ben Shneiderman
            </h3>
            <p className={`my-3 text-lg opacity-80 font-mono`}>
              Emeritus Professor <br />
              Institute for Advanced Computer Studies <br />
              University of Maryland, MD USA <br />
            </p>
            <p className={`m-10 text-base opacity-50`}>
              Ben Shneiderman is a Distinguished University Professor in the Department of Computer Science, Founding Director (1983-2000) of the Human-Computer Interaction Laboratory, and a member of the Institute for Advanced Computer Studies at the University of Maryland, College Park. He pioneered the highlighted textual link in 1983, and it became part of Hyperties, a precursor to the web. His move into information visualisation spawned the commercially successful Spotfire, known for pharmaceutical drug discovery and genomic data analysis. Ben Shneiderman is the author of the breakthrough books, Software Psychology: Human Factors in Computer and Information Systems and Designing the User Interface: Strategies for Effective Human-Computer Interaction. His books are popular for his list of Eight Golden Rules of Interface Design which is frequently taught in Human-Computer Interaction courses.
            </p>
        </div>
      </div>

      <div className="flex flex-row justify-center">
        <div className="basis-1/3">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert(10%) p-8 rounded-md"
          src="https://github.com/OxHcAI/HcAI-Bootcamp/assets/11949941/5e436009-97bc-4dce-8d6e-80073c3fdf66"
          alt="Kurt Waltenbaugh"
          width={400}
          height={400}
          priority
        />
        </div>
        <div className="basis-1/2">
            <h2 className={`mb-3 text-2xl font-semibold`}>
                Entrepreneur in Residence
            </h2>
            <h3 className={`m-0 max-w-[30ch] text-xl font-bold`}>
                Kurt Waltenbaugh
            </h3>
            <p className={`my-3 text-lg opacity-80 font-mono`}>
              Managing Advisor <br />
              Kestrel Rising <br />
              Minneapolis, MN USA <br />
            </p>
            <p className={`m-10 text-base opacity-50`}>
              Kurt Waltenbaugh is a serial entrepreneur with a career spent building solutions using data and to understand, predict, and influence consumer behavior. Kurt has built successful analytic solutions, products, and companies in the healthcare, retail, and education/credentialing industries. His previous companies were sold to Oracle (Texas), Pearson Education (London & New York), and Unite Us (New York). Kurt helps organizations better understand consumer behavior through consulting and strategic advisory services at Kestrel Rising in Minneapolis. He holds a Master of Business Administration from the University of Minnesota Carlson School of Management and a Bachelor of Arts in Political Science/Technology & Policy Studies from Carleton College.
            </p>
        </div>
      </div>

      <div className="relative flex mt-24 place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#8A1751] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert(10%)"
          src="/speaker-updates.svg"
          alt="More Spkeaers to be announced soon..."
          width={700}
          height={500}
          priority
        />
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
