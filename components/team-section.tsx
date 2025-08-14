"use client"

import { motion } from 'framer-motion'
import { Linkedin, Github, Globe, Instagram, Twitter } from 'lucide-react'
import Image from 'next/image'

const team = [
  {
    name: "Marcus David Cyrus",
    role: "Founder & CEO",
    bio: "Global marketing leader and AI strategist with a track record of scaling health tech platforms and building engaged communities. Founder of FitCommit AI, focused on solving the fitness industry's retention problem with AI-powered solutions.",
    image: "/images/MarcusDavidCyrus.webp",
    avatar: "MC",
    linkedin: "https://www.linkedin.com/in/mdavidcyrus/",
    instagram: "https://www.instagram.com/realdavidcyrus/",
    twitter: "https://x.com/mdavidcyrus",
    github: null,
    website: null,
  },
  {
    name: "Andrew Menechian",
    role: "Co-Founder & VP, Fitness & Partnerships",
    bio: "Elite coach with over a decade in fitness, having transformed hundreds of clients and mentored 100+ trainers. IFBB champion and record-holding powerlifter bringing world-class training expertise to FitCommit AI.",
    image: "/images/AndrewMenechian.webp",
    avatar: "AM",
    linkedin: "https://www.linkedin.com/in/andrewmenechian/",
    instagram: "https://instagram.com/striatian",
    twitter: "https://x.com/andrewmenechian",
    github: null,
    website: null,
  },
  {
    name: "Jahja Nur Zulbeari",
    role: "VP, Software Development",
    bio: "Full-stack engineer passionate about high-performance, scalable applications. Leads development of FitCommit AI's secure and seamless user experience.",
    image: "/images/JahjaNurZulbeari.webp",
    avatar: "JZ",
    linkedin: "https://www.linkedin.com/in/jahja-nur-zulbeari-69358820a",
    instagram: "https://instagram.com/jahjanur",
    twitter: null,
    github: null,
    website: null,
  },
  {
    name: "Jesús Martínez",
    role: "VP, AI & Machine Learning",
    bio: "AI consultant and computer vision expert specializing in deep learning and NLP. Builds resilient, scalable AI solutions that power FitCommit AI's core technology.",
    image: "/images/JesúsMartínez.webp",
    avatar: "JM",
    linkedin: "https://www.linkedin.com/in/jesusamartinezv",
    instagram: "https://www.instagram.com/yeezusmv?igsh=azJrdDE5MmpmNXZ4",
    github: null,
    website: null,
  },
  {
    name: "Andrew Kobersy",
    role: "VP, Product Engineering & Product Marketing",
    bio: "Cybersecurity engineer and product builder with expertise in secure design, feature development, and product positioning. Supports FitCommit AI's go-to-market by shaping how new features are presented to users and the market.",
    image: "/images/AndrewKobersy.webp",
    avatar: "AK",
    linkedin: "https://www.linkedin.com/in/andrew-kobersy-aa5022202/",
    instagram: "https://instagram.com/andrew_kobe",
    twitter: null,
    github: null,
    website: null,
  },
  {
    name: "Ralph Kobersy",
    role: "VP, Platform Engineering & Cybersecurity",
    bio: "Cybersecurity specialist and platform engineer experienced in zero-trust architectures and secure infrastructure. Ensures FitCommit AI's systems are scalable, protected, and high-performing.",
    image: "/images/RalphKobersy.webp",
    avatar: "RK",
    linkedin: "https://www.linkedin.com/in/ralph-kobersy-205ab2207/",
    instagram: "https://instagram.com/ralph_kobe",
    twitter: null,
    github: null,
    website: null,
  },
  {
    name: "Anthony Thambiah",
    role: "VP, Infrastructure & Cloud Operations",
    bio: "Certified Google Cloud Architect and DevOps expert with 13+ years in cloud and automation. Ensures FitCommit AI runs at peak performance, security, and reliability.",
    image: "/images/AnthonyThambiah.webp",
    avatar: "AT",
    linkedin: "https://www.linkedin.com/in/anthony-t-4905a94a/",
    instagram: "https://www.instagram.com/anthony_thambiah/",
    twitter: null,
    github: null,
    website: null,
  }
]

export function TeamSection() {
  return (
    <section id="team" className="py-16 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-6">
            Meet the Team
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            The brilliant minds behind FitCommit. From AI researchers to medical professionals, 
            we're united by a mission to make body composition accessible to everyone.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              {/* Card */}
              <div className="bg-bg border border-border rounded-2xl p-6 h-full hover:border-accent transition-all duration-300 hover:shadow-lg">
                {/* Avatar / Image */}
                <div className="flex items-center mb-6">
                  {member.image ? (
                    <div className="mr-4 group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src={member.image}
                        alt={`${member.name} portrait`}
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded-2xl object-cover object-center"
                        sizes="(max-width: 1024px) 64px, 64px"
                        priority={false}
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent-2/20 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold text-accent">{member.avatar}</span>
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-semibold text-text group-hover:text-accent transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-accent font-medium">{member.role}</p>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-muted leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex items-center flex-wrap gap-2">
                  {member.linkedin && (
                    <motion.a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-surface border border-border rounded-lg hover:border-accent hover:bg-accent/10 transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <Linkedin className="w-4 h-4 text-accent" />
                    </motion.a>
                  )}
                  {member.instagram && (
                    <motion.a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-surface border border-border rounded-lg hover:border-accent hover:bg-accent/10 transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={`${member.name}'s Instagram profile`}
                    >
                      <Instagram className="w-4 h-4 text-accent" />
                    </motion.a>
                  )}
                  {member.twitter && (
                    <motion.a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-surface border border-border rounded-lg hover:border-accent hover:bg-accent/10 transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={`${member.name}'s X profile`}
                    >
                      <Twitter className="w-4 h-4 text-accent" />
                    </motion.a>
                  )}
                  {member.github && (
                    <motion.a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-surface border border-border rounded-lg hover:border-accent hover:bg-accent/10 transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={`${member.name}'s GitHub profile`}
                    >
                      <Github className="w-4 h-4 text-accent" />
                    </motion.a>
                  )}
                  {member.website && (
                    <motion.a
                      href={member.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-surface border border-border rounded-lg hover:border-accent hover:bg-accent/10 transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={`${member.name}'s website`}
                    >
                      <Globe className="w-4 h-4 text-accent" />
                    </motion.a>
                  )}
                </div>

                {/* Hover Effect Line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent to-accent-2 rounded-b-2xl"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join the Team CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-accent/10 to-accent-2/10 border border-accent/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-text mb-4">
              Want to join our mission?
            </h3>
            <p className="text-muted mb-6">
              We're always looking for talented individuals passionate about health tech and AI.
            </p>
            <motion.a
              href="https://www.linkedin.com/company/fitcommit"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-white px-6 py-3 rounded-full font-semibold hover:bg-accent/90 transition-colors duration-200 inline-block"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Open Positions
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 