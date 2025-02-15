import ButtonUI from "@/ui/Button";
import InputUI from "@/ui/Input";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return <div className="space-y-8">
    <div className="h-[60svh] flex flex-col justify-center">
      <div className="flex justify-center md:justify-between items-center">
        <div className="block md:hidden absolute -z-10">
          <Image src="/banner.jpg" alt='' className="h-screen object-cover" width={800} height={800}/>
        </div>
        <div className="space-y-3 text-center md:text-left bg-white/60 backdrop-blur-2xl p-6 rounded-2xl md:bg-zinc-100">
          <h1 className="font-bold text-4xl text-black">Цифровая книга памяти<br/>Оренбургской области</h1>
          <h3 className="text-xl text-black/80">Никто не забыт, ничто не забыто</h3>
          <ButtonUI text="Открыть книгу"/>
        </div>
        <div className="hidden md:block">
          <Image src="/banner.jpg" alt='' className="rounded-2xl" width={600} height={600}/>
        </div>
      </div>
    </div>
    <div>
      <Link href={'/map'} className="relative group/item text-center">
        <h3 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-black/30 p-3 rounded-xl backdrop-blur-2xl font-bold text-4xl z-30">Перейти на интерактивную карту</h3>
        <img src="https://oren.ru/wp-content/uploads/2017/07/Screenshot_2-2.jpg" alt="" className="w-full object-cover h-[250px] rounded-2xl duration-150 group-hover/item:blur-xs active:scale-90"/>
      </Link>
    </div>
    <div className="mx-auto max-w-screen-xl bg-white text-black px-8 py-8 rounded-xl grid md:grid-cols-[35%_65%] ring-1 ring-inset ring-zinc-200" id="form-find">
      <h3 className="text-4xl font-medium mb-6 text-center md:text-left md:mb-0">Найти своего<br/>героя</h3>
      <div className="space-y-3">
        <InputUI title="Имя"/>
        <InputUI title="Фамилия"/>
        <ButtonUI text="Поиск" className="mt-3 w-full"/>
      </div>
    </div>
    <div className="font-medium text-center text-3xl">
      В книге запечатлено уже более <span className="font-bold bg-white py-1 px-2 rounded-xl ring-1 ring-inset ring-zinc-200">10</span> бойцов
    </div>
    </div>
}