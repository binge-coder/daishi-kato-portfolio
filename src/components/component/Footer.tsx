import React from 'react'
import navLinks from '@/data/nav-links.json'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer aria-label="Site footer" className="bg-muted py-6 sm:py-8 lg:py-10">
      <div className='md:hidden'>
        <div className="container mx-auto px-4 lg:px-8">
          <nav className="flex justify-between items-center ">
            <div className="grid grid-cols-2 gap-3 mx-auto w-5/6 pb-6">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-sm text-foreground hover:underline text-center p-1 border border-primary rounded-sm shadow hover:shadow-lg">{link.name}</a>
              ))}
            </div>
          </nav>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Daishi Kato. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
        Website made by
          <Link href="https://github.com/binge-coder" className='inline-block border border-white text-white bg-blue-500 p-1 rounded-md hover:bg-blue-700 ml-1' target='_blank'>
          Karan Kanwar
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer