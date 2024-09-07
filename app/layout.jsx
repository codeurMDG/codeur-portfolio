import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Weight } from "lucide-react";

//components : 
import Header from "@/components/layout/Header";
import PageTransition from "@/components/transition/PageTransition";
import StairTransition from "@/components/transition/StairTransition";

const jetBrains_Mono = JetBrains_Mono({ 
	subsets: ["latin"] ,
	weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
	variable: "--font-jetbrainsMono"
});

export const metadata = {
	title: "CodeurMDG",
	description: "Votre partenaire de confiance pour la création d'un site web.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={jetBrains_Mono.variable}>
				<Header/>
				<StairTransition/>
				<PageTransition>{children}</PageTransition>
			</body>
		</html>
	);
}
