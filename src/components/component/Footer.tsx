import React from 'react'
import navLinks from '@/data/nav-links.json'


const Footer = () => {
  return (
    <footer className="bg-muted py-6 sm:py-8 lg:py-10">
      <div className='md:hidden'>
        <div className="container mx-auto px-4 lg:px-8">
          <nav className="flex justify-between items-center ">
            <div className=" grid grid-cols-2 gap-3 mx-auto w-5/6 pb-6">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-sm text-foreground hover:underline text-center p-1 border border-primary rounded-sm shadow hover:shadow-lg">{link.name}</a>
              ))}
            </div>
            {/* <div>
              <p className="text-sm text-muted-foreground">Made with ❤️ by Daishi Kato</p>
            </div> */}
          </nav>
        </div>
      </div>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p className="text-sm text-muted-foreground">&copy; 2024 Daishi Kato. All rights reserved.</p>
    </div>
  </footer>
  )
}

export default Footer