import React from 'react';
import Image from 'next/image';

const Item: React.FC<{ imageSrc: string; altText: string; title: string; description: string; }> = ({ imageSrc, altText, title, description }) => {
  return (
    <div className="max-w-full sm:max-w-md mx-auto">
      <div className="flex flex-col h-full">
        <div className="relative flex items-center justify-start h-48 sm:h-64 max-h-48 sm:max-h-96 overflow-hidden">
          <Image
            src={imageSrc}
            alt={altText}
            className="w-auto h-auto max-w-full max-h-full"
            layout="responsive"
            width={400}
            height={300}
            priority
          />
        </div>
        <div className="p-4 flex-grow">
          <h3 className="text-lg font-semibold mb-2 text-left">{title}</h3>
          <p className="text-sm text-gray-700 text-left">{description}</p>
        </div>
      </div>
    </div>
  );
};



export default function Trainers() {
  return (
   <main className="flex flex-col items-center justify-between min-h-screen p-8">


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

  </main>
  )
}
