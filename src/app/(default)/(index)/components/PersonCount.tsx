'use client'
import { animate } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import { useInView } from "framer-motion"

export default function PersonCount() {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true }) 

    useEffect(() => {
        if (isInView) {
            animate(0, 150, {
                duration: 2,
                ease: "circOut",
                onUpdate: (latest) => setCount(Math.round(latest)),
            })
        }
    }, [isInView])

    return (
        <div ref={ref} className="font-medium text-center text-3xl">
            В книге запечатлено уже более{" "}
            <span className="font-bold bg-white py-1 px-2 rounded-xl ring-1 ring-inset ring-zinc-200">
                {count}
            </span>{" "}
            бойцов
        </div>
    )
}
