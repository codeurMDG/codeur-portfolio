"use client"

import Link from "next/link"
import { BsArrowDownRight } from "react-icons/bs"
import { motion } from "framer-motion"

// Components : 
import services from "@/components/path/services"

const Services = () => {
	return (
		<section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
			<div className="container mx-auto">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ 
						opacity: 1 ,
						transition: { delay: 2.4, duration: 0.4, ease: "easeIn"}
					}}
				>
					{services.map((service, index) => {
						return (
							<div key={index}>
								<div>
									<div>{ service.num }</div>
									<Link href={service.href}>
										<BsArrowDownRight/>
									</Link>
								</div>
							</div>
						)
					} )}
				</motion.div>
			</div>
		</section>
	)
}

export default Services