import Image from 'next/image'

export default function Trainers() {
  return (
   <main className="flex flex-col items-center justify-between p-6">
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


  </main>
  )
}
