import PageEditPersonPost from "./page-post";

type tParams = Promise<{ person_id: number }>;

export default async function Challenge(props: { params: tParams }) {
    const { person_id } = await props.params;
    return <PageEditPersonPost person_id={person_id} />;
}
