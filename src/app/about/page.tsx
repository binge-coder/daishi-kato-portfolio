import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import profilePic from './../../../public/profile-image.png';

const page = () => {
  return (
    <div className='relative flex min-h-[100dvh] flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8'>
      <section id="about" className="bg-background py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">About Me</h2>
              <p className="mt-4 text-muted-foreground">
                {`Hi, I'm Daishi Kato, a passionate software engineer and `}
                <b>{`"write something here"`}</b>
                {` I love creating functional applications that solve real-world problems.`}
              </p>
              <p className="mt-4 text-muted-foreground">
                With years of experience in the industry, I have honed my skills in various technologies and
                frameworks, including <b>{`"write something here"`}</b>
                with the latest trends and best practices in the field.
              </p>
              <div className="mt-6">
                <Button>
                  <Link href="/contact" className="text-sm font-medium" prefetch={false}>
                    Get in Touch
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center ">
              <Image
                src={profilePic}
                alt="Daishi Kato"
                width={300}
                height={100}
                className="rounded-full shadow-lg"
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default page