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
            I am Mohamed Dhif, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut arcu nec turpis euismod dictum. Sed maximus semper libero. Pellentesque id congue odio, et dic.
            </p>
            <div className="mt-6 flex gap-6">
                <SocialLink
                href="https://twitter.com"
                aria-label="Follow on Twitter"
                icon={TwitterIcon}
                />
                <SocialLink
                href="https://instagram.com"
                aria-label="Follow on Instagram"
                icon={InstagramIcon}
                />
                <SocialLink
                href="https://github.com"
                aria-label="Follow on GitHub"
                icon={GitHubIcon}
                />
                <SocialLink
                href="https://linkedin.com"
                aria-label="Follow on LinkedIn"
                icon={LinkedInIcon}
                />
            </div>
            </div>
        </Container>
    )
}