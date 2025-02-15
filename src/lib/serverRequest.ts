import { IPerson } from "@/interfaces/Person.interface";

const BASE_SERVER_URL = process.env.BASE_SERVER_URL_API;

export async function getPerson(person_id: number) {
    try {
        const resp = await fetch(`${BASE_SERVER_URL}/person/get/${person_id}/`, {next: {revalidate: 10*60}});

        if (!resp.ok) {
        throw new Error('Ошибка при получении данных');
        }

        return (await resp.json()) as IPerson;
    } catch (error) {
        console.error('getCatalogPage error:', error);
        return {
            id: 1,
            last_name: 'Иванов',
            first_name: 'Иван',
            middle_name: 'Иванович',
            date_of_birth: '1111-11-11',
            place_of_birth: 'asd',
            military_commissariat: 'asd',
            military_rank: 'asd',
            awards: 'asd',
            date_of_death: '1111-11-11',
            burial_place: 'asd',
            biography_facts: 'asd',
            conflicts_participated: [],
            photo: ''
        } as IPerson

    }
}