// /app/xai-workshop/page.tsx
"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function XAIWorkshop() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    role: '',
    affiliation: '',
    email: '',
    expertise: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Create mailto link
    const subject = encodeURIComponent('xAI Workshop registration');
    const body = encodeURIComponent(
      `Full Name: ${formData.fullName}\n` +
      `Role: ${formData.role}\n` +
      `Affiliation/Institute: ${formData.affiliation}\n` +
      `Email: ${formData.email}\n` +
      `Expertise: ${formData.expertise}`
    );

    // Open default email client with pre-filled information
    window.location.href = `mailto:sami.adnan@phc.ox.ac.uk,Kristyna.Kacafirkova@vub.be?subject=${subject}&body=${body}`;

    setSubmitMessage('Your email client has been opened with the registration details. Please send the email to complete your registration.');
    setIsSubmitting(false);

    // Reset form after a delay
    setTimeout(() => {
      setFormData({
        fullName: '',
        role: '',
        affiliation: '',
        email: '',
        expertise: ''
      });
      setShowModal(false);
      setSubmitMessage('');
    }, 5000);
  };
  const workshopData = {
    overview: {
      title: "xAI Workshop",
      subtitle: "Designing Explainable AI Systems",
      description: "A comprehensive workshop on understanding and implementing explainable AI techniques in medical applications, focusing on transparency, interpretability, and trust in AI systems.",
      date: "November 2025",
      duration: "1-Day Workshop",
      participants: "9-12 max (to form 3 groups)"
    },
    modules: [
      {
        title: "Introduction",
        time: "13:00 - 13:25",
        description: "Introducing the topic and goal of the workshop, getting to know each other & warming-up",
        topics: [
          "Short introduction to XAI concepts",
          "Healthcare use case(s) overview",
          "Workshop goals and methodology",
          "Participant introductions and icebreaker"
        ]
      },
      {
        title: "Exercise 1: Mapping the Actors",
        time: "13:25 - 14:00",
        description: "Defining the different actors involved in AI applications and their needs",
        topics: [
          "Identifying key stakeholders",
          "Building personas for different actors",
          "Understanding diverse perspectives",
          "Group presentations of personas"
        ]
      },
      {
        title: "Exercise 2: XAI Needs per Actor",
        time: "14:00 - 14:50",
        description: "Determine specific questions each actor has about the application requiring explanation",
        topics: [
          "Identifying explanation needs",
          "Global vs local explanations",
          "Values and properties consideration",
          "Group discussion of XAI needs"
        ]
      },
      {
        title: "Exercise 3: Prioritising & Timing",
        time: "15:00 - 15:30",
        description: "Identify the most important explainability needs and when explanations are required",
        topics: [
          "Voting on priority needs",
          "Timing of explanations",
          "Critical decision points",
          "Group consensus building"
        ]
      },
      {
        title: "Exercise 4: Translating the Needs",
        time: "15:30 - 16:25",
        description: "Design tangible explanations specific to the healthcare application",
        topics: [
          "Prototyping explanations",
          "Visual and textual design",
          "Implementation strategies",
          "Presentation of solutions"
        ]
      },
      {
        title: "Closing & Feedback",
        time: "16:25 - 16:30",
        description: "Reflect on exercises and share key takeaways",
        topics: [
          "Main learnings",
          "Implementation insights",
          "Future applications",
          "Participant feedback"
        ]
      }
    ],
    objectives: [
      {
        title: "Integrate Early Design",
        description: "Learn how to integrate explainability early in the design process to ensure transparency from the start"
      },
      {
        title: "Identify Stakeholder Needs",
        description: "Reflect on who the application targets, why different actors use it, and their specific explanation needs"
      },
      {
        title: "Apply to Real Use Cases",
        description: "Apply explainability methods to real healthcare scenarios through hands-on exercises"
      },
      {
        title: "Co-create Solutions",
        description: "Build shared understanding across technical and non-technical teams for responsible and trustworthy AI"
      }
    ],
    whatIsExplainability: {
      title: "What is Explainability?",
      intro: "AI and Machine Learning are increasingly used in healthcare and other high-impact sectors. Yet, many of these systems remain 'black boxes': their inner workings are hidden, making it hard to understand or trust their decisions.",
      description: "Explainable AI (XAI) seeks to make AI systems transparent and human-understandable. By designing explanations from the start, we can:",
      benefits: [
        "Align AI with human decision-making",
        "Detect bias and risks early in development",
        "Ensure trustworthiness, fairness and accountability"
      ],
      conclusion: "However, most current XAI techniques focus only on the technical side. To create truly trustworthy systems, explanations must be designed with people in mind — combining technical methods with human-centered design, ethics, and diverse user perspectives."
    },
    whyParticipate: {
      title: "Why Participate?",
      description: "Through discussions and exercises, we will work together to determine the best explainability approaches for different stakeholders:",
      benefits: [
        "Learn how to integrate explainability early in the design process",
        "Apply methods to real healthcare use cases",
        "Build a shared understanding across technical and non-technical teams",
        "Co-create practical solutions for responsible and trustworthy AI"
      ]
    },
    prerequisites: [
      "Interest in AI ethics and healthcare applications",
      "No technical background required",
      "Open to collaborative learning",
      "Willingness to engage in group exercises"
    ],
    instructors: [
      {
        name: "Kristýna Sirka Kacafírková",
        role: "PhD Candidate",
        affiliation: "imec-SMIT, Vrije Universiteit Brussel, Brussels, Belgium"
      },
      {
        name: "Katherine (Kate) Prescott",
        role: "Programme Manager",
        affiliation: "Oxford-GSK Collaboration in Biostatistics & AI in Medicine, University of Oxford"
      },
      {
        name: "Sami Adnan",
        role: "DPhil Candidate",
        affiliation: "NDPCHS, University of Oxford"
      }
    ]
  };

  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-purple-600 to-blue-800 dark:from-purple-900 dark:to-blue-950 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            {workshopData.overview.title}
          </h1>
          <p className="text-xl text-white/90 mb-4">
            {workshopData.overview.subtitle}
          </p>
          <div className="flex justify-center gap-6 text-white/80">
            <span className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {workshopData.overview.date}
            </span>
            <span className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {workshopData.overview.duration}
            </span>
            <span className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {workshopData.overview.participants}
            </span>
          </div>
        </div>
      </section>

      {/* What is Explainability Section */}
      <section className="w-full py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{workshopData.whatIsExplainability.title}</h2>
            <div className="w-24 h-1 bg-purple-600 dark:bg-purple-500 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              {workshopData.whatIsExplainability.intro}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              {workshopData.whatIsExplainability.description}
            </p>
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 mb-6">
              <ul className="space-y-3">
                {workshopData.whatIsExplainability.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              {workshopData.whatIsExplainability.conclusion}
            </p>

            {/* XAI Workshop Diagram */}
            <div className="mt-8 flex justify-center">
              <div className="relative w-full max-w-3xl">
                <Image
                  src="/xai-workshop.svg"
                  alt="XAI Workshop Framework Diagram"
                  width={800}
                  height={400}
                  className="w-full h-auto rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Goal and Why Participate Section */}
      <section className="w-full py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Workshop Goal */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">What is the Goal?</h2>
              <div className="w-24 h-1 bg-purple-600 dark:bg-purple-500 mb-6"></div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                This 1-day workshop explores how to implement effective oversight to keep AI aligned with ethical and societal values. Using a practical use case, we will explore step by step:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300">What the AI application is meant to achieve</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Who the different stakeholders are and their explanation needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Why explainability is important in healthcare</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300">How to design for appropriate trust in AI systems</span>
                </li>
              </ul>
            </div>

            {/* Why Participate */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{workshopData.whyParticipate.title}</h2>
              <div className="w-24 h-1 bg-purple-600 dark:bg-purple-500 mb-6"></div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                {workshopData.whyParticipate.description}
              </p>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <ul className="space-y-3">
                  {workshopData.whyParticipate.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Learning Objectives */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">Learning Objectives</h2>
            <div className="w-24 h-1 bg-purple-600 dark:bg-purple-500 mx-auto mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {workshopData.objectives.map((objective, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 border-l-4 border-purple-600">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {objective.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {objective.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Schedule */}
      <section className="w-full py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Workshop Schedule</h2>
            <div className="w-24 h-1 bg-purple-600 dark:bg-purple-500 mx-auto"></div>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
              A structured day of interactive exercises and collaborative learning
            </p>
          </div>

          <div className="space-y-6">
            {workshopData.modules.map((module, index) => (
              <div key={index}>
                {/* Add Coffee Break after Exercise 2 */}
                {index === 3 && (
                  <div className="bg-purple-100 dark:bg-purple-900/30 rounded-xl p-6 mb-6 text-center">
                    <div className="flex items-center justify-center">
                      <svg className="w-8 h-8 text-purple-600 dark:text-purple-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v2a2 2 0 002 2h2a2 2 0 002-2v-2M12 9v4m0-11a9 9 0 110 18 9 9 0 010-18z" />
                      </svg>
                      <h3 className="text-xl font-bold text-purple-800 dark:text-purple-300">Coffee Break</h3>
                      <span className="ml-4 text-purple-700 dark:text-purple-400">14:50 - 15:00</span>
                    </div>
                  </div>
                )}

                <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-800">
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-0">
                        {module.title}
                      </h3>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300">
                        {module.time}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {module.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {module.topics.map((topic, idx) => (
                        <div key={idx} className="flex items-start">
                          <svg className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-600 dark:text-gray-400">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prerequisites Section */}
      <section className="w-full py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Prerequisites</h2>
            <div className="w-24 h-1 bg-purple-600 dark:bg-purple-500 mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8">
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                To get the most out of this workshop, participants should have:
              </p>
              <ul className="space-y-3">
                {workshopData.prerequisites.map((prereq, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{prereq}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="w-full py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Workshop Instructors</h2>
            <div className="w-24 h-1 bg-purple-600 dark:bg-purple-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workshopData.instructors.map((instructor, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-800">
                <div className="w-24 h-24 bg-purple-100 dark:bg-purple-900/40 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {instructor.name}
                </h3>
                <p className="text-purple-600 dark:text-purple-400 text-sm font-medium mb-2">
                  {instructor.role}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {instructor.affiliation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="w-full py-16 bg-gradient-to-r from-purple-600 to-blue-800 dark:from-purple-900 dark:to-blue-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Design Explainable AI?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join our interactive workshop and learn how to create transparent, trustworthy AI systems that put people first
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowModal(true)}
              className="bg-white text-purple-600 rounded-full px-8 py-3 text-lg font-medium transition-all hover:bg-purple-50"
            >
              Register for Workshop
            </button>
            <a
              href="#"
              className="bg-transparent border-2 border-white text-white rounded-full px-8 py-3 text-lg font-medium inline-block transition-all hover:bg-white/10"
            >
              Download Syllabus
            </a>
          </div>
        </div>
      </section>

      {/* Travel Grant Information */}
      <section className="w-full py-12 bg-gray-100 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Funding Support</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            This workshop is funded by FWO Travel Research Grant No. V451725
          </p>
        </div>
      </section>

      {/* Registration Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={() => setShowModal(false)}
          />

          <div className="flex min-h-screen items-center justify-center p-4">
            <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl max-w-md w-full p-8 transform transition-all">
              {/* Close button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal content */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Register for xAI Workshop
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Please fill in your details to register for the workshop
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-800 dark:text-white"
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Role *
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-800 dark:text-white"
                  />
                </div>

                <div>
                  <label htmlFor="affiliation" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Affiliation/Institute *
                  </label>
                  <input
                    type="text"
                    id="affiliation"
                    name="affiliation"
                    required
                    value={formData.affiliation}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-800 dark:text-white"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-800 dark:text-white"
                  />
                </div>

                <div>
                  <label htmlFor="expertise" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Expertise *
                  </label>
                  <textarea
                    id="expertise"
                    name="expertise"
                    required
                    rows={3}
                    value={formData.expertise}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-800 dark:text-white"
                    placeholder="Please describe your area of expertise and background"
                  />
                </div>

                {submitMessage && (
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 px-4 py-3 rounded-lg">
                    {submitMessage}
                  </div>
                )}

                <div className="flex gap-3 pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex-1 bg-purple-600 text-white rounded-full px-6 py-3 font-medium transition-all ${
                      isSubmitting
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:bg-purple-700'
                    }`}
                  >
                    {isSubmitting ? 'Processing...' : 'Submit Registration'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full px-6 py-3 font-medium transition-all hover:bg-gray-300 dark:hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}