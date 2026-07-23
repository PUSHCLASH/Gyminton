'use client'

import Link from 'next/link'
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gym-darker py-16 px-4 border-t border-gym-text/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold gradient-accent bg-clip-text text-transparent mb-4">
              💪 Gyminton
            </h3>
            <p className="text-gym-text-secondary">
              Transform your body, transform your future.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gym-text-secondary hover:text-gym-accent">Features</Link></li>
              <li><Link href="#" className="text-gym-text-secondary hover:text-gym-accent">Pricing</Link></li>
              <li><Link href="#" className="text-gym-text-secondary hover:text-gym-accent">Security</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gym-text-secondary hover:text-gym-accent">About</Link></li>
              <li><Link href="#" className="text-gym-text-secondary hover:text-gym-accent">Blog</Link></li>
              <li><Link href="#" className="text-gym-text-secondary hover:text-gym-accent">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 glass rounded-lg hover:bg-gym-accent/20">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 glass rounded-lg hover:bg-gym-accent/20">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 glass rounded-lg hover:bg-gym-accent/20">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 glass rounded-lg hover:bg-gym-accent/20">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gym-text/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gym-text-secondary">
              © 2024 Gyminton. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-gym-text-secondary hover:text-gym-accent">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gym-text-secondary hover:text-gym-accent">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
