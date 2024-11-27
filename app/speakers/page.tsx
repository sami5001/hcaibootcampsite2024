import Image from 'next/image'

export default function Speakers() {
  return (
    <main className="flex flex-col items-center justify-between p-6">

      <div className="flex flex-row justify-center mt-10">
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
            <p className={`my-3 text-sm opacity-80 font-mono`}>
              Emeritus Professor <br />
              Institute for Advanced Computer Studies <br />
              University of Maryland, MD USA <br />
            </p>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">Human-centred AI</span>
            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">Design Innovation</span>
            <span className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400">Digital Health</span>
            <p className={`m-0 mt-3 mb-10 text-base opacity-50`}>
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
            <p className={`my-3 text-sm opacity-80 font-mono`}>
              Managing Advisor <br />
              Kestrel Rising <br />
              Minneapolis, MN USA <br />
            </p>
            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">Medical Entrepreneurship</span>
            <span className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400">Digital Health</span>
            <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400">Artificial Intelligence</span>
            <p className={`m-0 mt-3 mb-10 text-base opacity-50`}>
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

    </main>
  )
}
