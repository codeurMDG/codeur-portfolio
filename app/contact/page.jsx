"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectGroup, SelectContent, SelectLabel, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import info from "@/components/path/info";
import Confetti from "react-confetti";

const Contact = () => {
	// confettis : 
	const [showConfetti, setShowConfetti] = useState(false);

	const [formData, setFormData] = useState({
		firstname: "",
		lastname: "",
		email: "",
		phone: "",
		service: "",
		message: ""
	});

	// Fonction pour valider l'email
	const isValidEmail = (email) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const [selectedService, setSelectedService] = useState(""); // État pour le champ Select

	// Handle input change
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
		...prev,
		[name]: value
		}));
	};

	 // Vérification si tous les champs sont remplis
	const isFormValid = Object.values(formData).every((value) => value.trim() !== "");
	const [emailError, setEmailError] = useState(""); 
  	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();

		// Vérification de l'email avant soumission
		if (!isValidEmail(formData.email)) {
			setEmailError("Veuillez entrer une adresse e-mail valide.");
			return;
		}
		setEmailError("");
			const data = new FormData();
				Object.entries(formData).forEach(([key, value]) => {
				data.append(key, value);
			});

		try {
			await fetch("https://getform.io/f/bdrypdqb", {
				method: "POST",
				body: data,
			});
			setShowConfetti(true);

			// Reset form after submission
			setFormData({
				firstname: "",
				lastname: "",
				email: "",
				phone: "",
				service: "",
				message: ""
			});

			setSelectedService("");

			// Masquer les confettis
			setTimeout(() => {
				setShowConfetti(false);
			}, 5000);

		} catch (error) {
			console.error("Form submission error:", error);
		}
	};

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: {
				delay: 2.4,
				duration: 0.4,
				ease: "easeIn",
				},
			}}
			className="py-6"
		>
			<div className="container mx-auto">
				<div className="flex flex-col xl:flex-row gap-[30px]">
				{/* form */}
					<div className="xl:w-[54%] order-2 xl:order-none">
						<form
							className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
							onSubmit={handleSubmit}
						>
							<h3 className="text-4xl text-accent">Travaillons ensemble</h3>
							<p className="text-white/60">
								Pour collaborer, veuillez remplir le formulaire ci-dessous ou
								nous contacter par e-mail.
							</p>
							{/* input */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<Input
									type="text"
									name="firstname"
									placeholder="Nom"
									value={formData.firstname}
									onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
								/>
								<Input
									type="text"
									name="lastname"
									placeholder="Prénom"
									value={formData.lastname}
									onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
								/>
								<Input
									type="email"
									name="email"
									placeholder="Adresse e-mail"
									value={formData.email}
									onChange={(e) => setFormData({ ...formData, email: e.target.value })}
								/>
								{/* Message d'erreur */}
								{emailError && <p className="text-red-500 text-sm mt-2">{emailError}</p>}
								<Input
									type="text"
									name="phone"
									placeholder="Téléphone"
									value={formData.phone}
									onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
								/>
							</div>
							{/* select */}
							<Select
								name="service"
								value={selectedService}
								onValueChange={(value) => {
									setSelectedService(value);
									setFormData((prev) => ({ ...prev, service: value }));
								}}
							>
								<SelectTrigger className="w-full">
								<SelectValue placeholder="Sélectionné nos services" />
								</SelectTrigger>
								<SelectContent>
								<SelectGroup>
									<SelectLabel>Sélectionné nos services</SelectLabel>
									<SelectItem value="front">Front-end</SelectItem>
									<SelectItem value="wordpress">WordPress (Création thème ou plugin)</SelectItem>
									<SelectItem value="integration">Intégration via Elementor ou Divi</SelectItem>
									<SelectItem value="seo">SEO</SelectItem>
								</SelectGroup>
								</SelectContent>
							</Select>
							{/* Textarea */}
							<Textarea
								className="h-[200px]"
								name="message"
								placeholder="Tapez votre message ici."
								value={formData.message}
								onChange={(e) => setFormData({ ...formData, message: e.target.value })}
							/>
							{/* Button */}
							<Button size="md" className={`max-w-40 ${!isFormValid ? 'opacity-70 cursor-not-allowed hover:bg-accent' : ''}`} type="submit" disabled={!isFormValid}>
								Envoyer
							</Button>
						</form>
					</div>
				{/* info */}
					<div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
						<ul className="flex flex-col gap-10">
							{info.map((item, index) => {
								return (
									<li key={index} className="flex items-center gap-6">
										<div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
											<div className="text-[28px]">{item.icon}</div>
										</div>
										<div className="flex-1">
											<p className="text-white/60">{item.title}</p>
											<h3 className="text-xl">{item.description}</h3>
										</div>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
			{/* Confettis */}
			{showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
		</motion.section>
	);
};

export default Contact;
