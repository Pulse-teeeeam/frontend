import { getPerson } from "@/lib/serverRequest"
import PagePersonPost from "./page-post"

export default async function page({params}: {params: {person_id: number}}) {
    const {person_id} = await params
    const person = await getPerson(person_id)
    return <PagePersonPost person={person}/>
}
