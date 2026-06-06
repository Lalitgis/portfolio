"use client"

import * as React from "react"
import Link from "next/link"
import { Github, Code } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"
import { openSourceContributions } from "@/lib/portfolio-data"

export default function OpenSourcePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 font-sans">
      <Navigation />

      <main className="max-w-5xl mx-auto px-4 pt-24 pb-16">
        <section className="py-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-50 text-center mb-12">Open Source Contributions</h1>
          <div className="space-y-8">
            {openSourceContributions.map((project, index) => (
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
                      <Code className="h-5 w-5 text-green-600" />
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50">{project.title}</h3>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                      <span>⭐ {project.stars}</span>
                      <span>•</span>
                      <span>📥 {project.downloads}</span>
                      <span>•</span>
                      <Badge variant="outline" className="text-xs">
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
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
