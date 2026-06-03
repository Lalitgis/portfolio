"use client"

import * as React from "react"
import { BookOpen } from "lucide-react"

import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"

export default function CVPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 font-sans">
      <Navigation />

      <main className="max-w-5xl mx-auto px-4 pt-24 pb-16">
        <section className="py-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-50 text-center mb-12">Curriculum Vitae</h1>

          {/* Header */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 mb-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-2">Lalit BC</h3>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-gray-600 dark:text-gray-400">
                <span>📧 lalitiaas@gmail.com</span>
                <span>📍 Fort Valley, Georgia, USA </span>
                <span>📱 478-287-8252</span>
              </div>
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <BookOpen className="h-5 w-5 mr-2" />
                Download Full CV (PDF)
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">6+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">2,130+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Farmers Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">500+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">People Trained</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">$10K</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Grants Secured</div>
            </div>
          </div>

          {/* Summary Section */}
          <div className="mt-12 bg-gray-50 dark:bg-gray-900 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4">Professional Summary</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Geospatial & Precision Agriculture Specialist with 6+ years of experience in developing scalable solutions
              for agricultural challenges. Expertise in UAV, Remote Sensing, Machine Learning, Crop Phenotyping and geospatial analysis with a
              proven track record of impacting farming communities through innovative technology solutions.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Co-founder of Map Mentors & AIR Lab Nepal dedicated to making geospatial knowledge accessible to practitioners in the
              agricultural sector. Passionate about open-source development and collaborative research initiatives.
            </p>
          </div>

          {/* Skills Overview */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Core Competencies</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-50 mb-3">Technical Skills</h3>
                <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                  <li>• Remote Sensing & GIS (ArcGIS, QGIS, Google Earth Engine)</li>
                  <li>• Machine Learning (TensorFlow, PyTorch, Scikit-learn)</li>
                  <li>• Programming (Python, R, JavaScript)</li>
                  <li>• UAV & Photogrammetry (Pix4D, Agisoft, DJI Terra)</li>
                  <li>• Database & Cloud (PostgreSQL, Google Cloud, Docker)</li>
                  <li>• Genomics & Bioinformatics (GWAS, QTL Mapping, DeepG)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-50 mb-3">Domain Expertise</h3>
                <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                  <li>• Precision Agriculture & Crop Phenotyping</li>
                  <li>• Crop Monitoring & Yield Estimation with Satellite Imagery</li>
                  <li>• Disease Detection & Management (GeoAI)</li>
                  <li>• Digital Agricultural Insurance Technology in Nepal</li>
                  <li>• Soil Health Mapping & Bioinformatics</li>
                </ul>
              </div>
            </div>
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
