export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return <div className="grid grid-cols-2">
    <div className="flex flex-col justify-center">{children}</div>
    <div>
      <img className="rounded-l-4xl" src="https://cdn.werkel.ru/images/catalog/zaglushka-serebryanyy-riflenyy-w1159209-a051359_0001.jpg"/>
    </div>
    </div>
  }
  