import { getPerson } from "@/lib/serverRequest"
import PagePersonPost from "./page-post"

export default async function page({params}: {params: {person_id: number}}) {
    const {person_id} = await params
    let person;
    try {
        person = await getPerson(person_id);
    } catch {
        person = undefined;
    }
    return <PagePersonPost person={person} person_id={person_id}/>
}
