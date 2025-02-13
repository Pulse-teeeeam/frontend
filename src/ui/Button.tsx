export default function ButtonUI({text = undefined, className = '', onClick = undefined}: {text: string | undefined, className?: string, onClick?: () => void}) {
    return <div>
    <button className={`px-4 py-1 rounded-md border-none transition focus:bg-indigo-600/80 bg-indigo-600 text-white ring-zinc-600/15 hover:bg-indigo-600/90 ${className}`} onClick={onClick}>{text}</button>
    </div>
  }