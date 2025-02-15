'use client'

import { IPerson } from "@/interfaces/Person.interface";
import personService from "@/services/person.service";
import ButtonUI from "@/ui/Button";
import InputUi from "@/ui/Input";
import { useForm } from "react-hook-form";

export default function CreatePage() {
    const { register, handleSubmit, formState: { errors } } = useForm<IPerson>()
    
    const click = async (form_data: IPerson) => {
        console.log(form_data)
        try {
            await personService.create({conflicts_participated: [], ...form_data})
            
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <form onSubmit={handleSubmit(click)}>
            <h1 className="font-bold text-3xl">Создать</h1>
            <InputUi title='Фамилия' func={register('last_name', { required: true })}/>
            <InputUi title='Имя' func={register('first_name', { required: true })}/>
            <InputUi title='Отчество' func={register('middle_name')}/>
            <InputUi title='Место рождения' func={register('place_of_birth', { required: true })}/>
            <InputUi title='Дата рождения' type='date' func={register('date_of_birth', { required: true })}/>
            <InputUi title='Дата смерти' type='date' func={register('date_of_death', { required: true })}/>
            <InputUi title='Место захоронения' func={register('burial_place', { required: true })}/>
            <InputUi title='Воинское звание' func={register('military_rank', { required: true })}/>
            <InputUi title='Военный комиссариат' func={register('military_commissariat', { required: true })}/>
            <InputUi title='Награды' func={register('awards', { required: true })}/>
            <InputUi title='Факты биографии' func={register('biography_facts')}/>
            <ButtonUI text="Отправить"/>
        </form>
    );
}