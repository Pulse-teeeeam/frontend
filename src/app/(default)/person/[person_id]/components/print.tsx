'use client'
import { IPerson } from "@/interfaces/Person.interface";
import { useReactToPrint } from "react-to-print";
import { useEffect, useRef } from "react";
import './style.css'
import ButtonUi from "@/ui/Button";

export default function Print({person}: {person: IPerson}) {
    const contentRef = useRef<HTMLDivElement>(null);
    const reactToPrintFn = useReactToPrint({
        contentRef: contentRef,
        documentTitle: person.last_name,
    });

    return <>
    <ButtonUi text="Распечатать" onClick={() => reactToPrintFn()}/>
    <div ref={contentRef} className="print-only">
        <div className="relative h-[900px] w-[600px] bg-black">
            <img src={'/sheets/sheet-1.jpg'} className="w-full h-full object-cover" />
            <div className="absolute top-0 left-0 z-20 text-black p-6">
                <div className="flex">
                    <div>
                        <img src={person.photo} className="max-w-[180px]"/>
                    </div>
                    <div className="ml-3">
                        <h1 className="font-bold text-5xl font-caveat">{person.last_name} {person.first_name} {person.middle_name}</h1>
                        <div className="font-bold text-3xl font-caveat">{person.date_of_birth.replaceAll('-', '.')} — {person.date_of_death.replaceAll('-', '.')}</div>
                        <div className="font-medium text-3xl font-caveat">Участник <span className="font-bold">{person.armed_conflict.title}</span></div>
                    </div>
                </div>
                <img src="https://cdn.culture.ru/images/ade6626a-a9de-5a81-a610-334fee39c61a"/>
            </div>
        </div>
        <div className="relative h-[900px] w-[600px] bg-black">
            <img src={'/sheets/sheet-1.jpg'} className="w-full h-full object-cover" />
            <div className="absolute top-0 left-0 z-20 text-black p-6">
                <div className="flex">
                    <div>
                        <img src={person.photo} className="max-w-[180px]"/>
                    </div>
                    <div className="ml-3">
                        <h1 className="font-bold text-5xl font-caveat">{person.last_name} {person.first_name} {person.middle_name}</h1>
                        <div className="font-bold text-4xl font-caveat">{person.date_of_birth.replaceAll('-', '.')} — {person.date_of_death.replaceAll('-', '.')}</div>
                        <div className="font-medium text-3xl font-caveat">Участник <span className="font-bold">{person.armed_conflict.title}</span></div>
                    </div>
                </div>
                <img src="https://cdn.culture.ru/images/ade6626a-a9de-5a81-a610-334fee39c61a"/>
            </div>
        </div>
</div>
</>

    return <div className="flex justify-center gap-3 items-center">
        <div className="relative h-[900px] w-[600px] bg-black my-12" id='capture'>
            <img src={'/sheets/sheet-1.jpg'} className="w-full h-full object-cover" />
            <div className="absolute top-0 left-0 z-20 text-black p-6">
                <div className="flex">
                    <img src="https://hobby-group.ru/sites/default/files/yuio10.jpg" className="max-w-[180px]"/>
                    <div className="ml-3">
                        <h1 className="font-bold text-5xl font-caveat">Карнаух Валерий Петрович</h1>
                        <div className="font-bold text-4xl font-caveat">21.06.1963 — 24.11.2023</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="h-[900px] w-[600px] bg-black my-12">
            <img src={'/sheets/sheet-2.jpg'} className="w-full h-full"/>
        </div>
    </div>
}