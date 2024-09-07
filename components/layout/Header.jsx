import Link from "next/link"
import { Button } from "../ui/button"

// Nav Components : 
import Nav from "./Nav"
import MobileNav from "./MobileNav"
import Logo from "../icons/Logo"

const Header = () => {
	return (
		<header className="py-8 xl:py-12 text-white">
			<div className="container mx-auto flex justify-between items-center">
				{/* Logo */}
				<Link href="/">
					<h1 className="flex items-center">
						<Logo/>
					</h1>
				</Link>

				{/* Desktop Nav */}
				<div className="hidden xl:flex items-center gap-8">
					<Nav/>
					<Link href="/contact">
						<Button>Me contacter</Button>
					</Link>
				</div>

				{/* Mobile Nav */}
				<div className="xl:hidden">
					<MobileNav/>
				</div>
			</div>
		</header>
	)
}

export default Header