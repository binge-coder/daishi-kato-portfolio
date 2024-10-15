"use client";

// import Link from "next/link"
import { Button } from "@/components/ui/button"
// import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
// import Image from "next/image"
import { FaArrowDown } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { useRef } from "react";
import { ScrollToPlugin } from "gsap/all";
import Link from "next/link";
import { Toaster, toast } from 'sonner'


gsap.registerPlugin(useGSAP, ScrollToPlugin);

export function Landing() {
  const arrowRef = useRef(null)

  useGSAP(
    () => {
      gsap.to(arrowRef.current, {
        y: 20,
        duration: 1,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
      })
    }

  )

  const pageDown = () => {
    gsap.to(window, { duration: 1, scrollTo: "#contact" });
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get('Name'),
      email: formData.get('Email'),
      message: formData.get('Message'),
    };
  
    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        console.log('Email sent successfully');
        // Show success message to user
        toast.success('Email sent successfully')
      } else {
        console.log('Failed to send email, try sending email manually');
        // Show error message to user
        toast.error('Failed to send email, try sending email manually')
      }
    } catch (error) {
      console.error('An error occurred', error);
      // Show error message to user
      toast.error('An error occurred')
    }
  };

  return (
    <>
    <Toaster richColors/>
      <main className="flex-1">
        <section className="relative flex min-h-[100dvh] flex-col items-center justify-center bg-gradient-to-br from-[#6b46c1] to-[#b794f4] px-4 py-12 sm:px-6 lg:px-8">
          {/* <div
            className="absolute inset-0 bg-gradient-to-br from-[#6b46c1] to-[#b794f4] opacity-50 blur-3xl"
            style={{ animation: "gradient-animation 10s ease infinite" }}
          /> */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ transform: "scale(1.1)", transition: "transform 10s ease" }}
          />
          <div className="relative z-10 text-center">
            <h1 className="text-5xl font-bold tracking-tight text-primary-foreground sm:text-6xl lg:text-7xl">
              Daishi Kato
            </h1>
            <p className="mt-3 text-xl text-primary-foreground sm:mt-5 sm:text-2xl sm:px-32 md:px-72">
            React library author, maintaining three state management libraries, <Link href='https://zustand-demo.pmnd.rs/' className="startLink" target="_blank">Zustand</Link>, <Link href='https://jotai.org/' className="startLink" target="_blank">Jotai</Link>, <Link href='https://valtio.dev/' className="startLink" target="_blank">Valtio</Link>, and React Server Components framework, <Link href='https://waku.gg/' className="startLink" target="_blank">Waku</Link>.
            </p>
          </div>
          <div ref={arrowRef} className="absolute bottom-9" onClick={pageDown}>
            <FaArrowDown className="w-10 h-10 text-primary-foreground"/>
          </div>
        </section>

        <section id="contact" className="bg-background py-12 sm:py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl ">Contact for Consultancy</h2>
            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div>
                <p className="text-muted-foreground">
                  {`I'm always excited to connect with new people and discuss potential collaborations or projects. Feel
                  free to reach out to me using the form below, and I'll get back to you as soon as possible.`}
                </p>
                <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                  <Input type="text" name="Name" placeholder="Enter your name" className="w-full" />
                  <Input type="email" name="Email" placeholder="Enter your email" className="w-full" />
                  <Textarea name="Message" placeholder="Enter your message" className="w-full" />
                  <Button type="submit" className="shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    Send Inquiry
                  </Button>
                </form>
              </div>
              <div className="flex items-center justify-center">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <MailIcon className="h-6 w-6 text-primary" />
                    <a href="#" className="text-muted-foreground hover:underline">
                      yourname@example.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <PhoneIcon className="h-6 w-6 text-primary" />
                    <a href="#" className="text-muted-foreground hover:underline">
                      +1 (234) 567-890
                    </a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPinIcon className="h-6 w-6 text-primary" />
                    <span className="text-muted-foreground">123 Main Street, Anytown USA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

    </>

  )
}

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function MapPinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}


function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
