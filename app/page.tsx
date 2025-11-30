"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Clock } from "lucide-react"

export default function PetRewardsGuide() {
  const [timeLeft, setTimeLeft] = useState(900) // 15 minutes in seconds
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const faqs = [
    {
      question: "What does this page help me do? Can I help animals here?",
      answer:
        "You can help animals through the partner's website. Select one answer in the first screen and continue to the second screen. You can select the 'Give it to a friend' option to give away your reward or keep it to shop for your pets.",
    },
    {
      question: "Do I need to pay for anything?",
      answer:
        "No payment is required to view the quiz or check the program details. If it lists any requirements, offers, or tasks, make sure to read them carefully so you understand what is needed to take part in the gift card program.",
    },
    {
      question: "How long does it take to receive the reward?",
      answer:
        "After finishing the steps, including completing any required tasks, the reward is typically sent within 10 minutes. If you do not receive the PetSmart $100 card within 30 minutes of completing the final step, you can reach out for assistance at: cordinate@savepet.club",
    },
    {
      question: "What will I do to claim the reward?",
      answer:
        "You'll answer three quick questions, provide your email [For contact purposes only], and then follow the instructions shown in the Purchase & Program Requirements. Make sure to review everything carefully before continuing.",
    },
    {
      question: "Why do they ask for my email?",
      answer:
        "Your email is used to send updates, confirm your participation, and notify you when your status changes. Your details will not be shared with any third party.",
    },
    {
      question: "Who is this promotion for?",
      answer:
        "It's designed for adults (25+) who are interested in pet-related savings/donations and who are willing to complete the steps listed.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="py-8 px-4 text-center bg-white">
        <h1 className="text-xl font-bold tracking-wider text-gray-900 uppercase">$100 Pet Smart Rewards</h1>
        <p className="text-sm text-gray-500 mt-1">Claim your PetSmart Gift Card Today</p>
      </div>

      {/* Hero Section with Dark Background */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4">
        <div className="max-w-lg mx-auto">
          {/* White Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8">
            {/* Title & Subtitle */}
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center leading-tight text-balance">
              Guide to claim your <br/> Pet Smart $100 Reward
            </h2>

            {/* Steps List */}
            <div className="mt-8">
              <h3 className="text-lg font-bold text-slate-900 text-center mb-5">What you&apos;ll do next:</h3>
              <div className="space-y-4">
                {[
                  "Tap the button below.",
                  "Answer 3 quick questions.",
                  "Enter and confirm your email address.",
                  "Claim your Pet Smart $100 Reward.",
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-sm text-gray-700 pt-1 leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>

              {/* CTA Button */}
            <a
              href="https://glctrk.org/aff_c?offer_id=716&aff_id=139288"
              className="mt-6 block w-full max-w-sm mx-auto bg-blue-600 hover:bg-blue-700 text-white font-bold text-center py-4 px-6 rounded-full uppercase tracking-wide transition-all duration-200 hover:scale-[1.02] hover:shadow-xl text-sm sm:text-base"
            >
              CONTINUE
            </a>
            
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center">Frequently Asked Questions</h2>
          <p className="text-center text-gray-600 mt-2 mb-8">A quick overview before you continue.</p>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 text-sm text-gray-600 mb-3">
            <a href="#" className="hover:text-gray-900 transition-colors">
              Privacy Policy
            </a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:text-gray-900 transition-colors">
              Contact
            </a>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed max-w-2xl mx-auto">
            The partner's website manages all rewards and promotions that you visit after clicking the 'continue' button.
            Please review the terms, conditions, and requirements.
          </p>
        </div>
      </footer>
    </div>
  )
}
