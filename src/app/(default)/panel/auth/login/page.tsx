'use client'
import authService from "@/services/auth.service";
import ButtonUI from "@/ui/Button";
import InputUI from "@/ui/Input";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type FormValues = {
    username: string
    password: string
}

export default function PageAuthLogin() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>()
  
    const click = async (form_data: FormValues) => {
        try {
            const data = await authService.login(form_data.username, form_data.password);
            
            if (typeof window !== 'undefined' && data?.token) {
                localStorage.setItem('token', data.token);
                window.location.href = '/';
            } else if (data?.detail) {
                toast.error(data.detail);
            }
        } catch (error) {
            toast.error("Произошла ошибка");
            console.log(error);
        }
    }

    return <form className="flex flex-col mx-auto max-w-md gap-6" onSubmit={handleSubmit(click)}>
        <h1 className="font-bold text-4xl text-center">Авторизация персонала</h1>
        <div className="space-y-3 flex flex-col items-center">
            <InputUI placeholder="Юзернейм" func={register('username', {})}/>
            <InputUI placeholder="Пароль" func={register('password')} type="password"/>
            <ButtonUI text="Войти"/>
        </div>
    </form>;
}
