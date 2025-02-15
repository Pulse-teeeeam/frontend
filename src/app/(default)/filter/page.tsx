import SelectForm from "./components/SelectForm";

export default function FilterPage({}) {
    return <div className="mt-12 p-1">
        <div>
            <h1 className="font-bold text-3xl">Фильтр</h1>
            <div>Заполнять все поля необязательно</div>
        </div>
        <SelectForm/>
        <div className="bg-white px-3 py-5 my-6 rounded-xl">
            
        </div>
    </div>
}