import Image from 'next/image'

export default function Trainers() {
  return (
   <main className="flex flex-col items-center justify-between p-6">

<div className="flex flex-row justify-center mt-10 space-x-10 max-w-5xl">
  <div className="flex flex-col justify-between w-1/2">
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
    <div className="px-8 py-6 flex-1">
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
  <div className="flex flex-col justify-between w-1/2">
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
    <div className="px-8 py-6 flex-1">
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
<div className="flex justify-center mt-10 max-w-5xl">
  <p className="mx-10 text-base opacity-50">
    Together, Sami and Jonathan are developing this bootcamp, tailored to the medical field to train participants on advanced methods in design innovation that will enable multiple stakeholders, regardless of their experience level, to engage in creating prototypes for Medical AI.
  </p>
</div>

  </main>
  )
}
