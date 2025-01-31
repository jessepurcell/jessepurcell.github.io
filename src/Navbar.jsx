const Navbar = () => {
    return (
        <nav class="bg-white shadow-md">
            <div class="max-w-6xl mx-auto px-4">
                <div class="flex justify-between items-center py-4">
                    <a href="#" class="text-2xl font-bold text-pink-600">Alphabeta</a>
                    <div class="space-x-4 hidden md:flex">
                        <a href="#" class="text-gray-600 hover:text-blue-600 py-2 px-4">Features</a>
                        <a href="#" class="text-gray-600 hover:text-blue-600 py-2 px-4">Pricing</a>
                        <a href="#" class="text-gray-600 hover:text-blue-600 py-2 px-4">FAQ</a>
                        <a href="#" class="text-gray-600 hover:text-blue-600 py-2 px-4">Support</a>
                        <a href="#" class="bg-pink-600 hover:bg-pink-500 text-white hover:text-blue-600 font-bold py-2 px-4 rounded">Sign Up</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;