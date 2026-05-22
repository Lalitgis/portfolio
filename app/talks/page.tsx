"use client"

import * as React from "react"
import { Mic } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"
import { talks } from "@/lib/portfolio-data"

export default function TalksPage() {
  const [showAll, setShowAll] = React.useState(false)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 font-sans">
      <Navigation />

      <main className="max-w-5xl mx-auto px-4 pt-24 pb-16">
        <section className="py-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-50 text-center mb-12">Invited Talks & Training</h1>
          <div className="space-y-6">
            {(showAll ? talks : talks.slice(0, 3)).map((talk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-md transition-shadow dark:bg-gray-900"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Mic className="h-5 w-5 text-blue-600" />
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50">{talk.title}</h3>
                    </div>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">{talk.event}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <span>{talk.location}</span>
                      <span>•</span>
                      <span>{talk.year}</span>
                      <span>•</span>
                      <span>{talk.audience}</span>
                    </div>
                  </div>
                  <Badge
                    variant={
                      talk.type === "Invited Talk" || talk.type === "National Panelist" ? "default" : "secondary"
                    }
                    className="text-xs"
                  >
                    {talk.type}
                  </Badge>
                </div>
              </motion.div>
            ))}
          </div>
          {talks.length > 3 && (
            <div className="text-center mt-8">
              <Button
                variant="outline"
                onClick={() => setShowAll(!showAll)}
                className="bg-blue-50 hover:bg-blue-100 text-blue-600 border-blue-200"
              >
                {showAll ? "Show Less" : `See More Talks & Training (${talks.length - 3} more)`}
              </Button>
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 mt-16">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">© 2024 Lalit BC. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=lalitiaas@gmail.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-blue-600">
                Email
              </a>
              <a href="https://www.linkedin.com/in/lalit-bc/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-blue-600">
                LinkedIn
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
