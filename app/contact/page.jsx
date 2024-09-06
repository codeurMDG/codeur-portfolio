"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectGroup, SelectContent, SelectLabel, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion } from "framer-motion"

import info from "@/components/path/info"




const Contact = () => {
	return (
		<motion.section
			initial={{opacity: 0}}
			animate={{
				opacity: 1,
				transition: {
					delay: 2.4,
					duration: 0.4,
					ease: "easeIn"
				}
			}}
			className="py-6"
		>
			<div className="container mx-auto">
				<div className="flex flex-col xl:flex-row gap-[30px]">
					{/* form */}
					<div className="xl:w-[54%] order-2 xl:order-none">
						<form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
							<h3 className="text-4xl text-accent">Travaillons ensemble</h3>
							<p className="text-white/60">Pour collaborer, veuillez remplir le formulaire ci-dessous ou nous contacter par e-mail.</p>
							{/* input */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<Input type="firstname" placeholder="Nom"/>
								<Input type="lastname" placeholder="Prénom"/>
								<Input type="email" placeholder="Adresse e-mail"/>
								<Input type="phone" placeholder="Téléphone"/>
							</div>
							{/* select */}
							<Select>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Sélectionné nos services"/>
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Sélectionné nos services</SelectLabel>
										<SelectItem value="front">Front-end</SelectItem>
										<SelectItem value="wordpress">Wordpress</SelectItem>
										<SelectItem value="seo">SEO</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
							{/* Textarea */}
							<Textarea className="h-[200px]" placeholder="Tapez votre message ici." />
							{/* Button */}
							<Button size="md" className="max-w-40">Envoyer</Button>
						</form>
					</div>
					{/* info */}
					<div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
						<ul className="flex flex-col gap-10">
							{info.map((item, index) => {
								return <li key={index} className="flex items-center gap-6">
									<div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
										<div className="text-[28px]">{item.icon}</div>
									</div>
									<div className="flex-1">
										<p className="text-white/60">{item.title}</p>
										<h3 className="text-xl">{item.description}</h3>
									</div>
								</li>
							})}
						</ul>
					</div>
				</div>
			</div>
		</motion.section>
	)
}

export default Contact