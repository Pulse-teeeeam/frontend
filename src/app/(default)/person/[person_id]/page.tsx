import ButtonUI from "@/ui/Button";

export default function PagePerson() {
    return <div className="mt-10 space-y-6">
        <div className="flex items-center">
            <img src="https://hobby-group.ru/sites/default/files/yuio10.jpg" className="w-[150px]"/>
            <div className="ml-3">
                <h1 className="font-bold text-3xl">Карнаух Валерий Петрович</h1>
                <div className="font-medium text-xl">21.06.1963 — 24.11.2023</div>
                <div className="mt-3 flex space-x-1">
                    <ButtonUI text="Скачать"/>
                    <ButtonUI text="Скачать"/>
                    <ButtonUI text="Поделиться"/>
                </div>
            </div>
        </div>
        <div className="p-5 bg-white rounded-xl ring-1 ring-inset ring-zinc-200">
            <h3 className="font-bold text-2xl">Медали</h3>
            <div className="flex gap-3 mt-6">
                <div className="bg-zinc-50 p-4 rounded-xl flex flex-col items-center">
                    <img className="h-42" src="http://9may-priz.ru/images/nagrada-vov/3.png"/>
                    <div className="mt-3 font-bold">Золотая Звезда</div>
                </div>
                <div className="bg-zinc-50 p-4 rounded-xl flex flex-col items-center">
                    <img className="h-42" src="http://9may-priz.ru/images/nagrada-vov/5.png"/>
                    <div className="mt-3 font-bold">Золотая Звезда</div>
                </div>
                <div className="bg-zinc-50 p-4 rounded-xl flex flex-col items-center">
                    <img className="h-42" src="http://9may-priz.ru/images/nagrada-vov/11.png"/>
                    <div className="mt-3 font-bold">Золотая Звезда</div>
                </div>
                <div className="bg-zinc-50 p-4 rounded-xl flex flex-col items-center">
                    <img className="h-42" src="http://9may-priz.ru/images/nagrada-vov/12.png"/>
                    <div className="mt-3 font-bold">Золотая Звезда</div>
                </div>
            </div>
        </div>
        
    </div>
}