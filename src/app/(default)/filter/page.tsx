'use client'
import { useState } from "react";
import SelectForm from "./components/SelectForm";
import { IPerson } from "@/interfaces/Person.interface";
import Link from "next/link";

export default function FilterPage({}) {
    const [personList, setPersonList] = useState<IPerson[]>([])
    return <div className="mt-12">
        <div>
            <h1 className="font-bold text-3xl">Фильтр</h1>
            <div>Заполнять все поля необязательно</div>
        </div>
        <SelectForm personList={personList} setPersonList={setPersonList}/>
        <div className="bg-white px-3 py-5 my-6 rounded-xl">
            {personList.length === 0 ?
                <div className="text-center font-semibold text-2xl">Ничего не найдено :(</div>
            :
                <div className="flex flex-col gap-1">
                {personList.map((person) => <>
                    <Link href={`/person/${person.id}`} className="bg-zinc-50 hover:bg-indigo-50 rounded-xl p-3">
                        <div className="font-semibold text-xl">{person.first_name} {person.last_name} {person.middle_name}</div>

                    </Link>
                </>)}
                </div>
            }
        </div>
    </div>
}