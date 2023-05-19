import Link from 'next/link'
import logoNlw from '../assets/nlw-logo.svg'
import Image from 'next/image'

export function Hero() {
  return (
    <div className="space-y-5 ">
      <Image src={logoNlw} alt="Logo NlW" />

      <div className="max-w-[420px] space-y-1">
        <h1 className="text-5xl font-bold leading-tight text-gray-50">
          Sua cápsula do tempo
        </h1>
        <p className="text-lg leading-relaxed">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>
      </div>

      <Link
        href="/memories/new"
        className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt uppercase leading-none text-black transition-colors hover:bg-green-400"
      >
        Cadastrar lembrança
      </Link>
    </div>
  )
}
