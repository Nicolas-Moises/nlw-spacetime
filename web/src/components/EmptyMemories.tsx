export function EmptyMemories() {
  return (
    <div className="flex flex-1 items-center justify-center p-16">
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
  )
}
