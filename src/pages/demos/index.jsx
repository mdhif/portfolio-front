import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllDemos } from '@/lib/getAllDemos'
import { formatDate } from '@/lib/formatDate'

function Demo({ demo }) {
  return (
    <demo className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/demos/${demo.slug}`}>
          {demo.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={demo.date}
          className="md:hidden"
          decorate
        >
          {formatDate(demo.date)}
        </Card.Eyebrow>
        <Card.Description>{demo.description}</Card.Description>
        <Card.Cta>Read demo</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={demo.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(demo.date)}
      </Card.Eyebrow>
    </demo>
  )
}

export default function DemosIndex({ demos }) {
  return (
    <>
      <Head>
        <title>Demos - Mohamed Dhif</title>
        <meta
          name="description"
          content="This is where I showcase what State of the Art AI is capable of. I will try to touch as many subjects and modalities (text/image/speech/video) in these projects as I can"
        />
      </Head>
      <SimpleLayout
        title="Showcasing AI power through live projects"
        intro="This is where I showcase what State of the Art AI is capable of. I will try to touch as many subjects and modalities (text/image/speech/video) in these projects as I can"
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {demos.map((demo) => (
              <Demo key={demo.slug} demo={demo} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      demos: (await getAllDemos()).map(({ component, ...meta }) => meta),
    },
  }
}
