'use client'
import { IPerson } from "@/interfaces/Person.interface";
import personService from "@/services/person.service";
import ButtonUI from "@/ui/Button";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import Print from "./components/print";
import useIsAuth from "@/lib/useIsAuth";


export default function PagePersonPost({ person, person_id }: { person: IPerson | undefined, person_id: number }) {
    const { data, error } = useQuery({queryKey: ['person', person_id], queryFn: () => personService.getDetail(person_id), initialData: person})
    const is_auth = useIsAuth()

    if (!data) return <>Такой записи нет</>

    return <div className="mt-10 space-y-6">
        <div className="p-3 bg-indigo-600 rounded-xl text-center font-bold text-white">Черновик. Запись не видят пользователи</div>
        <div className="flex flex-col md:flex-row items-center">
            {data.photo && <img src={data.photo} className="w-[150px]"/>}
            <div className="ml-3 mt-4 md:mt-0">
                <h1 className="font-bold text-3xl">{data.last_name} {data.first_name} {data.middle_name}</h1>
                <div className="font-medium text-xl">{data.date_of_birth.replaceAll('-', '.')} — {data.date_of_death.replaceAll('-', '.')}</div>
                {typeof data.armed_conflict !== "number" && <div className="font-normal text-xl">Участник <span className="font-medium">{data.armed_conflict.title}</span></div>}
                <div className="mt-3 flex space-x-1">
                    <Print person={data}/>
                    {is_auth && <ButtonUI href={`/person/${data.id}/edit`} text="Редактировать"/>}
                </div>
            </div>
        </div>
        <div className="space-y-3">
            {data.medals.length != 0 &&
                <div className="p-5 bg-white rounded-xl ring-1 ring-inset ring-zinc-200">
                    <h3 className="font-bold text-2xl">Медали</h3>
                    <div className="flex gap-3 mt-6">
                        {data.medals.map((medal) => 
                            <div className="bg-zinc-50 p-4 rounded-xl flex flex-col items-center" key={medal.id}>
                                <img className="h-42" src={medal.image} alt={medal.title}/>
                                <div className="mt-3 font-bold">{medal.title}</div>
                            </div>
                        )}
                    </div>
                </div>
            }
            <div className="p-5 bg-white rounded-xl ring-1 ring-inset ring-zinc-200">
                <h3 className="font-bold text-2xl">Информация</h3>
                <div className="mt-1">
                    <div className="flex space-x-2">
                        <div className="font-bold">Место захоронения:</div>
                        <div className="font-medium">{data.burial_place}</div>
                    </div>
                    <div className="flex space-x-2">
                        <div className="font-bold">Наименование военного комиссариата:</div>
                        <div className="font-medium">{data.military_commissariat}</div>
                    </div>
                </div>
            </div>
            {data.biography && <div className="p-5 bg-white rounded-xl ring-1 ring-inset ring-zinc-200">
                <h3 className="font-bold text-2xl">Биография</h3>
                <div className="mt-1">
                    {data.biography}
                </div>
            </div>}
            {data.files.length != 0 && <div className="p-5 bg-white rounded-xl ring-1 ring-inset ring-zinc-200">
                <h3 className="font-bold text-2xl">Файлы</h3>
                <div className="flex gap-3 mt-1">
                    {data.files.map((file) => 
                        <a href={file.file} target="_blank" className="bg-zinc-50 p-4 rounded-xl flex flex-col items-center" key={file.id}>
                            <div className="font-bold">{file.title}</div>
                        </a>
                    )}
                </div>
            </div>}
        </div>
    </div>
}
