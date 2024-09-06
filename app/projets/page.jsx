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
import WorkSliderBtns from "@/components/WorkSliderBtns"

const Projets = () => {
	const [project, setProject] = useState(projects[0])

	const handleSlideChange = (swiper) => {
		// get current slide index
		const currentIndex = swiper.activeIndex

		// update project state based on current slide index
		setProject(projects[currentIndex])
	}

	return (
		<motion.section 
			initial={{opacity: 0}}
			animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
			className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
		>
			<div className="container mx-auto">
				<div className="flex flex-col xl:flex-row xl:gap-[30px]">
					<div className="w-full xl:w-[40%] xl:h-[480px] flex flex-col xl:justify-between order-2 xl:order-none">
						<div className="flex flex-col gap-[30px] h-[50%]">
							{/* Outline number */}
							<div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
							{/* project category */}
							<h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.title}</h2>
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
								<Link href={project.live} target="_blank" rel="noopener noreferrer">
									<TooltipProvider delayDuration={100}>
										<Tooltip>
											<TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group">
												<BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
											</TooltipTrigger>
											<TooltipContent>
												<p>live project</p>
											</TooltipContent>
										</Tooltip>
									</TooltipProvider>
								</Link>
								{/* GitHub project button */}
								<Link href={project.github} target="_blank" rel="noopener noreferrer">
									<TooltipProvider delayDuration={100}>
										<Tooltip>
											<TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group">
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
					<div className="w-full xl:w-[60%]">
						<Swiper 
							spaceBetween={30} 
							slidesPerView={1} 
							className="xl:h-[550px] mb-12"
							onSlideChange={handleSlideChange}
						>
							{projects.map((project, index) => {
								return <SwiperSlide key={index} className="w-full">
									<div className="h-[475px] realative group flex justify-center items-center bg-pink-50/20">
										{/* overlay */}
										<div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
										{/* image */}
										<div className="w-full h-full relative">
											<Image src={project.image} fill className="object-cover" alt="work"/>
										</div>
									</div>
								</SwiperSlide>
							})}

							{/* slider buttons */}
							<WorkSliderBtns 
								containerStyle="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
								btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] rounded-sm flex justify-center items-center transition-all duration-500"
							/>
						</Swiper>
					</div>
				</div>
			</div>
		</motion.section>
	)
}

export default Projets