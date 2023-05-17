import { User } from 'lucide-react'

import logoNlw from '../assets/nlw-logo.svg'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

        <a
          href="#"
          className="flex items-center gap-3 text-left transition-colors hover:text-gray-50"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User size={20} className="text-gray-500" />
          </div>

          <p className="max-w-[140px] text-sm leading-snug">
            <span className="underline underline-offset-4">Crie sua conta</span>{' '}
            e salve suas memórias!
          </p>
        </a>

        {/* Hero */}

        <div className="space-y-5 ">
          <Image src={logoNlw} alt="Logo NlW" />

          <div className="max-w-[420px] space-y-1">
            <h1 className="text-5xl font-bold leading-tight text-gray-50">
              Sua cápsula do tempo
            </h1>
            <p className="text-lg leading-relaxed">
              Colecione momentos marcantes da sua jornada e compartilhe (se
              quiser) com o mundo!
            </p>
          </div>

          <a
            href=""
            className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt uppercase leading-none text-black transition-colors hover:bg-green-400"
          >
            Cadastrar lembrança
          </a>
        </div>

        <footer className="text-xs text-gray-200">
          Feito com 💜 por{' '}
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 hover:text-gray-50"
          >
            Nicolas Moises
          </a>
        </footer>
      </div>

      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="max-w-sm text-center leading-relaxed">
            Você ainda não registrou nenhuma lembrança, comece a{' '}
            <a
              className="underline underline-offset-4 transition-colors hover:text-gray-50"
              href="#"
            >
              criar agora!
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
