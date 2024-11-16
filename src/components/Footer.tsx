'use client'

import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { Twitter, Linkedin, Github, Instagram, Mail, Phone } from 'lucide-react'
import CoffeeModal from './CoffeeModal'

export default function Footer() {
  return (
    <footer className="bg-[#030812] text-white py-16 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Quick Navigation */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-cyan-400 
              border-b-2 border-cyan-400 pb-2 
              hover:text-cyan-300 transition">
              Quick Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'Threats', href: '/threats' },
                { name: 'Prevention', href: '/prevention' },
                { name: 'Tools', href: '/tools' },
                { name: 'Assessment', href: '/assessment' },
                { name: 'Courses', href: '/courses' }
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="
                      text-white 
                      hover:text-cyan-300 
                      hover:pl-2 
                      transition-all 
                      duration-300 
                      ease-in-out
                      inline-block
                    "
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-green-400 
              border-b-2 border-green-400 pb-2 
              hover:text-green-300 transition">
              Resources
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Latest News', href: '/news' },
                { name: 'Quiz', href: '/quiz' },
                { name: 'Glossary', href: '/glossary' },
                { name: 'Sitemap', href: '/sitemap' },
                { name: 'Report Incident', href: '/report-incident'}
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="
                      text-white 
                      hover:text-green-300 
                      hover:pl-2 
                      transition-all 
                      duration-300 
                      ease-in-out
                      inline-block
                    "
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Connect */}
          <div className="grid grid-cols-2 gap-8 col-span-2">
            {/* Follow Us */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-yellow-400 
                border-b-2 border-yellow-400 pb-2 
                hover:text-yellow-300 transition">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                {[
                  { icon: Twitter, href: 'https://twitter.com/paul2devs' },
                  { icon: Linkedin, href: 'https://linkedin.com/in/paul2devs' },
                  { icon: Github, href: 'https://github.com/paul2devs' },
                  { icon: Instagram, href: 'https://www.instagram.com/paul2devs/' }
                ].map((social) => (
                  <a 
                    key={social.href}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="
                      text-white 
                      hover:text-yellow-300 
                      hover:scale-110 
                      transition-all 
                      duration-300 
                      ease-in-out
                    "
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Support & Connect */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-purple-400 
                border-b-2 border-purple-400 pb-2 
                hover:text-purple-300 transition">
                Connect With Me
              </h4>
              <div className="space-y-3">
                <a 
                  href="mailto:paul2devs@gmail.com" 
                  className="
                    flex items-center space-x-2 
                    text-white 
                    hover:text-purple-300 
                    transition-all 
                    duration-300 
                    ease-in-out
                  "
                >
                  <Mail className="w-6 h-6" />
                  <span>Email Us</span>
                </a>
                <a 
                  href="tel:+2347068578749" 
                  className="
                    flex items-center space-x-2 
                    text-white 
                    hover:text-purple-300 
                    transition-all 
                    duration-300 
                    ease-in-out
                  "
                >
                  <Phone className="w-6 h-6" />
                  <span>Call Us</span>
                </a>
                <a 
                  href={`https://wa.me/2347068578749?text=${encodeURIComponent(
                    "Hello! I'm interested in learning more about your cybersecurity services. Can you provide me with more information?"
                  )}`} 
                  target="_blank"          
                  rel="noopener noreferrer" 
                  aria-label="Contact us on WhatsApp"
                  className="
                    group flex items-center space-x-2 
                    text-white 
                    hover:text-green-500 
                    transition-all 
                    duration-300 
                    ease-in-out
                    py-1 px-2 
                    rounded-md 
                    hover:bg-green-50/10
                  "
                >
                  <FaWhatsapp
                    className="
                      w-6 h-6 
                      text-green-500 
                      group-hover:scale-110 
                      transition-transform
                    " 
                  />
                  <span className="font-medium text-sm">
                    WhatsApp 
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Support Section */}
        <div className="text-center mt-12">
          <h4 className="text-xl font-semibold mb-4 text-yellow-400">
            Support My Work
          </h4>
          <div className="flex justify-center">
            <CoffeeModal />
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-8">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} paul2dev. All rights reserved.
        </p>
      </div>
    </footer>
  )
}