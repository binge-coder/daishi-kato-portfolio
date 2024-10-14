import { Card } from '@/components/ui/card';
import contactLinks from "@/data/contact-links.json";
import Link from 'next/link';
import React from 'react';

// Import react-icons
import { BsBook, BsMastodon } from "react-icons/bs"; // Add more icons as needed
import { FaBlog, FaBluesky, FaDiscord, FaGithub, FaInstagram, FaThreads, FaTwitter } from "react-icons/fa6";
import { SiEducative, SiEgghead, SiGumroad } from "react-icons/si";
// Icon map to match the name from the JSON
const iconMap: Record<string, React.ElementType> = {
    Book: BsBook,
    GitHub: FaGithub,
    Twitter: FaTwitter,
    Discord: FaDiscord,
    Mastodon: BsMastodon,
    Instagram: FaInstagram,
    Blog: FaBlog,
    Threads: FaThreads,
    Bluesky: FaBluesky,
    Gumroad: SiGumroad,
    Egghead: SiEgghead,
    Educative: SiEducative,
    // Add more mappings here if necessary
};

const page = () => {

    return (<>
        <div className='flex flex-col items-center bg-muted min-h-screen'>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl pt-5 pb-2">Contact Me</h2>
            <p className='text-center pb-3'>Here are some ways to reach out to me</p>
            <div className='p-3 grid gap-3 w-1/2 grid-cols-1 md:grid-cols-3 '>
                {contactLinks.map((link) => {
                    // Get the Icon component from the iconMap based on the name in the JSON
                    const IconComponent = iconMap[link.name];
                    return (
                        <Link key={link.href} href={link.href} target='_blank'>
                            <Card className='flex flex-col justify-center items-center h-36 shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-card text-card-foreground gap-3' >
                                {IconComponent ? (
                                    <IconComponent className='w-12 h-12' />
                                ) : (
                                    <span>No Icon</span> // Fallback if no icon is found
                                )}
                                <p >{link.name}</p>
                                {/* <Link href={link.href} className='mt-2'>
                            {link.name}
                        </Link> */}
                            </Card>
                        </Link>
                    )
                })}
            </div>

        </div>
        </>

    )
}

export default page