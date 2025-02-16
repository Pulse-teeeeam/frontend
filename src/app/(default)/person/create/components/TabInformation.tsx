'use client'
import { IPerson } from "@/interfaces/Person.interface";
import personService from "@/services/person.service";
import ButtonUi from "@/ui/Button";
import InputUi from "@/ui/Input";
import SelectUi from "@/ui/Select";
import { Textarea } from "@headlessui/react";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function TabInformation() {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<IPerson>();
    const { data: items_data } = useQuery({queryKey: ['TabInformation'], queryFn: () => personService.armedConflictsList()})
    
    const onSubmit = async (person: IPerson) => {
        console.log("Form submitted:", person);
        try {
            const data = await personService.create(person)
            if (typeof window !== 'undefined' && data?.id) {
                window.location.href = `/person/${data.id}`;
            } 
        } catch (e) {
            toast.error(`Ошибка - ${e}`)
            console.log(e)
        }
    };

    if (!items_data) return <>Loading</>
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col md:grid grid-cols-3 md:flex-row bg-white px-5 py-5 rounded-xl my-3 gap-5">
                <InputUi placeholder="Иванов" title="Фамилия" func={register('last_name', {required: true})} description={errors.last_name && <span className="text-red-500">Обязательно к заполнению</span>}/>
                <InputUi placeholder="Иван" title="Имя" func={register('first_name', {required: true})} description={errors.first_name && <span className="text-red-500">Обязательно к заполнению</span>}/>
                <InputUi placeholder="Отчество (Не обязательно)" title="Отчество" func={register('middle_name')} />
            </div>
            <div className="flex flex-col md:grid grid-cols-3 md:flex-row bg-white px-5 py-5 rounded-xl my-3 gap-5">
                <InputUi placeholder="Ввод..." title="Наименование военного комиссариата" func={register('military_commissariat', {required: true})} description={errors.military_commissariat && <span className="text-red-500">Обязательно к заполнению</span>}/>
                <InputUi placeholder="Ввод..." title="Воинское звание" func={register('military_rank', {required: true})} description={errors.military_rank && <span className="text-red-500">Обязательно к заполнению</span>}/>
                <SelectUi items={Array.isArray(items_data) ? items_data : []} title='Военный конфликт' item={null} func={(item: {title: string, id: number}) => {if (item) {setValue('armed_conflict', item.id)}}}/>
            </div>
            <div className="flex flex-col md:grid grid-cols-2 md:flex-row bg-white px-5 py-5 rounded-xl my-3 gap-5">
                <InputUi placeholder="Ввод..." title="Дата рождения" func={register('date_of_birth', {required: true})} type="date" description={errors.date_of_birth && <span className="text-red-500">Обязательно к заполнению</span>}/>
                <InputUi placeholder="Ввод..." title="Место рождения" func={register('place_of_birth', {required: true})} description={errors.place_of_birth && <span className="text-red-500">Обязательно к заполнению</span>}/>
                <InputUi placeholder="Ввод..." title="Дата смерти" func={register('date_of_death', {required: true})} type="date" description={errors.date_of_death && <span className="text-red-500">Обязательно к заполнению</span>}/>
                <InputUi placeholder="Ввод..." title="Место захоронения" func={register('burial_place', {required: true})} description={errors.burial_place && <span className="text-red-500">Обязательно к заполнению</span>}/>                
            </div>
            <div className="flex flex-col bg-white px-5 py-5 rounded-xl my-3 gap-2">
                <label className="text-sm font-medium text-left">Биография</label>
                <Textarea 
                    {...register('biography')} 
                    placeholder="Напишите информацию о биографии" 
                    className="block appearance-none rounded-lg border-none px-4 py-2.5 transition focus:outline-none ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-black bg-zinc-50 focus:bg-zinc-100 ring-zinc-300 hover:ring-zinc-400 placeholder:text-zinc-600"
                />
            </div>
            <ButtonUi text="Создать" className="w-full" type="submit"/>
        </form>
    );
}
