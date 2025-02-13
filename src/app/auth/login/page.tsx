'use client'
import { AUTH_LOGIN } from "@/hooks/queries"
import ButtonUI from "@/ui/Button";
import InputUI from "@/ui/Input";
import { ApolloError, useMutation } from "@apollo/client"
import { toast } from "sonner";

export default function PageAuthLogin() {
    const [login, { loading, error, data }] = useMutation(AUTH_LOGIN);
  
    const click = async () => {
        try {
            const {data} = await login({
                variables: {
                    username: 'test',
                    password: 'test',
                }
            });
            
            if (data.tokenAuth.token) {
                localStorage.setItem('token', data.tokenAuth.token);
                window.location.href = '/';
            }

        } catch (error) {
            if (error instanceof ApolloError) {
                toast.error("Неверный логин или пароль");
            } else {
                toast.error("Произошла ошибка");
                console.log(error);
            }
        }
    }

    return <div className="flex flex-col mx-auto max-w-md gap-6">
        <h1 className="font-bold text-4xl text-center">Авторизация</h1>
        <div className="space-y-3 flex flex-col items-center">
            <InputUI placeholder="Электронная почта"/>
            <InputUI placeholder="Пароль"/>
            <ButtonUI text="Войти" className="w-full" onClick={click}/>
        </div>
    </div>;
}
