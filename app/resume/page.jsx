"use client"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { delay, motion } from "framer-motion"


// Components 
import about from "@/components/path/about"
import skills from "@/components/path/skills"


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
				<Tabs defaultValue="skills" className="flex flex-col xl:flex-row gap-[60px]">
					<TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
						<TabsTrigger value="skills">Skills</TabsTrigger>
						<TabsTrigger value="about">About me</TabsTrigger>
					</TabsList>

					{/* Content */}
					<div className="min-h-[70vh w-full]">
						{/* Skills */}
						<TabsContent value="skills" className="w-full">Skills</TabsContent>

						{/* About */}
						{/* <TabsContent value="about" className="about">About</TabsContent> */}
					</div>
				</Tabs>
			</div>
		</motion.div>
	)
}

export default Resume