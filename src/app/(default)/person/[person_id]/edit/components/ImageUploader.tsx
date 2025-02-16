import { IPerson } from "@/interfaces/Person.interface";
import personService from "@/services/person.service";
import { useQueryClient } from "@tanstack/react-query";
import { IoMdAdd } from "react-icons/io";
import { toast } from "sonner";

export default function ImageUploader({person}: {person: IPerson}) {
    const queryClient = useQueryClient();

    const handleFileChange = async (event: any) => {
        const file = event.target.files[0];
    
        if (file) {
            try {
                await personService.update_file(person.id, 'photo', file);
                await  queryClient.refetchQueries({queryKey: ['person_edit', person.id]})
                toast.success('Успешно обновлено!');
            } catch (e) {
                toast.error(`Ошибка - ${e}`);
                console.error(e);
            }
        }
    };

    const deletePhoto = async () => {
        try {
            await personService.update(person.id, {photo: null})
            await queryClient.refetchQueries({queryKey: ['person_edit', person.id]})
            toast.success('Успешно удалено!');
        } catch (e) {
            toast.error(`Ошибка - ${e}`);
            console.error(e);
        }
    }
    

    return (
        <div className="bg-white rounded-xl px-5 py-5">
            <label className="text-sm font-medium text-left">Главное фото</label>
            {person.photo ? 
                <img src={person.photo} className="w-max h-max hover:invert cursor-pointer rounded-md mt-1" onClick={deletePhoto}/>
            : 
                <label htmlFor="dropzone-file" className="flex flex-col justify-center items-center text-center hover:bg-indigo-100 h-48 mt-6 rounded-xl cursor-pointer border-2 border-dashed border-gray-300">
                    <IoMdAdd className="w-24 h-24 text-gray-400" />
                    <input id="dropzone-file" type="file" className="hidden" accept="image/jpeg, image/png" onChange={handleFileChange} />
                </label>
            }
        </div>
    );
}
