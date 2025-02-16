'use client'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import TabInformation from "./components/TabInformation";
import TabFiles from "./components/TabFiles";
import personService from "@/services/person.service";
import { useQuery } from "@tanstack/react-query";
import { IoCaretBack } from "react-icons/io5";
import Link from "next/link";
import React from "react";

export default function PageEditPersonPost({ person_id }: {person_id: number}) {
    const { data } = useQuery({ queryKey: ['person_edit', person_id], queryFn: () => personService.getDetail(person_id) });

    if (!data) return <>Data</>;

    return (
        <div className="mt-10">
            <h1 className="font-bold text-3xl flex items-center">
                <Link href={`/person/${data.id}/`}><IoCaretBack className="w-10 h-10 p-1 bg-white hover:bg-indigo-100 rounded-xl mr-3" /></Link>
                Редактирование записи #{person_id}
            </h1>

            <TabGroup className={'mt-3'}>
                <TabList className={'w-full grid grid-cols-2 bg-white rounded-2xl p-2 gap-1'}>
                    <Tab className={'data-[selected]:bg-indigo-600 data-[hover]:bg-indigo-600/15 data-[selected]:text-white p-2 rounded-md'}>Информация</Tab>
                    <Tab className={'data-[selected]:bg-indigo-600 data-[hover]:bg-indigo-600/15 data-[selected]:text-white p-2 rounded-md'}>Файлы и медали</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel><TabInformation person_data={data} /></TabPanel>
                    <TabPanel><TabFiles person_data={data} /></TabPanel>
                </TabPanels>
            </TabGroup>
        </div>
    );
}
