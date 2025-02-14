'use client'
import ButtonUI from "@/ui/Button";
import InputUI from "@/ui/Input";
import { ApolloError } from "@apollo/client"
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useAuthRegisterMutation } from "@/generated/graphql";


type FormValues = {
    email: string
    password: string
}

export default function PageAuthLogin() {
    const [register_req, { loading, error, data }] = useAuthRegisterMutation();
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>()
  
    const click = async (form_data: FormValues) => {
        try {
            const {data} = await register_req({
                variables: {
                    email: form_data.email,
                    password: form_data.password,
                }
            });

            console.log(data)
            
            if (typeof window !== 'undefined' && data?.registerUser?.token) {
                localStorage.setItem('token', data?.registerUser?.token);
                window.location.href = '/';
            }

        } catch (error) {
            console.log(error)
            if (error instanceof ApolloError) {
                toast.error(error.message)
            } else {
                toast.error("Произошла ошибка");
                console.log(error);
            }
        }
    }

    return <form className="flex flex-col mx-auto max-w-md gap-6" onSubmit={handleSubmit(click)}>
        <h1 className="font-bold text-4xl text-center">Создать аккаунт</h1>
        <div className="space-y-3 flex flex-col items-center">
            <InputUI placeholder="Электронная почта" func={register('email', {})} type="email"/>
            <InputUI placeholder="Пароль" func={register('password')} type="password"/>
            <ButtonUI text="Зарегистрироваться" className="w-full"/>
            <div>Уже есть аккаунт? <Link className="font-bold text-indigo-600" href={'/auth/login'}>Авторизоваться</Link></div>
        </div>
    </form>;
}
