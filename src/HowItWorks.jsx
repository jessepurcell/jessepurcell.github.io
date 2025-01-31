const HowItWorks = () => {
    return (
        <section id="features" class="py-16 bg-pink-600">
            <div class="max-w-6xl mx-auto text-center">
                <h2 class="text-white text-3xl font-bold">How It Works</h2>
                <div class="mt-8 grid md:grid-cols-3 gap-6">
                    <div class="p-6 bg-white shadow-md rounded-lg">
                        <h3 class="text-xl font-semibold">Step 1</h3>
                        <p class="text-gray-600 mt-2">Sign up anonymously</p>
                    </div>
                    <div class="p-6 bg-white shadow-md rounded-lg">
                        <h3 class="text-xl font-semibold">Step 2</h3>
                        <p class="text-gray-600 mt-2">Send encrypted messages & emails</p>
                    </div>
                    <div class="p-6 bg-white shadow-md rounded-lg">
                        <h3 class="text-xl font-semibold">Step 3</h3>
                        <p class="text-gray-600 mt-2">Stay private & secure</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;