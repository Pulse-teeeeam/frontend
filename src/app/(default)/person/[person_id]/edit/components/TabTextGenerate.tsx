'use client'
import { IPerson } from "@/interfaces/Person.interface";
import personService from "@/services/person.service";
import ButtonUi from "@/ui/Button";
import { Textarea } from "@headlessui/react";
import { useState } from "react";
import { toast } from "sonner";

export default function TabTextGenerate({person_data}: {person_data: IPerson}) {
    const [loading, setLoading] = useState<boolean>(false)
    const [text, setText] = useState<string | null>(null)

    const start_generate = async () => {
        try {
            setLoading(true)
            const result = await personService.generateText(person_data.id)
            setText(result.text)
            toast.success('Успешно обновлено!');
        } catch (e) {
            toast.error(`Ошибка - ${e}`);
            console.error(e);
        }
        setLoading(false)
    }

    return <>
        <h3 className="font-bold text-xl my-3">Генерация текста через нейросеть</h3>
        <div className="flex flex-col md:flex-row bg-white px-5 py-5 rounded-xl my-3 gap-5">
            {text ? <Textarea
                className="block w-full h-[450px] appearance-none rounded-lg border-none px-4 py-2.5 transition focus:outline-none ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-black bg-zinc-50 focus:bg-zinc-100 ring-zinc-300 hover:ring-zinc-400 placeholder:text-zinc-600"
                value={text}
            /> : 
                loading ?
                    <ButtonUi text="Идёт генерация" loading={true} className="w-full"/>
                    :
                    <ButtonUi text="Начать генерацию" className="w-full" onClick={start_generate}/>
                }
        </div>
    </>
}