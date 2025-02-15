'use client'
import { axiosClassic } from "@/api/interceptors"
import { IPerson } from "@/interfaces/Person.interface"

class PersonService {
    private BASE_URL = '/person/'

    async getDetail(personId: number): Promise<IPerson> {
        return <IPerson>(await axiosClassic.get(`${this.BASE_URL}get/${personId}/`)).data
    }

    async create(person: IPerson): Promise<IPerson> {
        return <IPerson>(await axiosClassic.post(`${this.BASE_URL}create/`, person)).data
    }
}

export default new PersonService()