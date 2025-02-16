import { IPerson } from "@/interfaces/Person.interface";

const BASE_SERVER_URL = process.env.BASE_SERVER_URL_API;

export async function getPerson(person_id: number) {
    const resp = await fetch(`${BASE_SERVER_URL}/person/get/${person_id}/`, {next: {revalidate: 10*60}});

    if (!resp.ok) {
            throw new Error('Ошибка при получении данных');
    }

    return (await resp.json()) as IPerson;
}