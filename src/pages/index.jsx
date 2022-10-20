import Head from 'next/head'

import { Container } from '@/components/Container'
import { Intro } from '@/components/Intro'
import { Resume } from '@/components/Resume'
import { Blog } from '@/components/Blog'
import { NewsLetter } from '@/components/Newsletter'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'


export default function Home({ articles }) {
  return (
    <>
      
      {/* Header section  */}
      <Head>
        <title>
          Mohamed Dhif - Machine Learning Engineer.
        </title>
        <meta
          name="description"
          content="I'm Mohamed Dhif, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut arcu nec turpis euismod dictum. Sed maximus semper libero. Pellentesque id congue odio, et dictum risus. In volutpat, massa imperdiet scelerisque tempor, ligula risus consequat ante, ut tincidunt velit erat id nulla. Maecenas id ultricies orci, non rhoncus lacus. Fusce ullamcorper ac mi nec cursus. Suspendisse vestibulum efficitur porta. Curabitur ex lacus, varius sit amet est eu, viverra congue tellus. Proin ac posuere nunc.  ..."
        />
      </Head>

      {/* Main Page  */}
      
      <Intro/>

      {/* Body */}
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid space-y-10 lg:pl-16 xl:pl-24 items-center">
            <Blog/>
            <div className=" flex flex-col gap-10 md:max-w-md lg:max-w-xl mx-auto">
              <Resume/>
              <NewsLetter/>
            </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
