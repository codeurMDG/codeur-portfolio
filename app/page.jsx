import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"

// Components : 
import Social from "@/components/icons/Social"
import Photo from "@/components/photos/Photo"
import Stats from "@/components/layout/Stats"

const Home = () => {
    return (
        <section className="h-full">
            <div className="container mx-auto h-full">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                    {/* Text */}
                    <div className="text-center xl:text-left order-2 xl:order-none">
                        <div className="text-6xl font-bold mt-4 mb-2">Bienvenue sur, </div>
                        <h1 className="h1 mb-6">
                            <span className="text-accent">Codeur MDG</span>
                        </h1>
                        <p className="max-w-[500px] mb-9 text-white/90">Développeur web avec une expertise approfondie, mon objectif est de fournir des solutions sur mesure qui répondent aux besoins spécifiques de chaque client, tout en garantissant une expérience utilisateur optimale.</p>

                        {/* Button and social icon */}
                        <div className="flex flex-col xl:flex-row items-center gap-8">
                            <div className="mb-8 xl:mb-0">
                                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex items-center justify-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
                            </div>
                        </div>
                    </div>

                    {/* Photo */}
                    <div className="order-1 xl:order-none mb-8 xl:mb-0">
                        <Photo />
                    </div>
                </div>
            </div>

            <Stats/>
        </section>
    )
}

export default Home