import { motion } from "framer-motion";

const Features = () => {
    const features = [
        {
            icon: "🎨",
            title: "AI Creative Generator",
            description: "Generate high-quality ad images and captions in seconds.",
        },
        {
            icon: "🧠",
            title: "Headline Optimizer",
            description: "Craft compelling, scroll-stopping headlines with AI.",
        },
        {
            icon: "📤",
            title: "Export Ad Formats",
            description: "Download creatives optimized for Meta and Google Ads.",
        },
    ];

    return (
        <section className="bg-white py-20 px-6 text-center">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-10">Key Features</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition"
                        >
                            <div className="text-5xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
