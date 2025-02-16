import ButtonUi from "@/ui/Button";

export default function PageWait() {
    return <div className="font-bold text-center text-2xl mt-32 flex flex-col justify-center items-center">
        Ожидайте принятия заявки администратором
        <ButtonUi text="Попробовать ещё раз" href={'/panel/auth/login'} className="mt-3"/>
    </div>
}