"use client"
import { Button } from '@/components/ui/button'
import navLinks from '@/data/nav-links.json'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRef } from 'react'
import { twMerge } from 'tailwind-merge'

const Navbar = () => {
    const pathname = usePathname()
    const newClasses = pathname !== "/" ? "bg-primary relative" : "";
    const consultNavRef = useRef(null)

    useGSAP(
        () => {
            gsap.to(consultNavRef.current, {
                duration: 1,
                delay: 1,
                repeat: -1,
                border: '4px solid #2196F3',
                color: '#2196F3',
                ease: "power1.inOut",
                yoyo: true,
            });
        })
        
    return (
        <header className={twMerge("absolute z-10 w-full px-4 py-6 sm:px-6 lg:px-8", newClasses)}>
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/" className="text-lg font-bold text-primary-foreground w-48">
                    Daishi Kato
                </Link>
                <nav className="hidden space-x-4 sm:flex">
                    {navLinks.map((link) => (
                        <Link href={link.href} key={link.href} className="text-sm font-medium text-primary-foreground hover:underline underline-offset-4" >
                            {link.name}
                        </Link>
                    ))}
                </nav>
                <Button variant={'secondary'} className='w-48 ' ref={consultNavRef}>
                    <Link href="/#contact" className="text-sm font-medium text-center">
                        Get Consulted
                    </Link>
                </Button>
            </div>
        </header>
    )
}

export default Navbar