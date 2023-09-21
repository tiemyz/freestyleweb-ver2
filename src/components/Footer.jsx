export default function Footer() {
    return (
        <footer className="flex flex-col items-center text-center justify-center border-t-4 border-red-600 bg-zinc-800 p-6 h-40 text-white font-bruno gap-y-6">

            <div className="space-x-10">
                <a href="#" className="hover:text-red-500">HELP CENTER</a>
                <a href="#" className="hover:text-red-500">INSTAGRAM</a>
                <a href="#" className="hover:text-red-500">FACEBOOK</a>
                <a href="#" className="hover:text-red-500">TWITTER</a>
                <a href="#" className="hover:text-red-500">TIKTOK</a>
            </div>

            <div className="">
                <p className="mb-2">2023 Freestyle Entertaiment
                License to Freestyle Entertaiment</p>

                <p>Warning: All Rights Reserved Unauthorized duplication is a violation of applicable laws</p>
            </div>
        </footer>
    )
}