'use client'
import { IPerson } from "@/interfaces/Person.interface";
import personService from "@/services/person.service";
import ButtonUI from "@/ui/Button";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function PagePersonPost({ person }: { person: IPerson }) {
    const { data } = useQuery({queryKey: ['person', person.id], queryFn: () => personService.getDetail(person.id), initialData: person})

    return <div className="mt-10 space-y-6">
        <div className="flex items-center">
            <img src={data.photo} className="w-[150px]"/>
            <div className="ml-3">
                <h1 className="font-bold text-3xl">{data.first_name} {data.last_name} {data.middle_name}</h1>
                <div className="font-medium text-xl">{data.date_of_birth.replaceAll('-', '.')} — {data.date_of_death.replaceAll('-', '.')}</div>
                <div className="mt-3 flex space-x-1">
                    <ButtonUI text="Скачать"/>
                    <ButtonUI text="Скачать"/>
                    <ButtonUI text="Поделиться"/>
                </div>
            </div>
        </div>
        <div className="p-5 bg-white rounded-xl ring-1 ring-inset ring-zinc-200">
            <h3 className="font-bold text-2xl">Медали</h3>
            <div className="flex gap-3 mt-6">
                <div className="bg-zinc-50 p-4 rounded-xl flex flex-col items-center">
                    <img className="h-42" src="http://9may-priz.ru/images/nagrada-vov/3.png"/>
                    <div className="mt-3 font-bold">Золотая Звезда</div>
                </div>
                <div className="bg-zinc-50 p-4 rounded-xl flex flex-col items-center">
                    <img className="h-42" src="http://9may-priz.ru/images/nagrada-vov/5.png"/>
                    <div className="mt-3 font-bold">Золотая Звезда</div>
                </div>
                <div className="bg-zinc-50 p-4 rounded-xl flex flex-col items-center">
                    <img className="h-42" src="http://9may-priz.ru/images/nagrada-vov/11.png"/>
                    <div className="mt-3 font-bold">Золотая Звезда</div>
                </div>
                <div className="bg-zinc-50 p-4 rounded-xl flex flex-col items-center">
                    <img className="h-42" src="http://9may-priz.ru/images/nagrada-vov/12.png"/>
                    <div className="mt-3 font-bold">Золотая Звезда</div>
                </div>
            </div>
        </div>
        
    </div>
}