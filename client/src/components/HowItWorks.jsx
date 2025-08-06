import { motion } from "framer-motion";

const HowItWorks = () => {
    const steps = [
        {
            icon: "📝",
            title: "Step 1: Input",
            description: "Enter your product or service details into Growly."
        },
        {
            icon: "🤖",
            title: "Step 2: AI Magic",
            description: "Our AI instantly generates images, headlines, and ad text."
        },
        {
            icon: "🚀",
            title: "Step 3: Output",
            description: "Export optimized ad creatives for Meta and Google Ads."
        }
    ];

    return (
        <section className="bg-gray-100 py-20 px-6 text-center">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-10">How It Works</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
                        >
                            <div className="text-5xl mb-4">{step.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
