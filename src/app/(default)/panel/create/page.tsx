'use client'

import { PersonType, useCreatePersonMutation } from "@/generated/graphql";
import ButtonUI from "@/ui/Button";
import InputUi from "@/ui/Input";
import { useForm } from "react-hook-form";

export default function CreatePage() {
    const [create, { loading, error, data }] = useCreatePersonMutation();
    const { register, handleSubmit, formState: { errors } } = useForm<PersonType>()
    
    const click = async (form_data: PersonType) => {
        console.log(form_data)
        // try {
        //     await create({options: form_data});
            
        // } catch (e) {
        //     console.error(e);
        // }
    }

    return (
        <form onSubmit={handleSubmit(click)}>
            <h1 className="font-bold text-3xl">Создать</h1>
            <InputUi title='Фамилия' func={register('lastName', { required: true })}/>
            <InputUi title='Имя' func={register('firstName', { required: true })}/>
            <InputUi title='Отчество' func={register('middleName')}/>
            <InputUi title='Место рождения' func={register('placeOfBirth', { required: true })}/>
            <InputUi title='Дата рождения' type='date' func={register('dateOfBirth', { required: true })}/>
            <InputUi title='Дата смерти' type='date' func={register('dateOfDeath', { required: true })}/>
            <InputUi title='Место захоронения' func={register('burialPlace', { required: true })}/>
            <InputUi title='Воинское звание' func={register('militaryRank', { required: true })}/>
            <InputUi title='Военный комиссариат' func={register('militaryCommissariat', { required: true })}/>
            <InputUi title='Награды' func={register('awards', { required: true })}/>
            <InputUi title='Факты биографии' func={register('biographyFacts')}/>
            {/* Add fields for conflictsParticipated if needed */}
            <ButtonUI text="Отправить"/>
        </form>
    );
}