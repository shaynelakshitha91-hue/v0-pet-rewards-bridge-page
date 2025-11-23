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
      question: "What does this page help me do?",
      answer:
        "This page gives you a quick overview of the steps involved before you continue to the partner's site. It explains what to expect, how the short quiz works, and what you'll be asked for so everything stays clear and simple.",
    },
    {
      question: "Do I need to pay for anything?",
      answer:
        "No payment is required to view the quiz or check the program details. If the partner lists any requirements, offers, or tasks, make sure to read them carefully so you understand what is needed to take part in the promotion.",
    },
    {
      question: "How long does it take to receive the reward?",
      answer:
        "After finishing the steps on the partner's site — including completing any required tasks — the reward is typically sent within a short timeframe. If you do not receive the PetSmart $100 card within 30 minutes of completing the final step, you can reach out for assistance at: cordinate@dreambig99.site",
    },
    {
      question: "What will I do on the partner's site?",
      answer:
        "You'll answer three quick questions, provide your email, and then follow the instructions shown in the Purchase & Program Requirements. Make sure to review everything carefully before continuing.",
    },
    {
      question: "Why do they ask for my email?",
      answer:
        "Your email is used to send updates, confirm your participation, and notify you when your status changes. Be sure to review the privacy policies before submitting your information.",
    },
    {
      question: "Who is this promotion for?",
      answer:
        "It's designed for adults (25+) who are interested in pet-related savings and who are willing to complete the steps listed on the partner's site.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="py-8 px-4 text-center bg-white">
        <h1 className="text-xl font-bold tracking-wider text-gray-900 uppercase">Pet Rewards Guide</h1>
        <p className="text-sm text-gray-500 mt-1">Steps to join a $100 PetSmart gift card promotion</p>
      </div>

      {/* Hero Section with Dark Background */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4">
        <div className="max-w-lg mx-auto">
          {/* White Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8">
            {/* Title & Subtitle */}
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center leading-tight text-balance">
              Follow these steps to see how the $100 PetSmart gift card promotion works
            </h2>
            <p className="text-sm text-gray-500 text-center mt-3 text-pretty">
              We&apos;ll walk you through what happens after you tap the button so there are no surprises.
            </p>

            {/* CTA Button */}
            <a
              href="https://glctrk.org/aff_c?offer_id=716&aff_id=139288"
              className="mt-6 block w-full max-w-sm mx-auto bg-blue-600 hover:bg-blue-700 text-white font-bold text-center py-4 px-6 rounded-full uppercase tracking-wide transition-all duration-200 hover:scale-[1.02] hover:shadow-xl text-sm sm:text-base"
            >
              START THE QUIZ
            </a>

            {/* Steps List */}
            <div className="mt-8">
              <h3 className="text-lg font-bold text-slate-900 text-center mb-5">What you&apos;ll do next:</h3>
              <div className="space-y-4">
                {[
                  "Tap the button to open the quiz.",
                  "Answer 3 quick questions (about shopping at PetSmart, how you'd use a reward, and how often you shop).",
                  "Enter and confirm your email address so they can contact you about your status.",
                  "Review and complete the Purchase & Program Requirements listed on the partner site to be eligible for the $100 reward.",
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

            {/* Countdown Timer */}
            <div className="mt-6 bg-gradient-to-r from-lime-400 to-green-500 rounded-full py-3 px-5 flex items-center justify-center gap-3 shadow-lg">
              <Clock className="w-5 h-5 text-white" />
              <span className="text-white font-bold text-lg">
                Time left: {formatTime(timeLeft)}
                {timeLeft === 0 && " — offer window ending soon"}
              </span>
            </div>
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
            All rewards and promotions are managed by the third-party partner you visit after clicking the button.
            Please review their terms, conditions, and requirements carefully.
          </p>
        </div>
      </footer>
    </div>
  )
}
