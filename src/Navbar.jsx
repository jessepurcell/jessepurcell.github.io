const Navbar = () => {
    return (
        <nav className="bg-primary shadow-md">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <a href="#" className="text-2xl font-extrabold text-gray-200">Alphabeta</a>
                    <div className="space-x-4 hidden md:flex">
                        <a href="#" className="text-gray-200 font-bold hover:text-blue-600 py-2 px-4">Features</a>
                        <a href="#" className="text-gray-200 font-bold hover:text-blue-600 py-2 px-4">Pricing</a>
                        <a href="#" className="text-gray-200 font-bold hover:text-blue-600 py-2 px-4">FAQ</a>
                        <a href="#" className="text-gray-200 font-bold hover:text-blue-600 py-2 px-4">Support</a>
                        <a href="#" className="bg-accent hover:text-blue-600 text-gray-800 font-bold py-2 px-4 rounded-3xl">Sign Up</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;