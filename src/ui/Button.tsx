import { HTMLAttributeAnchorTarget, MouseEventHandler, ReactNode } from "react";

interface ButtonUiProps {
    text: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    theme?: 'solid' | 'soft' | 'outline' | 'plain';
    color?: 'indigo' | 'gray' | 'dark' | 'white' | 'red';
    Icon?: ReactNode;
    IconRight?: ReactNode;
    className?: string;
    href?: string | null;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    loading?: boolean;
    target?: HTMLAttributeAnchorTarget | undefined
}

export default function ButtonUi({ text, size = 'md', theme = 'solid', color = 'indigo', Icon = <></>, IconRight = <></>, className = '', href = null, type = undefined, onClick = undefined, loading = false, target = undefined }: ButtonUiProps) {
    switch (size) {
        case 'xs':
            var size_class = 'px-3 py-2 gap-1.5 text-sm'
            break
        case 'sm':
            var size_class = 'px-4 py-2 gap-2'
            break
        case 'md':
            var size_class = 'px-5 py-2.5 gap-2.5'
            break
        case 'lg':
            var size_class = 'px-6 py-3 gap-2.5'
            break
        case 'xl':
            var size_class = 'px-7 py-4 gap-3'
            break
        default:
            var size_class = ''
            break
    }


    switch (theme) {
        case 'solid':
            switch (color) {
                case 'indigo':
                    var theme_class = 'bg-indigo-600 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dashed outline-indigo-700 hover:bg-indigo-700 active:bg-indigo-800'
                    break
                case 'gray':
                    var theme_class = 'text-white bg-zinc-100 hover:text-zinc-900 ring-1 ring-inset ring-black/15 bg-zinc-700 ring-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dashed outline-zinc-700 hover:bg-zinc-200 active:bg-zinc-300 hover:bg-zinc-750 active:bg-zinc-600'
                    break                    
                case 'dark':
                    var theme_class = 'bg-zinc-700 text-white bg-zinc-800 ring-1 ring-inset ring-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dashed outline-zinc-700 hover:bg-zinc-700/75 active:bg-zinc-700/90 hover:bg-zinc-750 active:bg-zinc-600'
                    break
                case 'white':
                    var theme_class = 'bg-white text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dashed outline-zinc-400 hover:bg-zinc-200 active:bg-zinc-300'
                    break
                case 'red':
                    var theme_class = 'bg-red-600 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dashed outline-red-700 hover:bg-red-700 active:bg-red-800'
                    break
                default:
                    var theme_class = ''
                    break
            }

            break
        case 'soft':
            switch (color) {
                case 'indigo':
                    var theme_class = 'bg-indigo-100/50 bg-indigo-900/40 text-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dashed outline-indigo-700 hover:bg-indigo-100 active:bg-indigo-200 hover:bg-indigo-900/75 active:bg-indigo-900'
                    break
                case 'gray':
                    var theme_class = 'bg-zinc-100/50 bg-zinc-500/20 text-zinc-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dashed outline-zinc-700 hover:bg-zinc-100 active:bg-zinc-200 hover:bg-zinc-500/30 active:bg-zinc-500/40'
                    break                    
                case 'dark':
                    var theme_class = 'bg-zinc-500 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dashed outline-zinc-700 hover:bg-zinc-600 active:bg-zinc-700 hover:bg-zinc-750 active:bg-zinc-600'
                    break
                case 'white':
                    var theme_class = 'bg-white/30 text-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dashed outline-zinc-700 hover:bg-zinc-200 active:bg-zinc-300'
                    break
                case 'red':
                    var theme_class = 'bg-red-100/50 bg-red-900/20 text-red-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dashed outline-red-700 hover:bg-red-100 active:bg-red-200 hover:bg-red-900/50 active:bg-red-900/75'
                    break
                default:
                    var theme_class = ''
                    break
            }

            break
        case 'outline':
            switch (color) {
                case 'indigo':
                    var theme_class = 'border-2 border-indigo-600/50 text-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dashed outline-indigo-700 hover:border-indigo-600 hover:bg-indigo-600 active:bg-indigo-700 active:border-indigo-700 hover:text-white hover:text-white'
                    break
                case 'gray':
                    var theme_class = 'border-2 border-zinc-200 border-zinc-600/50 text-zinc-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dashed outline-zinc-700 hover:border-zinc-200 hover:bg-zinc-200 active:bg-zinc-300 active:border-zinc-300 hover:text-black hover:text-white hover:border-zinc-600 hover:bg-zinc-600 active:bg-zinc-700 active:border-zinc-700'
                    break                    
                case 'dark':
                    var theme_class = 'border-2 border-zinc-600/50 text-zinc-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dashed outline-zinc-700 hover:border-zinc-600 hover:bg-zinc-600 active:bg-zinc-700 active:border-zinc-700 hover:text-white hover:text-white'
                    break
                case 'white':
                    var theme_class = 'border-2 border-white/50 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dashed outline-zinc-700 hover:border-zinc-200 hover:bg-zinc-200 active:border-zinc-300 active:bg-zinc-300 hover:text-black hover:text-black'
                    break
                case 'red':
                    var theme_class = 'border-2 border-red-600/50 text-red-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dashed outline-red-700 hover:border-red-600 hover:bg-red-600 active:bg-red-700 active:border-red-700 hover:text-white hover:text-white'
                    break
                default:
                    var theme_class = ''
                    break
            }

            break
        case 'plain':
            switch (color) {
                case 'indigo':
                    var theme_class = 'text-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dashed outline-indigo-700 hover:bg-indigo-100 active:bg-indigo-200 hover:bg-indigo-500/20 active:bg-indigo-500/30'
                    break
                case 'gray':
                    var theme_class = 'text-zinc-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dashed outline-zinc-700 hover:bg-zinc-200 active:bg-zinc-300 hover:text-black hover:text-white hover:bg-zinc-500 active:bg-zinc-600'
                    break                    
                case 'dark':
                    var theme_class = 'text-zinc-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dashed outline-zinc-700 hover:bg-zinc-500 active:bg-zinc-600 hover:text-white hover:text-white'
                    break
                case 'white':
                    var theme_class = 'text-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dashed outline-zinc-700 hover:bg-white active:bg-zinc-200'
                    break
                case 'red':
                    var theme_class = 'text-red-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dashed outline-red-700 hover:bg-red-100 active:bg-red-200 hover:bg-red-500/20 active:bg-red-500/30'
                    break
                default:
                    var theme_class = ''
                    break
            }

            break
        default:
            var theme_class = ''
            break
    }

    if (href) {
        return (<Link target={target} href={href} className={`grid grid-flow-col items-center justify-center font-medium transition select-none ${size_class} ${theme_class} rounded-lg ${className}`} aria-disabled="false">
            {loading && <svg className="animate-spin -ml-1 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>}{Icon}{text}{IconRight}
        </Link>)
    } else {
        return (<button onClick={onClick} type={type} className={`grid grid-flow-col items-center justify-center font-medium transition select-none ${size_class} ${theme_class} rounded-lg ${className}`} aria-disabled="false">
            {loading && <svg className="animate-spin -ml-1 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>}{Icon}{text}{IconRight}
        </button>)
    }

}