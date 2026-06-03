"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Github,
  Linkedin,
  Globe,
  BookOpen,
  GraduationCap,
} from "lucide-react";

import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 font-sans">
      <Navigation />

      <main className="max-w-5xl mx-auto px-4 pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-16">
          <div className="flex flex-col lg:flex-row items-start gap-16 ml-0">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-gray-100 dark:border-gray-800">
                <Image
                  src="/images/profile-photo.jpg"
                  alt="Lalit BC"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center mt-6 w-64">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-2">
                  Lalit BC
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mb-1">
                  Geospatial & Precision Agriculture Specialist
                </p>
                <p className="text-sm text-blue-600 dark:text-blue-400 mb-4">
                  Co-founder of{" "}
                  <a
                    href="https://www.mapmentors.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Map Mentors
                  </a>
                </p>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=lalitiaas@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Mail className="h-6 w-6" />
                  </a>
                  <a
                    href="https://github.com/Lalitgis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/lalitbc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.mapmentors.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Globe className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <BookOpen className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 max-w-3xl">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-justify">
                  I am{" "}
                  <strong className="text-blue-600 dark:text-blue-400">
                    Lalit
                  </strong>
                  , a{" "}
                  <a
                    href="#"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Geospatial and Precision Agriculture Specialist
                  </a>{" "}
                  with more than 6 years of experience, where I explore
                  geospatial modeling, computer vision, machine learning, and
                  big data analytics for agricultural applications. Recognized
                  as an expert in{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    GIS, Remote Sensing, and Drone Photogrammetry
                  </a>
                  , I am passionate about designing scalable, open-source
                  geospatial tools that empower agricultural decision-making.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-justify">
                  My research interests include agricultural remote sensing,
                  geo-analytics, machine vision and machine learning
                  applications, emphasizing integrated approaches to
                  agricultural monitoring. My overall goal is to make complex
                  geospatial analyses more accessible, optimized, and scalable
                  to academics and practitioners alike. Through collaborative
                  projects and international publications, I aim to advance our
                  understanding of precision agriculture and promote sustainable
                  farming practices. You can reach me via{" "}
                  <a
                    href="https://www.linkedin.com/in/lalitbc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    LinkedIn
                  </a>
                  , or{" "}
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=lalitiaas@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Email
                  </a>
                  . I'm currently building Agricultural Intelligence Research
                  Lab{" "}
                  <a
                    href="https://airlabnep.github.io/airlab/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                     AIR Lab
                  </a>
                  .
                </p>

                {/* Two Column Layout */}
                <div className="grid md:grid-cols-2 gap-8 mt-6">
                  {/* Interests */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-4">
                      Interests
                    </h3>
                    <div className="text-gray-700 dark:text-gray-400 space-y-1">
                      <div>• Precision Agriculture & Crop Phenotyping</div>
                      <div>• Remote Sensing & GIS</div>
                      <div>• Machine Learning Applications</div>
                      <div>• UAV & Photogrammetry</div>
                      <div>• Data Analytics & Bioinformatics</div>
                      <div>• Rangeland and Pasture Management</div>
                      <div>• Computer Vision in Agriculture</div>
                    </div>
                  </div>

                  {/* Education */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-4">
                      Education
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <GraduationCap className="h-4 w-4 text-gray-600 flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-medium text-gray-900 dark:text-gray-50">
                            Masters in Biotechnology and Breeding, 2026-2027
                          </span>
                          <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
                            - Fort Valley State University, USA
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <GraduationCap className="h-4 w-4 text-gray-600 dark:text-gray-400 flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-medium text-gray-900 dark:text-gray-50">
                            MSc in Animal Science, 2021-2023
                          </span>
                          <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
                            -IAAS, Tribhuvan University, Nepal
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <GraduationCap className="h-4 w-4 text-gray-600 dark:text-gray-400 flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-medium text-gray-900 dark:text-gray-50">
                            Bachelor in Agriculture Science, 2024
                          </span>
                          <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
                            - IAAS, Tribhuvan University
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 mt-16">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © 2024 Lalit BC. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=lalitiaas@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/lalitbc/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Lalitgis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
