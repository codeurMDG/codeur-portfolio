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
	description: "Votre partenaire de confiance pour la création de site web.",
	keywords: "Développement web, création de site, codeur madagascar, WordPress, site wordPress, Création de site internet, Conception de site web, Développement web sur mesure, Solution web,Prestation web, Développeur web freelance,Webmaster, Consultant web,Agence web, Développement front-end, Développeur front-end, UI/UX design, Interface utilisateur, Expérience utilisateur, HTML, CSS, JavaScript, React, Next.js, Framework JavaScript, Bibliothèque JavaScript, Responsive design, Création de site WordPress, Thème WordPress, Plugin WordPress, Personnalisation WordPress, Développement WordPress sur mesure, Site vitrine, Référencement naturel, SEO",
	// Pour les réseaux sociaux (Open Graph)
	openGraph: {
		title: "CodeurMDG - Création de sites web sur mesure", // Titre plus descriptif
		description: "Faites confiance à CodeurMDG pour la conception et le développement de votre site internet.",
		url: "https://codeur.vercel.app/",
		type: "website",
		locale: "fr_FR",
		site_name: "CodeurMDG",
		image: {
			url: "/assets/metadata/ContactUs.jpg", // Image optimisée pour les réseaux sociaux
			alt: "Logo de CodeurMDG",
			width: 1200,
			height: 630
		}
	},
	// Pour Twitter
	twitter: {
		card: 'summary_large_image',
		title: "CodeurMDG",
		description: "Votre partenaire de confiance pour la création de site web.",
		image: "/assets/metadata/ContactUs.jpg"
	}
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
