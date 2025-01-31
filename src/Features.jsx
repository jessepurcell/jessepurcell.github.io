const Features = () => {
    return (
        <section id="features" class="py-16 bg-gray-100">
            <div class="max-w-6xl mx-auto text-center">
                <h2 class="text-3xl font-bold">Why choose us?</h2>
                <div class="mt-8 grid md:grid-cols-3 gap-6">
                    <div class="p-6 bg-white shadow-md rounded-lg">
                        <h3 class="text-xl font-semibold">End-to-End Encryption</h3>
                        <p class="text-gray-600 mt-2">Secure messaging and email</p>
                    </div>
                    <div class="p-6 bg-white shadow-md rounded-lg">
                        <h3 class="text-xl font-semibold">Zero-Tracking & No Ads</h3>
                        <p class="text-gray-600 mt-2">No metadata logging</p>
                    </div>
                    <div class="p-6 bg-white shadow-md rounded-lg">
                        <h3 class="text-xl font-semibold">Self-Destructing Messages</h3>
                        <p class="text-gray-600 mt-2">Optional timed deletion</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;