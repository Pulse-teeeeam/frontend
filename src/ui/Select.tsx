'use client'
import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'
import { HTMLInputTypeAttribute, ReactNode, useEffect, useState } from 'react'

interface IItem {
    id: number,
    title: string
}

interface InputUiProps {
    items: IItem[];
    item?: IItem | undefined | null
    title?: string | ReactNode;
    description?: string | ReactNode;
    placeholder?: string;
    className?: string;
    func?: any,
    type?: HTMLInputTypeAttribute | undefined,
    color?: 'base' | 'red',
}

export default function SelectUi({items, item = undefined, title = '', description = '', placeholder = '', className = '', func = () => {}, type = undefined, color = 'base'}: InputUiProps) {
  const [selectedPerson, setSelectedPerson] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => {
    if (selectedPerson === false) {
      if (item === undefined) {
        setSelectedPerson(items[0])
      } else {
        setSelectedPerson(item)
      }
    }
    func(selectedPerson)
  }, [selectedPerson])

  const filteredPeople =
    query === ''
      ? items
      : items.filter((person) => {
          return person.title.toLowerCase().includes(query.toLowerCase())
        })

  if (selectedPerson === false) return <></>

  return (
    <div className="grid gap-2">
        {title && <label className="text-sm font-medium text-left">{title}</label>}
    <Combobox value={selectedPerson} onChange={setSelectedPerson} onClose={() => setQuery('')}>
      <ComboboxInput
        className={`block appearance-none rounded-lg border-none px-4 py-2.5 transition focus:outline-none ring-1 ring-inset ${color == 'base' ? 'focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-black' : color == 'red' ? 'ring-2 ring-inset ring-red-600/80 text-red-600' : ''} bg-zinc-50 focus:bg-zinc-100 ring-zinc-300 hover:ring-zinc-400 placeholder:text-zinc-600 ${className}`}
        aria-label="Assignee"
        displayValue={(person) => person?.title}
        onChange={(event) => setQuery(event.target.value)}
      />
      <ComboboxOptions anchor="bottom" className="empty:invisible bg-white text-black rounded-xl p-2 font-medium py-2">
        {filteredPeople.map((person) => (
          <ComboboxOption key={person.id} value={person} className="p-2 data-[focus]:bg-indigo-600 data-[focus]:text-white rounded-sm">
            {person.title}
          </ComboboxOption>
        ))}
      </ComboboxOptions>
    </Combobox>
        {description && <div className="text-sm text-zinc-200">{description}</div>}
    </div>
  )
}