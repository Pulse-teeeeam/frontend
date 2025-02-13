'use client'
import { AUTH_LOGIN, AUTH_REGISTER } from "@/hooks/queries"
import ButtonUI from "@/ui/Button";
import InputUI from "@/ui/Input";
import { useMutation } from "@apollo/client"

export default function PageAuthLogin() {
    const [register, { loading, error, data }] = useMutation(AUTH_REGISTER);

    const click = async () => {
        const {data} = await register({
            variables: {
                email: 'test@test.com',
                password: 'test',
            }
        })
        console.log(data)
    }

    return <div className="flex flex-col mx-auto max-w-md gap-6">
        <h1 className="font-bold text-4xl text-center">Регистрация</h1>
        <div className="space-y-3 flex flex-col items-center">
            <InputUI placeholder="Электронная почта"/>
            <InputUI placeholder="Пароль"/>
            <ButtonUI text="Создать аккаунт" className="w-full" onClick={click}/>
        </div>

        {/* <div className="bg-indigo-600 mx-auto px-4 py-12 rounded-xl max-w-md mt-12 text-center">
            
            
        </div> */}
    </div>;
}
