"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

// --- 1. BELOW FOLD CONTENT (Lazy Loaded Component) ---
function BelowFoldContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: "Can I use this for any pet?",
      answer: "Yes! The $100 reward can be used to buy food, toys, treats, or supplies for dogs, cats, fish, or any pet supported by the retailer.",
    },
    {
      question: "Is there a cost to participate?",
      answer: "Accessing this guide is free. However, the reward program typically requires completing 3-5 deals, which may include trials or app downloads.",
    },
    {
      question: "When do I get the reward?",
      answer: "Rewards are processed after completing the required deals. Verification takes a few days. Read instructions carefully.",
    },
    {
      question: "What steps are required?",
      answer: "1) Register with email, 2) Complete survey, 3) Finish required deals (silver/gold/platinum levels).",
    },
    {
      question: "Who is eligible?",
      answer: "Residents of the US, aged 18+ (sometimes 25+), who are new users to the advertised deals.",
    },
  ]

  return (
    <div className="animate-in fade-in duration-700">
      {/* Steps Section */}
      <div className="bg-slate-900 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-10">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "1. Click Link", desc: "Tap the button above to visit the official offer page." },
              { title: "2. Register", desc: "Enter your basic info to start the rewards program." },
              { title: "3. Complete Deals", desc: "Finish the required 3-5 deals to unlock your $100 card." }
            ].map((step, idx) => (
              <div key={idx} className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-lg">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-200 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">Common Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-expanded={openFaq === index}
              >
                <span className="font-bold text-slate-800 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFaq === index && (
                <div className="px-6 pb-4 text-sm text-slate-700 leading-relaxed border-t border-gray-100 pt-4 font-medium">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 px-4 text-center">
        <div className="max-w-4xl mx-auto text-xs text-slate-600 space-y-4">
          <div className="flex justify-center gap-4 text-sm font-bold text-slate-700">
            <a href="#" className="hover:text-blue-700">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-blue-700">Terms</a>
            <span>•</span>
            <a href="#" className="hover:text-blue-700">Contact</a>
          </div>
          <p className="leading-relaxed font-medium">
            <strong>Disclaimer:</strong> This website is an independent guide and is not affiliated with PetSmart. 
            Reward requires completion of deals. Results vary. See partner T&C.
          </p>
          <p>&copy; 2025 SavePet.Club. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

// --- 2. MAIN COMPONENT ---
export default function PetRewardsGuide() {
  const [spotsLeft, setSpotsLeft] = useState(14)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // 1. Timer Start
    const timer = setInterval(() => {
        setSpotsLeft((prev) => (prev > 5 ? prev - 1 : 5))
    }, 15000)

    // 2. Trigger Lazy Load (Load bottom content after a slight delay)
    // This makes the initial load super fast because it only renders the Hero.
    const loadTimer = setTimeout(() => {
      setIsMounted(true)
    }, 100) // 100ms delay is enough to let the Hero paint first

    return () => {
      clearInterval(timer)
      clearTimeout(loadTimer)
    }
  }, [])

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* --- HERO SECTION (Always Visible / High Priority) --- */}
      <div className="bg-red-700 text-white text-center py-2 px-4 text-xs font-bold tracking-wide">
        LIMITED TIME: ONLY {spotsLeft} SPOTS REMAINING FOR TODAY
      </div>

      <div className="relative bg-white overflow-hidden pb-10">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pt-10 px-4 sm:px-6 lg:px-8">
            <main className="mt-10 mx-auto max-w-7xl sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-900 text-sm font-bold mb-4">
                   Updated for 2025 🇺🇸
                </span>
                <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Treat Your Best Friend</span>{' '}
                  <span className="block text-red-700 xl:inline">With a $100 Reward</span>
                </h1>
                <p className="mt-3 text-base text-slate-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-medium">
                  Don&apos;t let inflation stop you from spoiling your pet. Follow our simple guide to claim a <strong>$100 PetSmart Gift Card</strong> by trying out new apps and services.
                </p>
                
                <div className="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start">
                   <a
                    href="https://glctrk.org/aff_c?offer_id=716&aff_id=139288"
                    className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-white bg-blue-700 hover:bg-blue-900 md:py-4 md:text-lg md:px-10 transition-transform hover:scale-105 shadow-xl"
                    aria-label="Get started with the reward program"
                  >
                    Get Started Now
                  </a>
                </div>
                <p className="mt-3 text-xs text-slate-600 font-semibold">
                    *Program requirements apply. See terms on next page.
                </p>
              </div>
            </main>
          </div>
        </div>
        
        {/* Optimized Image with Priority */}
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-slate-100 h-64 sm:h-72 md:h-96 lg:h-full relative">
            <Image 
                src="/pet-hero.jpg" 
                alt="Happy Dog looking up"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                style={{ objectFit: "cover" }}
                className="opacity-95"
                priority={true}
            />
        </div>
      </div>

      {/* --- LAZY LOADED CONTENT --- */}
      {isMounted && <BelowFoldContent />}

    </div>
  )
}
