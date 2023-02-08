import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Olivia Elliott</title>
        <meta
          name="description"
          content="I'm Olivia Elliott. I'm a forward thinking full stack developer with a love for learning."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I'm Olivia Elliott. I'm a forward thinking full stack developer 
            with a knack for learning.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                As a kid, my head was always buried in a book or looking for something new to learn.
                As I've grown, I've never lost my desire to challenge myself and continue
                my education throughout my life. This led me into the world of coding, where I knew
                that the possibilites of technology are endless. 
              </p>
              <p>
                I decided to attend the UNC Chapel Hill Full Stack Coding Bootcamp
                in April of 2022; completing a 6 month intensive program focused 
                on gaining technical expertise. I learned how to develop interactive web 
                applications that utilize UI, front-end, and back-end technologies. 
                I attended 450+ hours of live instructional time, along with working on
                asynchronous material, group projects, and individual assignments. I continued
                my work as a full time Operations Manager throughout the program which allowed
                me to perfect my time management skills. I'm ready and excited to shift my focus into the
                world of technology and contribute to the community in any way that I can.
              </p>
              <p>
                My culminating work experience of the past 10 years has allowed me to
                confidently and quickly become an innovative contributor to any team and business.
                It has sharpened my skills in multitasking, business management, project management,
                client communications, problem solving, marketing, critical thinking, and efficiently 
                completing day to day operations for the overall growth and improvement of the 
                business. These skills have brought me into my current work position which most
                clearly portrays my growth as a determined individual with a strong work ethic.
              </p>
              <p>
                I know that I can be a top contributor to any team. If you give me the opportunity,
                I will devote my time, passion, and upmost quality work to your project.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://twitter.com/oliv_e_lliott" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="https://github.com/olivelliott" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://linkedin.com/in/olivelliott" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:olivelliott48@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                olivelliott48@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
