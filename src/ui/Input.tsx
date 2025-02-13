export default function InputUI({placeholder = undefined}: {placeholder: string | undefined}) {
    return <div>
      <input placeholder={placeholder} className="px-4 py-1 rounded-md border-none transition focus:outline-none ring-1 ring-inset focus:ring-indigo-600 text-zinc-900 ring-zinc-600/15 hover:ring-zinc-600/20 placeholder:text-zinc-600"/>
    </div>
  }