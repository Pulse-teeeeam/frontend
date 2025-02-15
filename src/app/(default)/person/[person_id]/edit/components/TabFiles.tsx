'use client'
import { IoMdAdd } from "react-icons/io";
import SelectUi from "@/ui/Select";
import ImageUploader from "./ImageUploader";
import { IPerson } from "@/interfaces/Person.interface";

export default function TabFiles({person_data}: {person_data: IPerson}) {
    return <>
        <div className="grid grid-cols-[20%_80%] gap-2 my-3">
            <ImageUploader person={person_data}/>
            <div className="flex flex-col md:grid grid-cols-1 md:flex-row bg-white px-5 py-5 rounded-xl gap-2">
                <label className="text-sm font-medium text-left">Медали</label>
                <div className="flex gap-3 mt-6">
                    <div className="bg-zinc-50 p-4 rounded-xl flex flex-col items-center hover:bg-red-100 cursor-pointer group/item">
                        <img className="h-42" src={'http://s3.timeweb.cloud/42d8bf36-047de542-227f-4fc0-ab34-af47e3d49b7e/medals/Medal_for_Merit_in_Combat.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=8NG38OE6JC6G4WQPR5BX%2F20250215%2Fru-1%2Fs3%2Faws4_request&X-Amz-Date=20250215T173541Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=4975afb7bc08eaa16166ef1f65cb053eaa94f694e0b155417d6c1474467aa4e7'} alt={'За боевые заслуги'}/>
                        <div className="mt-3 font-bold hidden group-hover/item:block">Удалить медаль?</div>
                        <div className="mt-3 font-bold block group-hover/item:hidden">За боевые заслуги</div>
                    </div>
                    <div className="bg-zinc-50 p-4 rounded-xl flex flex-col items-center text-center justify-center">
                        <div className="mt-3 font-bold">
                            <SelectUi items={[]} title='Добавить медаль'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col md:grid grid-cols-1 md:flex-row bg-white px-5 py-5 rounded-xl my-3 gap-2">
            <label className="text-sm font-medium text-left">Файлы</label>
            <div className="flex gap-3 mt-6">
                <div className="bg-zinc-50 p-4 rounded-xl flex flex-col items-center hover:bg-red-100 cursor-pointer group/item">
                    <img className="h-42" src={'http://s3.timeweb.cloud/42d8bf36-047de542-227f-4fc0-ab34-af47e3d49b7e/medals/Medal_for_Merit_in_Combat.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=8NG38OE6JC6G4WQPR5BX%2F20250215%2Fru-1%2Fs3%2Faws4_request&X-Amz-Date=20250215T173541Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=4975afb7bc08eaa16166ef1f65cb053eaa94f694e0b155417d6c1474467aa4e7'} alt={'За боевые заслуги'}/>
                    <div className="mt-3 font-bold hidden group-hover/item:block">Удалить медаль?</div>
                    <div className="mt-3 font-bold block group-hover/item:hidden">За боевые заслуги</div>
                </div>
                <div className="bg-zinc-50 p-4 rounded-xl flex flex-col items-center text-center justify-center">
                    <div className="mt-3 font-bold">
                        <SelectUi items={[]} title='Добавить медаль'/>
                    </div>
                </div>
            </div>
        </div>
    </>
}