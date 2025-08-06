import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: { enable: false },
                background: { color: "transparent" },
                particles: {
                    color: { value: "#ffffff" },
                    links: {
                        enable: true,
                        color: "#3b82f6",
                        distance: 150,
                        opacity: 0.2,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 0.6,
                    },
                    size: { value: 2 },
                    number: { value: 60 },
                },
            }}
            className="absolute inset-0 z-0"
        />
    );
};

export default ParticlesBackground;