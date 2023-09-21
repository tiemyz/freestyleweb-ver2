export default function BannerHome() {
    return (
        <main className="min-h-screen bg-black flex items-center justify-center p-12 bg-[url('/img/fundo-banner.png')] bg-contain bg-no-repeat bg-center">
            <div className="flex flex-col justify-center items-center">
                <img src="/img/logo-freestyle.png" alt="Logo da Freestyle" className="w-30 h-auto" />

                <div className="text-white flex justify-center text-3xl font-bruno mt-8 space-x-16">
                    <h2 className="">ENTRETERIMENTO</h2>
                    <h2 className="">ARTES</h2>
                    <h2 className="">PREMIAÇÃO</h2>
                </div>
            </div>
        </main> 
    )
}