import Image from 'next/future/image'
import { Button } from '@/components/Button'

import logoSoGe from '/src/images/logos/SoGe.svg'
import logoEnCoV from '/src/images/logos/ENCOV_logo.png'
import logoTAGHeuer from '/src/images/logos/THC.svg'
import logoENSTA from '/src/images/logos/ENSTA.svg'
import logoENIT from '/src/images/logos/ENIT.jpg'
import logoAWS from '/src/images/logos/AWS.svg'

import { 
    BriefcaseIcon,
    UniversityIcon,
    ArrowDownIcon,
} from '@/components/Icons'

let resume = [
    {
      company: 'Societe Generale',
      title: 'Machine Learning Consultant',
      logo: logoSoGe,
      start: '2022',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'TAG Heuer',
      title: 'Machine Learning Engineer',
      logo: logoTAGHeuer,
      start: '2020',
      end: '2022',
    },
    {
      company: 'Endoscopy and Computer Vision',
      title: 'Research Internship',
      logo: logoEnCoV,
      start: 'May 2019',
      end: 'Aug 2019',
    },
  ]
  let schools = [
    {
      company: 'ENSTA Paris',
      title: 'Masters of Engineering - Artificial Intelligence',
      logo: logoENSTA,
      start: '2017',
      end: '2020',
    },
    {
      company: 'National Engineering School of Tunis',
      title: 'Masters of Engineering - Advanced Techniques',
      logo: logoENIT,
      start: '2017',
      end: '2020',
    },
  ]

export function Resume() {
    return (
      <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <BriefcaseIcon className="h-6 w-6 flex-none" />
          <span className="ml-3">Work Experience</span>
        </h2>
        <ol className="mt-6 space-y-4">
          {resume.map((role, roleIndex) => (
            <li key={roleIndex} className="flex gap-4">
              <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center aspect-square shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-400/40 dark:ring-0">
                <Image src={role.logo} alt="" className="scale-90 p-1" unoptimized />
              </div>
              <dl className="flex flex-auto flex-wrap gap-x-2">
                <dt className="sr-only">Company</dt>
                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {role.company}
                </dd>
                <dt className="sr-only">Role</dt>
                <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                  {role.title}
                </dd>
                <dt className="sr-only">Date</dt>
                <dd
                  className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                  aria-label={`${role.start.label ?? role.start} until ${
                    role.end.label ?? role.end
                  }`}
                >
                  <time dateTime={role.start.dateTime ?? role.start}>
                    {role.start.label ?? role.start}
                  </time>{' '}
                  <span aria-hidden="true">—</span>{' '}
                  <time dateTime={role.end.dateTime ?? role.end}>
                    {role.end.label ?? role.end}
                  </time>
                </dd>
              </dl>
            </li>
          ))}
        </ol>
  
        <h2 className="group mt-6 w-full flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <UniversityIcon className="h-6 w-6 flex-none" />
          <span className="ml-3">Education</span>
        </h2>
  
        <ol className="mt-6 space-y-4">
          {schools.map((role, roleIndex) => (
            <li key={roleIndex} className="flex gap-4">
              <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center aspect-square shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-400/40 dark:ring-0">
                <Image src={role.logo} alt="" className="scale-90" unoptimized />
              </div>
              <dl className="flex flex-auto flex-wrap gap-x-2">
                <dt className="sr-only">Company</dt>
                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {role.company}
                </dd>
                <dt className="sr-only">Role</dt>
                <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                  {role.title}
                </dd>
                <dt className="sr-only">Date</dt>
                <dd
                  className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                  aria-label={`${role.start.label ?? role.start} until ${
                    role.end.label ?? role.end
                  }`}
                >
                  <time dateTime={role.start.dateTime ?? role.start}>
                    {role.start.label ?? role.start}
                  </time>{' '}
                  <span aria-hidden="true">—</span>{' '}
                  <time dateTime={role.end.dateTime ?? role.end}>
                    {role.end.label ?? role.end}
                  </time>
                </dd>
              </dl>
            </li>
          ))}
        </ol>
  
        <Button href="#" variant="secondary" className="group mt-6 w-full">
          Download CV
          <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </Button>
      </div>
    )
  }

