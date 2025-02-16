'use client'
import { motion, useAnimation } from "framer-motion";
import { IoCloseOutline } from "react-icons/io5";
import ButtonUI from "@/ui/Button"
import InputUi from "@/ui/Input"
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import personService from "@/services/person.service";
import { IPerson } from "@/interfaces/Person.interface";
import { useQuery } from "@tanstack/react-query";
import SelectUi from "@/ui/Select";

type FormValues = {
    last_name: string
    first_name: string
    middle_name: string

    date_of_birth: string; // ISO 8601 date format (YYYY-MM-DD)
    date_of_death: string; // ISO 8601 date format (YYYY-MM-DD)

    place_of_birth: string;
    burial_place: string;

    military_rank: string;
    military_commissariat: string;

}

export default function SelectForm({personList, setPersonList}: {personList: IPerson[], setPersonList: any}) {
    const controls = useAnimation();
    const [openFilter, setOpenFilter] = useState(true)
    const { register, handleSubmit, reset, setValue, getValues } = useForm<FormValues>()
    const [loading, setLoading] = useState(false)
    const { data: items_data } = useQuery({queryKey: ['TabInformation'], queryFn: () => personService.armedConflictsList()})

    useEffect(() => {
        controls.start({ height: "auto", opacity: 1 });
        controls.start({ height: 0, opacity: 0 });
        controls.start({ height: "auto", opacity: 1 });
    }, [openFilter]);

    const click = async (data: FormValues) => {
        console.log(data)
        setLoading(true)
        const result = await personService.filterList(data)
        setPersonList(result)
        setLoading(false)
    }

    useEffect(() => {
        click(getValues())
    }, [])

    return <form onSubmit={handleSubmit(click)}>
    <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.5 }}

        className="overflow-hidden"
    >
        {openFilter ? 
            <div className="flex flex-col md:grid grid-cols-3 md:flex-row bg-white px-5 py-5 rounded-xl my-3 gap-5">
                <InputUi placeholder="Иванов" title="Фамилия" func={register('last_name')}/>
                <InputUi placeholder="Иванов" title="Имя" func={register('first_name')}/>
                <InputUi placeholder="Иванов" title="Отчество" func={register('middle_name')}/>
            </div>
        :
            <div className="grid md:grid-cols-2 gap-3 my-3">
                <div className="space-y-3 bg-white px-5 py-5 rounded-xl ring-1 ring-inset ring-zinc-200">
                    <InputUi placeholder="Иванов" title="Имя" func={register('first_name')}/>
                    <InputUi placeholder="Иванов" title="Фамилия" func={register('last_name')}/>
                    <InputUi placeholder="Иванов" title="Отчество" func={register('middle_name')}/>
                </div>
                <div className="space-y-3 bg-white px-5 py-5 rounded-xl ring-1 ring-inset ring-zinc-200">
                    <InputUi title='Дата рождения' type='date' func={register('date_of_birth')}/>
                    <InputUi title='Дата смерти' type='date' func={register('date_of_death')}/>
                    <SelectUi items={items_data} title='Военный конфликт' item={null} func={(item: number) => {if (item) {setValue('armed_conflict', item.id)}}}/>
                </div>
                <div className="space-y-3 bg-white px-5 py-5 rounded-xl ring-1 ring-inset ring-zinc-200">
                    <InputUi placeholder="Введите..." title="Место рождения" func={register('place_of_birth')}/>
                    <InputUi placeholder="Введите..." title="Место захоронения" func={register('burial_place')}/>
                </div>
                <div className="space-y-3 bg-white px-5 py-5 rounded-xl ring-1 ring-inset ring-zinc-200">
                    <InputUi placeholder="Введите..." title="Воинское звание" func={register('military_rank')}/>
                    <InputUi placeholder="Введите..." title="Военный комиссариат" func={register('military_commissariat')}/>
                </div>
            </div> 
        }
    </motion.div>
    <div className="flex flex-col gap-1 md:flex-row justify-between">
        <div className="flex gap-1 w-full md:w-100">
            <ButtonUI text={openFilter ? "Все фильтры" : "Скрыть фильтры"} className="w-full" theme="outline" onClick={() => setOpenFilter(!openFilter)}/>
            <ButtonUI text="Сбросить" className="w-full" theme="outline" Icon={<IoCloseOutline className="w-5 h-5" />} onClick={() => reset()}/>
        </div>
        <div>
            {loading ? 
                <ButtonUI text={`Загрузка...`} loading={true} className="w-full"/>
            :
                <ButtonUI text={`Найдено ~ ${personList.length} человек`} className="w-full"/>
            }
        </div>
    </div>
</form>
    
}