import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Link from "next/link";

export default function Awards() {
  return (
    <>
    <NavBar/>
        <main className="min-h-screen bg-black p-12 font-jura font-bold space-y-8">

            <div className="flex justify-center">
                <h1 className="text-white text-8xl">AWARDS</h1>
            </div>

            <div className="flex items-center justify-center space-x-10">
                
                <Link href="/">
                    <div className="bg-red-600 inline-flex flex-col justify-center items-center h-[350px] w-[300px] rounded">
                        <img src="/img/podio.png" className="w-24 h-auto"></img>
                        <h2 className="text-3xl">Visão Geral</h2>

                    </div>
                </Link>

                <Link href="/">
                    <div className="bg-red-600 inline-flex flex-col justify-center text-center items-center h-[350px] w-[300px] rounded">
                        <img src="/img/progresso.png" className="w-24 h-auto"></img>
                        <h2 className="text-3xl">Meu progresso</h2>
                    </div>
                </Link>

                <Link href="/">
                    <div className="bg-red-600 inline-flex flex-col justify-center text-center items-center h-[350px] w-[300px] rounded">
                        <img src="/img/premio.png" className="w-24 h-auto"></img>
                        <h2 className="text-3xl">Histórico</h2>   
                    </div>
                </Link>
            </div>

        </main>
    <Footer/>
    </>
  )
}