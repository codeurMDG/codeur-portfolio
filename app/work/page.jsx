"use client"

import { motion } from "framer-motion"
import React, { useState } from "react"
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"

import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"
import Image from "next/image"

// components : 
import projects from "@/components/path/projects"

const Work = () => {
	const [project, setProject] = useState(projects[0])
	return (
		<motion.section 
			initial={{opacity: 0}}
			animate={{opacity: 1}}
			className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
		>
			<div className="container mx-auto">
				<div className="flex flex-col xl:flex-row xl:gap-[30px]">
					<div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
						<div className="flex flex-col gap-[30px] h-[50%]">
							{/* Outline number */}
							<div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
							{/* project category */}
							<h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
							{/* project description */}
							<p className="text-white/60">{project.description}</p>
							{/* project stack */}
							<ul className="flex gap-3 flex-wrap">
								{project.stack.map((item, index) => {
									return <li key={index} className="text-[18px] text-accent">
										{item.name}
										{/* Remove the last comma */}
										{index !== project.stack.length - 1 && ","}
									</li>
								} )}
							</ul>
							{/* Border */}
							<div className="border border-white/20"></div>
							{/* Buttons */}
							<div className="flex items-center gap-4">
								{/* Live project button */}
								<Link href={project.live}>
									<TooltipProvider delayDuration={100}>
										<Tooltip>
											<TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
												<BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
											</TooltipTrigger>
											<TooltipContent>
												<p>live project</p>
											</TooltipContent>
										</Tooltip>
									</TooltipProvider>
								</Link>
								{/* GitHub project button */}
								<Link href={project.github}>
									<TooltipProvider delayDuration={100}>
										<Tooltip>
											<TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
												<BsGithub className="text-white text-3xl group-hover:text-accent"/>
											</TooltipTrigger>
											<TooltipContent>
												<p>GitHub repository</p>
											</TooltipContent>
										</Tooltip>
									</TooltipProvider>
								</Link>
							</div>
						</div>
					</div>
					<div className="w-full xl:w-[50%]">Slider</div>
				</div>
			</div>
		</motion.section>
	)
}

export default Work