import {
    TwitterIcon,
    InstagramIcon,
    GitHubIcon,
    LinkedInIcon,
    SocialLink,
  } from '@/components/SocialIcons'

import { Container } from '@/components/Container'

export function Intro(props){
    return(
        <Container className="mt-9">
            <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                Software and Machine Learning Engineer.
            </h1>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Hi, my name is Mohamed Dhif and I love building AI-powered software experiences. Through this website I hope to share with you demos and POCs for my personal projects as well as my thoughts and advice about ML software development</p>
            <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
            If you are curious about the field of Machine Learning and would like to learn  more about it then this is the right place for you.
            </p>
            <div className="mt-6 flex gap-6">
                {/* <SocialLink
                href="https://twitter.com"
                aria-label="Follow on Twitter"
                icon={TwitterIcon}
                />
                <SocialLink
                href="https://instagram.com"
                aria-label="Follow on Instagram"
                icon={InstagramIcon}
                /> */}
                <SocialLink
                href="https://github.com/mdhif"
                aria-label="Follow on GitHub"
                icon={GitHubIcon}
                />
                <SocialLink
                href="https://www.linkedin.com/in/mohamed-dhif/"
                aria-label="Follow on LinkedIn"
                icon={LinkedInIcon}
                />
            </div>
            </div>
        </Container>
    )
}