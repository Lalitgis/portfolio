"use client"

import * as React from "react"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"
import { publications } from "@/lib/portfolio-data"

export default function PublicationsPage() {
  // Group publications by type
  const conferencePublications = publications.filter(pub => pub.type === "Conference Paper")
  const journalPublications = publications.filter(pub => pub.type === "Journal Article")
  const magazinePublications = publications.filter(pub => pub.type === "Magazine Article")
  const reviewPublications = publications.filter(pub => pub.type === "Review Article")

  const renderPublicationGroup = (title: string, pubs: typeof publications) => (
    pubs.length > 0 && (
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-8 pb-3 border-b-2 border-blue-100 dark:border-blue-900">{title}</h2>
        <div className="space-y-5">
          {pubs.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-md transition-shadow bg-white dark:bg-gray-900 group"
            >
              {/* Arrow Link in Upper Right Corner */}
              {pub.link && pub.link !== "#" && (
                <Link
                  href={pub.link}
                  target="_blank"
                  className="absolute top-4 right-4 text-gray-400 group-hover:text-blue-600 transition-colors"
                  title="View paper"
                >
                  <ExternalLink className="h-5 w-5" />
                </Link>
              )}

              <div className="flex flex-col gap-3">
                <div className="flex-1">
                  <Link
                    href={pub.link}
                    target={pub.link !== "#" ? "_blank" : undefined}
                    className="group/title"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2 group-hover/title:text-blue-600 transition-colors pr-8">
                      {pub.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm">{pub.authors}</p>
                  <div className="flex flex-col gap-1">
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                      {pub.journal}
                      {pub.volume ? ` • ${pub.volume}` : ""}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-gray-600 dark:text-gray-400">
                      <span>{pub.year}</span>
                      {pub.pages && (
                        <>
                          <span>•</span>
                          <span>pp. {pub.pages}</span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-4">
                    <Badge variant="outline" className="text-xs bg-gray-50">
                      {pub.type}
                    </Badge>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    )
  )

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 font-sans">
      <Navigation />

      <main className="max-w-5xl mx-auto px-4 pt-24 pb-16">
        <section className="py-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-50 text-center mb-16">Publications</h1>

          {/* Conference Presentations */}
          {renderPublicationGroup("Conference Presentations", conferencePublications)}

          {/* Journal Articles */}
          {renderPublicationGroup("Journal Articles", journalPublications)}

          {/* Magazine Articles */}
          {renderPublicationGroup("Magazine Articles", magazinePublications)}

          {/* Review Articles */}
          {renderPublicationGroup("Review Articles", reviewPublications)}
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
              <a href="https://www.linkedin.com/in/lalitbc/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-blue-600">
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
