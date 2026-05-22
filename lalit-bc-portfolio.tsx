"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Menu,
  Github,
  Linkedin,
  ExternalLink,
  GraduationCap,
  BookOpen,
  Globe,
  Mic,
  Code,
} from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("");
  const [showAllProjects, setShowAllProjects] = React.useState(false);
  const [showAllPublications, setShowAllPublications] = React.useState(false);
  const [showAllTalks, setShowAllTalks] = React.useState(false);

  const projects = [
    {
      title:
        "Precision Nutrient Management in Paddy using Multispectral Drone Imagery",
      description:
        "Implementing precision agriculture techniques for paddy cultivation using multispectral drone imagery to optimize nutrient application. The project focuses on developing site-specific nutrient management strategies based on vegetation indices and soil variability analysis at Khumaltar, Lalitpur.",
      technologies: [
        "Multispectral Imaging",
        "UAV",
        "Precision Agriculture",
        "NDVI",
        "Soil Analysis",
        "Python",
      ],
      year: "2025-present",
      type: "Research Project",
      location: "Khumaltar, Lalitpur",
    },
    {
      title:
        "Detecting Citrus Greening using High Resolution UAV Imagery and Deep Learning",
      description:
        "Developing an automated detection system for citrus greening disease (Huanglongbing) using high-resolution UAV imagery and deep learning algorithms. The project aims to enable early detection and management of this devastating citrus disease through advanced computer vision techniques.",
      technologies: [
        "UAV",
        "Deep Learning",
        "Computer Vision",
        "Disease Detection",
        "High-Resolution Imaging",
        "TensorFlow",
      ],
      year: "Aug 2025 - Running",
      type: "Research Project",
    },
    {
      title:
        "Monitoring Insured Farmers Crop Field using Sentinel-2 Imagery and PlantSat Application",
      description:
        "Developed a comprehensive crop monitoring system for agricultural insurance using Sentinel-2 satellite imagery and PlantSat application. The project focused on automated crop health assessment, yield estimation, and damage detection to support insurance claim validation processes.",
      technologies: [
        "Sentinel-2",
        "PlantSat",
        "Crop Monitoring",
        "Insurance Technology",
        "Satellite Imagery",
        "GEE",
      ],
      year: "Feb 2024 - Dec 2024",
      type: "Commercial Project",
    },
    {
      title: "Land Use Classification using Deep Learning",
      description:
        "Applied convolutional neural networks for automated land use and land cover classification using Sentinel-2 satellite imagery, achieving 94% accuracy across multiple land cover classes.",
      technologies: ["Python", "TensorFlow", "Sentinel-2", "ENVI"],
      year: "2023",
      type: "Research Project",
    },
  ];

  const publications = [
    {
      title:
        "Use of Satellite Data for Claim Validation in Agriculture Insurance in Nepal",
      journal: "GeoWorld",
      year: "2025",
      authors: "BC, L. & Poudel, S.",
      type: "Journal Article",
      volume: "Vol III, 2",
    },
    {
      title:
        "Safety behavior of Nepalese Strawberry Farmers as Reflected by the Protection Motivation Theory",
      journal: "International Journal of Environmental Research",
      year: "2025",
      authors: "Bhandari, G., BC, L., Sapkota, U. et. al",
      type: "Journal Article",
    },
    {
      title:
        "Effect of Different Fertilizers on Yield and Vitamin C content of Cauliflower (Brassica oleracea var botrytis) - A review",
      journal: "Asian Journal of Agricultural and Horticultural Research",
      year: "2020",
      authors: "Belbase, P., and BC, L.",
      type: "Review Article",
    },
  ];

  const talks = [
    // 2025
    {
      title: "Spatial Data Analysis and Visualization Using GIS",
      event: "5 days program at CNRM Pakhribas funded by UGC Nepal",
      location: "Pakhribas, Nepal",
      year: "2025",
      type: "Training Program",
      audience: "GIS professionals and researchers",
    },
    {
      title: "AI in Cattle Insurance",
      event: "Winter School on Annual Nepal AI School by NAMII",
      location: "Lalitpur, Nepal",
      year: "2025",
      type: "Invited Talk",
      audience: "AI researchers and practitioners",
    },
    // 2024
    {
      title: "GIS and Remote Sensing for Precision Agriculture with QGIS",
      event: "School of Agriculture, Tikapur Campus funded by UGC Nepal",
      location: "Tikapur, Nepal",
      year: "2024",
      type: "Training Program",
      audience: "Agriculture students and professionals",
    },
    {
      title: "GIS and Remote Sensing for Agriculturist",
      event: "Organized by AgriMappers Lamjung Campus",
      location: "Lamjung, Nepal",
      year: "2024",
      type: "Training Program",
      audience: "Agricultural professionals",
    },
    {
      title: "Satellite for Crop Monitoring",
      event: "Winter School, GIZ Nepal",
      location: "Dhangadi, Nepal",
      year: "June 2024",
      type: "Invited Talk",
      audience: "Agricultural professionals and researchers",
    },
    {
      title: "Food System Innovation Challenge",
      event: "Wageningen University - Team YamNovators Nepal",
      location: "Nepal",
      year: "2024",
      type: "Team Member",
      audience: "International innovation challenge participants",
    },
    {
      title: "International Conference for Inclusive Insurance",
      event: "NIA, Nepal",
      location: "Nepal",
      year: "2024",
      type: "Conference Participant",
      audience: "Insurance industry professionals",
    },
    // 2023
    {
      title: "Asia Pacific Director Meeting",
      event: "IAAS Nepal",
      location: "Kathmandu, Nepal",
      year: "2023",
      type: "National Panelist",
      audience: "Regional agricultural directors and stakeholders",
    },
  ];

  const openSourceContributions = [
    {
      title: "SmartCSV Exporter",
      description:
        "A QGIS plugin for intelligent CSV export functionality with advanced data formatting options, field mapping, and batch processing capabilities. Streamlines the process of exporting spatial data to CSV format with customizable export templates and data validation features.",
      technologies: [
        "Python",
        "QGIS",
        "PyQt",
        "CSV Processing",
        "Data Validation",
      ],
      stars: "156",
      downloads: "3,200+",
      status: "Active",
      link: "https://plugins.qgis.org/plugins/smartcsv_exporter/",
    },
    {
      title: "GeoSat (Upcoming)",
      description:
        "An advanced QGIS plugin for soil mapping and geostatistical analysis of soil data. Features automated soil property interpolation, kriging analysis, variogram modeling, and comprehensive soil health assessment tools. Designed to support precision agriculture and soil management decisions.",
      technologies: [
        "Python",
        "QGIS",
        "Geostatistics",
        "Kriging",
        "Soil Analysis",
        "NumPy",
        "SciPy",
      ],
      stars: "N/A",
      downloads: "Coming Soon",
      status: "In Development",
      link: "#",
    },
  ];

  const skills = [
    {
      category: "GIS & Remote Sensing",
      items: ["ArcGIS", "QGIS", "Google Earth Engine", "ENVI", "SNAP", "JOSM"],
    },
    {
      category: "Programming & Data Analysis",
      items: ["Python", "R", "JavaScript", "SQL", "MATLAB", "Google Colab"],
    },
    {
      category: "Machine Learning & AI",
      items: [
        "TensorFlow",
        "Scikit-learn",
        "Keras",
        "PyTorch",
        "OpenCV",
        "Pandas",
        "YOLO",
      ],
    },
    {
      category: "UAV & Photogrammetry",
      items: ["Pix4D", "Agisoft Metashape", "DJI Terra", "WebODM"],
    },
    {
      category: "Database & Cloud",
      items: ["PostgreSQL", "Google Cloud", "Docker", "DuckDB"],
    },
    {
      category: "Visualization & Web",
      items: ["Leaflet", "Plotly", "Power BI", "MapLibre"],
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -80;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "projects",
        "skills",
        "talks",
        "opensource",
        "publications",
        "cv",
      ];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex justify-center space-x-6 flex-1">
              {[
                { id: "home", label: "Home" },
                { id: "projects", label: "Projects" },
                { id: "skills", label: "Skills" },
                { id: "talks", label: "Talks" },
                { id: "opensource", label: "Open Source" },
                { id: "publications", label: "Publications" },
                { id: "cv", label: "CV" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.id
                      ? "text-blue-600"
                      : "text-gray-700"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="mailto:lalitiaas@gmail.com"
                className="text-gray-600 hover:text-blue-600"
              >
                <Mail className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/lalitbc/"
                className="text-gray-600 hover:text-blue-600"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://github.com/Lalitgis"
                className="text-gray-600 hover:text-blue-600"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Button variant="ghost" size="sm">
                🌙
              </Button>
            </div>
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button className="md:hidden" size="icon" variant="ghost">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-4 mt-8">
                  {[
                    { id: "home", label: "Home" },
                    { id: "projects", label: "Projects" },
                    { id: "skills", label: "Skills" },
                    { id: "talks", label: "Talks" },
                    { id: "opensource", label: "Open Source" },
                    { id: "publications", label: "Publications" },
                    { id: "cv", label: "CV" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left text-lg font-medium text-gray-700 hover:text-blue-600"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-4 pt-24">
        {/* Hero Section */}
        <section id="home" className="py-16">
          <div className="flex flex-col lg:flex-row items-start gap-16 ml-0">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-gray-100">
                <Image
                  src="/images/profile-photo.jpg"
                  alt="Lalit BC"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center mt-6 w-64">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  Lalit BC
                </h1>
                <p className="text-gray-600 mb-1">
                  Geospatial & Precision Agriculture Specialist
                </p>
                <p className="text-sm text-blue-600 mb-4">
                  Co-founder of{" "}
                  <Link
                    href="https://www.mapmentors.com"
                    className="hover:underline"
                  >
                    Map Mentors
                  </Link>
                </p>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  <Link
                    href="mailto:lalitiaas@gmail.com"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Mail className="h-6 w-6" />
                  </Link>
                  <Link href="#" className="text-blue-600 hover:text-blue-800">
                    <Github className="h-6 w-6" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/lalitbc/"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Linkedin className="h-6 w-6" />
                  </Link>
                  <Link
                    href="https://www.mapmentors.com"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Globe className="h-6 w-6" />
                  </Link>
                  <Link href="#" className="text-blue-600 hover:text-blue-800">
                    <BookOpen className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 max-w-3xl">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                  I am <strong className="text-blue-600">Lalit</strong>, a{" "}
                  <Link href="#" className="text-blue-600 hover:underline">
                    Geospatial and Precision Agriculture Specialist
                  </Link>{" "}
                  with more than 4 years of experience, where I explore
                  geospatial modeling, machine learning, and big data analytics
                  for agricultural applications. Recognized as an expert in{" "}
                  <Link href="#" className="text-blue-600 hover:underline">
                    GIS and Remote Sensing
                  </Link>
                  , I am passionate about designing scalable, open-source
                  geospatial tools that empower agricultural decision-making.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                  My research interests include remote sensing, geo-analytics,
                  and machine learning applications, emphasizing integrated
                  approaches to agricultural monitoring. My overall goal is to
                  make complex geospatial analyses more accessible, optimized,
                  and scalable to academics and practitioners alike. Through
                  collaborative projects and international publications, I aim
                  to advance our understanding of precision agriculture and
                  promote sustainable farming practices. You can reach me via{" "}
                  <Link
                    href="https://www.linkedin.com/in/lalitbc/"
                    className="text-blue-600 hover:underline"
                  >
                    LinkedIn
                  </Link>
                  , or{" "}
                  <Link
                    href="mailto:lalitiaas@gmail.com"
                    className="text-blue-600 hover:underline"
                  >
                    Email
                  </Link>
                  .
                </p>

                {/* Two Column Layout */}
                <div className="grid md:grid-cols-2 gap-8 mt-6">
                  {/* Interests */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Interests
                    </h3>
                    <div className="text-gray-700 space-y-1">
                      <div>• Precision Agriculture</div>
                      <div>• Remote Sensing & GIS</div>
                      <div>• Machine Learning Applications</div>
                      <div>• UAV & Photogrammetry</div>
                      <div>• Data Analytics</div>
                      <div>• Rangeland</div>
                    </div>
                  </div>

                  {/* Education */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Education
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <GraduationCap className="h-4 w-4 text-gray-600 flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-medium text-gray-900">
                            MSc in Animal Science, 2023
                          </span>
                          <span className="text-sm text-gray-600 ml-2">
                            - IAAS, Tribhuvan University
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <GraduationCap className="h-4 w-4 text-gray-600 flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-medium text-gray-900">
                            Bachelor in Agriculture Science, 2024
                          </span>
                          <span className="text-sm text-gray-600 ml-2">
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

        {/* Projects Section */}
        <section id="projects" className="py-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Projects
          </h2>
          <div className="space-y-8">
            {(showAllProjects ? projects : projects.slice(0, 3)).map(
              (project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <span>{project.year}</span>
                        <span>•</span>
                        <span>{project.type}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View
                    </Button>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              ),
            )}
          </div>

          {projects.length > 3 && (
            <div className="text-center mt-8">
              <Button
                variant="outline"
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="bg-blue-50 hover:bg-blue-100 text-blue-600 border-blue-200"
              >
                {showAllProjects
                  ? "Show Less"
                  : `See More Projects (${projects.length - 3} more)`}
              </Button>
            </div>
          )}
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="text-xs bg-white"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Talks & Training Section */}
        <section id="talks" className="py-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Invited Talks & Training
          </h2>
          <div className="space-y-6">
            {(showAllTalks ? talks : talks.slice(0, 3)).map((talk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Mic className="h-5 w-5 text-blue-600" />
                      <h3 className="text-xl font-semibold text-gray-900">
                        {talk.title}
                      </h3>
                    </div>
                    <p className="text-blue-600 font-medium mb-1">
                      {talk.event}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                      <span>{talk.location}</span>
                      <span>•</span>
                      <span>{talk.year}</span>
                      <span>•</span>
                      <span>{talk.audience}</span>
                    </div>
                  </div>
                  <Badge
                    variant={
                      talk.type === "Invited Talk"
                        ? "default"
                        : talk.type === "National Panelist"
                          ? "default"
                          : talk.type === "Training Program"
                            ? "secondary"
                            : "secondary"
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
                onClick={() => setShowAllTalks(!showAllTalks)}
                className="bg-blue-50 hover:bg-blue-100 text-blue-600 border-blue-200"
              >
                {showAllTalks
                  ? "Show Less"
                  : `See More Talks & Training (${talks.length - 3} more)`}
              </Button>
            </div>
          )}
        </section>

        {/* Open Source Contributions Section */}
        <section id="opensource" className="py-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Open Source Contributions
          </h2>
          <div className="space-y-8">
            {openSourceContributions.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Code className="h-5 w-5 text-green-600" />
                      <h3 className="text-xl font-semibold text-gray-900">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
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
                    <Link href={project.link}>
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </Link>
                  </Button>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {project.description}
                </p>
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

        {/* Publications Section */}
        <section id="publications" className="py-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Publications
          </h2>
          <div className="space-y-6">
            {(showAllPublications
              ? publications
              : publications.slice(0, 3)
            ).map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-l-4 border-blue-600 pl-6 py-4"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {pub.title}
                    </h3>
                    <p className="text-gray-600 mb-1">{pub.authors}</p>
                    <p className="text-sm text-blue-600">
                      {pub.journal}
                      {pub.volume ? ` ${pub.volume}` : ""} • {pub.year}
                    </p>
                    <Badge variant="outline" className="mt-2 text-xs">
                      {pub.type}
                    </Badge>
                  </div>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    PDF
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {publications.length > 3 && (
            <div className="text-center mt-8">
              <Button
                variant="outline"
                onClick={() => setShowAllPublications(!showAllPublications)}
                className="bg-blue-50 hover:bg-blue-100 text-blue-600 border-blue-200"
              >
                {showAllPublications
                  ? "Show Less"
                  : `See More Publications (${publications.length - 3} more)`}
              </Button>
            </div>
          )}
        </section>

        {/* CV Section */}
        <section id="cv" className="py-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Curriculum Vitae
          </h2>

          {/* Header */}
          <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Lalit BC
              </h3>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-gray-600">
                <span>📧 lalitiaas@gmail.com</span>
                <span>📍 Fort Valley, Georgia, USA</span>
                <span>📱 (478)-287-8252</span>
              </div>
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <BookOpen className="h-5 w-5 mr-2" />
                Download Full CV (PDF)
              </Button>
            </div>
          </div>

          {/* Education */}
          {/* Experience */}
          {/* Skills */}

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">6+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">
                2,130+
              </div>
              <div className="text-sm text-gray-600">Farmers Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">500+</div>
              <div className="text-sm text-gray-600">People Trained</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">$10K</div>
              <div className="text-sm text-gray-600">Grants Secured</div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-16">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © 2024 Lalit BC. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="mailto:lalitiaas@gmail.com"
                className="text-sm text-gray-600 hover:text-blue-600"
              >
                Email
              </Link>
              <Link
                href="https://www.linkedin.com/in/lalitbc/"
                className="text-sm text-gray-600 hover:text-blue-600"
              >
                LinkedIn
              </Link>
              <Link
                href="https://github.com/Lalitgis"
                className="text-sm text-gray-600 hover:text-blue-600"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
