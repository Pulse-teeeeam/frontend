export default function BookPage() {
    return <div className="relative h-[900px] w-[600px] bg-black" id='capture'>
    <img src={'/sheets/sheet-1.jpg'} className="w-full h-full object-cover" />
    <div className="absolute top-0 left-0 z-20 text-black p-6">
        <div className="flex">
            <img src="https://hobby-group.ru/sites/default/files/yuio10.jpg" className="max-w-[180px]"/>
            <div className="ml-3">
                <h1 className="font-bold text-5xl font-caveat">Карнаух Валерий Петрович</h1>
                <div className="font-bold text-4xl font-caveat">21.06.1963 — 24.11.2023                        </div>
            </div>
        </div>
    </div>
</div>

    return <div className="flex justify-center gap-3 items-center">
        <div className="relative h-[900px] w-[600px] bg-black my-12" id='capture'>
            <img src={'/sheets/sheet-1.jpg'} className="w-full h-full object-cover" />
            <div className="absolute top-0 left-0 z-20 text-black p-6">
                <div className="flex">
                    <img src="https://hobby-group.ru/sites/default/files/yuio10.jpg" className="max-w-[180px]"/>
                    <div className="ml-3">
                        <h1 className="font-bold text-5xl font-caveat">Карнаух Валерий Петрович</h1>
                        <div className="font-bold text-4xl font-caveat">21.06.1963 — 24.11.2023                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="h-[900px] w-[600px] bg-black my-12">
            <img src={'/sheets/sheet-2.jpg'} className="w-full h-full"/>
        </div>
    </div>
}