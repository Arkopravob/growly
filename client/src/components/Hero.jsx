import { motion } from 'framer-motion';
import ParticlesBackground from './ParticlesBackground';


const Hero = () => {
    return (
        <section className="relative bg-black text-white py-32 px-6 overflow-hidden">
            {/* Background Particles */}
            <ParticlesBackground />

            <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-14">

                {/* Glass Text Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="md:w-1/2 bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl space-y-6 text-center md:text-left"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                        <span className="text-blue-500">Create AI Ads</span> in Seconds
                    </h1>
                    <p className="text-gray-200 text-lg">
                        No copywriting or design needed. Enter your product and let <span className="text-white font-semibold">Growly</span> do the rest.
                    </p>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#lead"
                        className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl text-lg font-semibold shadow-lg transition"
                    >
                        Book Free Demo
                    </motion.a>
                </motion.div>

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="md:w-1/2"
                >
                    <img
                        src={"/images/hero-ai.png"}
                        alt="Growly Illustration"
                        className="w-full max-w-md mx-auto rounded-2xl shadow-2xl drop-shadow-xl hover:scale-105 transition duration-300"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;




