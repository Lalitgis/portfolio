"use client"

import * as React from "react"
import Link from "next/link"
import { FileText, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"
import { posterPresentations } from "@/lib/portfolio-data"

export default function PostersPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 font-sans">
      <Navigation />

      <main className="max-w-5xl mx-auto px-4 pt-24 pb-16">
        <section className="py-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-50 text-center mb-12">Poster Presentations</h1>
          <div className="space-y-6">
            {posterPresentations.map((poster, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-md transition-shadow bg-white dark:bg-gray-900 group"
              >
                {/* Arrow Link in Upper Right Corner */}
                {poster.link && poster.link !== "#" && (
                  <Link
                    href={poster.link}
                    target="_blank"
                    className="absolute top-4 right-4 text-gray-400 group-hover:text-blue-600 transition-colors"
                    title="View poster"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </Link>
                )}

                <div className="flex flex-col gap-4">
                  {/* Icon and Title */}
                  <div className="flex items-start gap-3">
                    <FileText className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <Link
                      href={poster.link}
                      target={poster.link !== "#" ? "_blank" : undefined}
                      className="group/title flex-1"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 group-hover/title:text-blue-600 transition-colors pr-8">
                        {poster.title}
                      </h3>
                    </Link>
                  </div>

                  {/* Authors */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm ml-9">{poster.authors}</p>

                  {/* Conference Details */}
                  <div className="ml-9 space-y-1">
                    <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {poster.conference}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {poster.institution}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-gray-600 dark:text-gray-400 mt-2">
                      <span>{poster.location}</span>
                      <span>•</span>
                      <span>{poster.year}</span>
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="ml-9 flex items-center gap-2 mt-2">
                    <Badge variant="outline" className="text-xs bg-blue-50 border-blue-200 text-blue-700">
                      {poster.type}
                    </Badge>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 mt-16">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">© 2024 Lalit BC. All rights reserved.</p>
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
