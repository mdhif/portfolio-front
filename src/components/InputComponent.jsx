import { Button } from '@/components/Button'
import { MailIcon } from '@/components/Icons'


export default function InputComponent() {
    return (
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
          Email
        </label>
        <div className="mt-2">
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="you@example.com"
          />
        </div>
      </div>
    )
  }

export function NewsLetter(props){
    return (
      <div
      >
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Please type your input here for text to speech
        </p>
        <div className="mt-6 flex">
          <input
            type="text"
            required
            className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
          />
          <Button type="submit" className="ml-4 flex-none" href={'/demos'}>
            Submit
          </Button>
        </div>
      </div>  
    )
}