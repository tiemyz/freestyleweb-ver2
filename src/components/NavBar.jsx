import Link from "next/link";

export default function NavBar({ active }) {
    return (
        <nav className="flex justify-between items-center border-b-4 border-red-600 bg-zinc-800 px-4 py-1">

            <div>
                <Link href="/">
                    <img src="/icons/logo.svg" alt="Logo da Freestyle" />
                </Link>
            </div>

            <ul id="links" className="flex items-center gap-14 text-slate-100 font-jura text-2xl font-bold">

                <li>
                    <img src="/icons/estrela.svg" alt="decoração" />
                </li>

                <li>
                    <Link className={`hover:text-red-500 ${active === "calendario" && "text-slate-100"}`} href="/calendario">
                        CALENDÁRIO
                    </Link>
                </li>
                
                <li>
                    <img src="/icons/estrela.svg" alt="decoração" />
                </li>

                <li>
                    <Link className={`hover:text-red-500 ${active === "avisos" && "text-slate-100"}`} href="/avisos">
                        AVISOS
                    </Link>
                </li>

                <li>
                    <img src="/icons/estrela.svg" alt="decoração" />
                </li>
                
                <li>
                    <Link className={`hover:text-red-500 ${active === "awards" && "text-slate-100"}`} href="/awards">
                        AWARDS
                    </Link>
                </li>

                <li>
                    <img src="/icons/estrela.svg" alt="decoração" />
                </li>

                <li>
                    <Link className={`hover:text-red-500 ${active === "produtos" && "text-slate-100"}`} href="/produtos">
                        PRODUTOS
                    </Link>
                </li>
                
            </ul>

            <div className="h-12 w-12 rounded-full overflow-hidden">
                <img src="https://i.pravatar.cc/100" alt="avatar do usuário" />
            </div>
        </nav>
    )
}