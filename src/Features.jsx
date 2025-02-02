const Features = () => {
    return (
        <section className="py-16 bg-background">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-200">Why choose us?</h2>
                <div className="m-8 mt-16 grid md:grid-cols-3 gap-12">
                    <div className="p-6 bg-primary shadow-2xl rounded-3xl">
                        <h3 className="text-gray-200 text-xl font-semibold">End-to-End Encryption</h3>
                        <p className="text-gray-300 mt-2">Secure messaging and email</p>
                    </div>
                    <div className="p-6 bg-primary shadow-2xl rounded-3xl">
                        <h3 className="text-gray-200 text-xl font-semibold">Zero-Tracking & No Ads</h3>
                        <p className="text-gray-300 mt-2">No metadata logging</p>
                    </div>
                    <div className="p-6 bg-primary shadow-2xl rounded-3xl">
                        <h3 className="text-gray-200 text-xl font-semibold">Self-Destructing Messages</h3>
                        <p className="text-gray-300 mt-2">Optional timed deletion</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;