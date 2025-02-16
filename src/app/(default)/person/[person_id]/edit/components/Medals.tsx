'use client'
import { IMedal, IPerson } from "@/interfaces/Person.interface";
import personService from "@/services/person.service";
import ButtonUi from "@/ui/Button";
import SelectUi from "@/ui/Select";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

export default function MedalsEdit({person}: {person: IPerson}) {
    const queryClient = useQueryClient();
    const { data: items_data } = useQuery({queryKey: ['MedalsEdit'], queryFn: () => personService.medalsList()})
    const [medal, setMedal] = useState<number | null>(null)

    const add_medal = async () => {
        if (medal !== null) {
            try {
                const medals_list = person.medals
    .filter((medal): medal is IMedal => typeof medal !== "number")
    .map(medal => medal.id);

                await personService.update(person.id, {
                    medals: [...medals_list, medal]
                })
                await queryClient.refetchQueries({queryKey: ['person_edit', person.id]})
                toast.success(`Успешно!`);
            } catch (e) {
                toast.error(`Ошибка - ${e}`);
                console.error(e);
            }
        }
    }

    const delete_medal = async (medal_id: number) => {
        if (!Array.isArray(person.medals)) {
            return
        }
        try {
            const medals_list = person.medals.filter(
                (medal): medal is IMedal => typeof medal !== "number" && medal.id !== medal_id
            );
            
            await personService.update(person.id, {
                medals: medals_list
            })
            await queryClient.refetchQueries({queryKey: ['person_edit', person.id]})
            toast.success(`Успешно!`);
        } catch (e) {
            toast.error(`Ошибка - ${e}`);
            console.error(e);
        }
    }
    
    if (!items_data) return <>Loading...</>


    return <div className="flex flex-col md:grid grid-cols-1 md:flex-row bg-white px-5 py-5 rounded-xl gap-2">
        <label className="text-sm font-medium text-left">Медали</label>
        <div className="flex gap-3 mt-6">
            {person.medals.map((medal) => 
                typeof medal === "object" && <div onClick={() => delete_medal(medal.id)} key={medal.id} className="bg-zinc-50 p-4 rounded-xl flex flex-col items-center hover:bg-red-100 cursor-pointer group/item">
                    <img className="h-42" src={medal.image} alt={medal.title}/>
                    <div className="mt-3 font-bold hidden group-hover/item:block">Удалить медаль?</div>
                    <div className="mt-3 font-bold block group-hover/item:hidden">{medal.title}</div>
                </div>
            )}
            <div className="bg-zinc-50 p-4 rounded-xl flex flex-col items-center text-center justify-center space-y-1">
                <SelectUi items={Array.isArray(items_data) ? items_data : []} title='Добавить медаль' func={(item: {title: string, id: number}) => setMedal(item.id)}/>
                <ButtonUi text="Добавить" className="w-full" onClick={add_medal}/>
            </div>
        </div>
    </div>

}