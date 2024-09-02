"use client"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { delay, motion } from "framer-motion"


// Components 
import about from "@/components/path/about"
import skills from "@/components/path/skills"
import experiences from "@/components/path/experiences"


const Resume = () => {
	return (
		<motion.div 
		initial={{opacity: 0}} 
		animate={{
			opacity: 1, 
			transition:{ 
			delay: 2.4, 
			duration: 0.4, 
			ease: "easeIn"
			}
		}}
		className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
		>
			<div className="container mx-auto">
				<Tabs defaultValue="experiences" className="flex flex-col xl:flex-row gap-[60px]">
					<TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
						<TabsTrigger value="experiences">Experience</TabsTrigger>
						<TabsTrigger value="skills">Skills</TabsTrigger>
						<TabsTrigger value="about">About me</TabsTrigger>
					</TabsList>

					{/* Content */}
					<div className="min-h-[70vh] w-full">
						{/* Experience */}
						<TabsContent value="experiences" className="w-full">
							<div className="flex flex-col gap-[30px] text-center xl:text-left">
								<h3 className="text-4xl font-bold">{ experiences.title }</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{ experiences.description }</p>
								<ScrollArea className="h-[400px]">
									<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
										{experiences.items.map((item, index)=> {
											return (
												<li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col items-center justify-center lg:items-start gap-1">
													<span className="text-accent">{item.duration}</span>
													<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
													<div className="flex items-center gap-3">
														{/* dot */}
														<span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
														<p className="text-white/60">{item.company}</p>
													</div>
												</li>
											)
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>

						{/* Skills */}
						<TabsContent value="skills" className="w-full h-full">
							<div className="flex flex-col gap-[30px]">
								<div>
									<h3 className="text-4xl font-bold">{ skills.title }</h3>
									<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{ skills.description }</p>
								</div>
								<ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
									{skills.skillList.map((skill, index) => {
										return (
											<li key={index}>
												<TooltipProvider delay={100}>
													<Tooltip>
														<TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex items-center justify-center group">
															<div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
														</TooltipTrigger>
														<TooltipContent>
															<p className="capitalize">{skill.name}</p>
														</TooltipContent>
													</Tooltip>
												</TooltipProvider>
											</li>
										)
									})}
								</ul>
							</div>
						</TabsContent>

						{/* About */}
						<TabsContent value="about" className="w-full">About</TabsContent>
					</div>
				</Tabs>
			</div>
		</motion.div>
	)
}

export default Resume