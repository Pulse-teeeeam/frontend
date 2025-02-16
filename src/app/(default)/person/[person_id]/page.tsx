import { getPerson } from "@/lib/serverRequest"
import PagePersonPost from "./page-post"

type tParams = Promise<{ person_id: number }>;

export default async function Challenge(props: { params: tParams }) {
    const { person_id } = await props.params;
    let person;
    try {
        person = await getPerson(person_id);
    } catch {
        person = undefined;
    }
    return <PagePersonPost person={person} person_id={person_id}/>
}
