'use client'
import ButtonUI from "@/ui/Button";
import InputUI from "@/ui/Input";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type FormValues = {
    email: string
    password: string
}

export default function PageAuthLogin() {
    const [login, { loading, error, data }] = useAuthLoginMutation();
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>()
  
    const click = async (form_data: FormValues) => {
        try {
            const {data} = await login({
                variables: {
                    username: form_data.email,
                    password: form_data.password,
                }
            });
            
            if (typeof window !== 'undefined' && data?.tokenAuth?.token) {
                localStorage.setItem('token', data.tokenAuth.token);
                window.location.href = '/';
            }

        } catch (error) {
            if (error instanceof ApolloError) {
                toast.error(error.message)
            } else {
                toast.error("Произошла ошибка");
                console.log(error);
            }
        }
    }

    return <form className="flex flex-col mx-auto max-w-md gap-6" onSubmit={handleSubmit(click)}>
        <h1 className="font-bold text-4xl text-center">Авторизация</h1>
        <div className="space-y-3 flex flex-col items-center">
            <InputUI placeholder="Электронная почта" func={register('email', {})} type="email"/>
            <InputUI placeholder="Пароль" func={register('password')} type="password"/>
            <ButtonUI text="Войти" className="w-full"/>
            <div>Нет аккаунта? <Link className="font-bold text-indigo-600" href={'/auth/registration'}>Создать</Link></div>
        </div>
    </form>;
}
