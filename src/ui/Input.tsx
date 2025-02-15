import { HTMLInputTypeAttribute, ReactNode } from "react";

interface InputUiProps {
    title?: string | ReactNode;
    description?: string | ReactNode;
    placeholder?: string;
    className?: string;
    func?: any,
    type?: HTMLInputTypeAttribute | undefined,
    color?: 'base' | 'red',
}

export default function InputUi({title = '', description = '', placeholder = '', className = '', func = '', type = undefined, color = 'base'}: InputUiProps) {
    return <>
        <div className="grid gap-2">
            {title && <label className="text-sm font-medium text-left">{title}</label>}
            <input type={type} {...func} placeholder={placeholder} className={`block appearance-none rounded-lg border-none px-4 py-2.5 transition focus:outline-none ring-1 ring-inset ${color == 'base' ? 'focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-black' : color == 'red' ? 'ring-2 ring-inset ring-red-600/80 text-red-600' : ''} bg-zinc-50 focus:bg-zinc-100 ring-zinc-300 hover:ring-zinc-400 placeholder:text-zinc-600 ${className}`}/>
            {description && <div className="text-sm text-zinc-200">{description}</div>}
        </div>
    </>
}