'use client'
import { axiosClassic } from "@/api/interceptors"
import { IArmedConflictsList, IMedal, IPerson } from "@/interfaces/Person.interface"

class PersonService {
    private BASE_URL = '/person/'

    async getDetail(personId: number): Promise<IPerson> {
        return <IPerson>(await axiosClassic.get(`${this.BASE_URL}get/${personId}/`)).data
    }

    async create(person: IPerson): Promise<IPerson> {
        return <IPerson>(await axiosClassic.post(`${this.BASE_URL}create/`, person)).data
    }

    async update(personId: number, person: Partial<IPerson>): Promise<IPerson> {
        return <IPerson>(await axiosClassic.patch(`${this.BASE_URL}update/${personId}/`, person)).data
    }

    async update_file(personId: number, name: string, file: File): Promise<IPerson> {
        var formData = new FormData();
        formData.append(name, file);
        return <IPerson>(await axiosClassic.patch(`${this.BASE_URL}update/${personId}/`, formData, {headers: {
            'Content-Type': 'multipart/form-data'
        }})).data
    }

    async filterList(data: any): Promise<IPerson[]> {
        return <IPerson[]>(await axiosClassic.post(`${this.BASE_URL}find/`, data)).data
    }

    async armedConflictsList(): Promise<IArmedConflictsList> {
        return <IArmedConflictsList>(await axiosClassic.get(`${this.BASE_URL}armed_conflicts_list/`)).data
    }

    async medalsList(): Promise<IMedal> {
        return <IMedal>(await axiosClassic.get(`${this.BASE_URL}medals_list/`)).data
    }
}

export default new PersonService()