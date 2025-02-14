import Footer from "./components/Footer";
import Header from "./components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="md:grid min-h-screen grid-rows-[auto_1fr_auto] mx-auto max-w-screen-xl">
        <Header/>
        <main className="mb-12">
            {children}
        </main>
        <Footer/>
    </div>
  );
}
