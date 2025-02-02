import Lock from "remixicon-react/LockPasswordLineIcon";
import Messenger from "remixicon-react/MessageLineIcon";
import Safe from "remixicon-react/SafeLineIcon";

const HowItWorks = () => {
    return (
        <section id="features" className="py-16 bg-background">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-gray-200 text-3xl font-bold">How does it work?</h2>
                <h3 className="mt-16 text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis temporibus minus, magni voluptate accusamus doloremque consequuntur itaque doloribus? Sint officiis similique veritatis cum magni voluptas quasi voluptatem ducimus tempora assumenda?</h3>
                <div className="mt-8 grid md:grid-cols-3 gap-6">
                    <div className="p-6">
                        <div className="bg-primary rounded-4xl p-4 w-min mx-auto">
                            <Lock className="place-self-center m-4 size-12"/>
                        </div>
                        <h3 className="text-gray-200 text-xl font-semibold pt-8">Step 1: Sign Up Securely</h3>
                        <p className="text-gray-300 mt-2">Sign up with minimal information—just your email. No personal data required.</p>
                    </div>
                    <div className="p-6">
                        <div className="bg-primary rounded-4xl p-4 w-min mx-auto">
                            <Messenger className="place-self-center m-4 size-12" />
                        </div>
                        <h3 className="text-gray-200 text-xl font-semibold pt-8">Step 2: Encrypt & Send</h3>
                        <p className="text-gray-300 mt-2">Send emails and messages with end-to-end encryption by default. Your data never leaves your control.</p>
                    </div>
                    <div className="p-6">
                        <div className="bg-primary rounded-4xl p-4 w-min mx-auto">
                            <Safe className="place-self-center m-4 size-12"/>
                        </div>
                        <h3 className="text-gray-200 text-xl font-semibold pt-8">Step 3: Receive Privately</h3>
                        <p className="text-gray-300 mt-2">Your recipients get messages instantly, fully encrypted. Only you and the recipient can read them.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;