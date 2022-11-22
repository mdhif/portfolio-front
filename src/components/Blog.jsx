

import Image from 'next/future/image'

import vangogh from '/src/images/diffusion/vangogh.png'
import butterfly from '/src/images/diffusion/butterfly.png'
import selfPortrait from '/src/images/diffusion/artificial intelligence self portrait.png'
import jazz1 from '/src/images/diffusion/synthwave retro jazz art2.png'
import selfPortrait2 from '/src/images/diffusion/self_portrait_ai.png'
import avatar from "@/images/avatar.jpg"


const posts = [
  {
    title: 'AI painter: using stable diffusion to generate art',
    href: '#',
    category: { name: 'Article', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    imageSrc: vangogh,
    readingTime: '6 min',
    author: {
      name: 'Mohamed Dhif',
      href: '#',
      imageSrc: avatar,
    },
  },
  {
    title: 'AI Narrator: using to generate audiobooks from text files.',
    href: '#',
    category: { name: 'Demo', href: '#' },
    description:
      'If you wish to turn your pdf into an audiobook, you are in the right place.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    imageSrc: jazz1,
    readingTime: '4 min',
    author: {
      name: 'Brenna Goyette',
      href: '#',
      imageSrc: selfPortrait,
    },
  },
  {
    title: 'What is MLOps ?',
    href: '#',
    category: { name: 'Case Study', href: '#' },
    description:
      'MLOps is DevOps for ML Engineers, but what does that mean ?',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageSrc: butterfly,
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      imageSrc: selfPortrait2,
    },
  },
  
]

export function Blog() {
  return (
    <div className="relative bg-gray-50/50 dark:bg-zinc-800/20 rounded-3xl px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className=" bg-white dark:bg-zinc-900" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-zinc-200 sm:text-4xl">From the blog</h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 dark:text-zinc-400 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
              <Image
                src={post.imageSrc}
                alt=""
                sizes="(min-width: 640px) 18rem, 11rem"
                className="h-48 w-full object-cover"
              />
                
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white dark:bg-zinc-900 p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href={post.category.href} className="hover:underline">
                      {post.category.name}
                    </a>
                  </p>
                  <a href={post.href} className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900 dark:text-zinc-100">{post.title}</p>
                    <p className="mt-3 text-base text-gray-500 dark:text-zinc-300/80">{post.description}</p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href={post.author.href}>
                      <span className="sr-only">{post.author.name}</span>
                      <Image className="h-10 w-10 rounded-full" src={post.author.imageSrc} alt="" />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href={post.author.href} className="hover:underline">
                        {post.author.name}
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.datetime}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.readingTime} read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}