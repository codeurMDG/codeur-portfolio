import Codeur from "@/public/assets/codeur-logo.png"
import Image from "next/image"

const Logo = () => {
  return (
    <>
        <span className="inline-block text-4xl font-semibold">C</span>
		<Image src={Codeur} alt="Codeur Logo" width={28} height={28} />
		<span className="inline-block text-4xl font-semibold">deur</span>
        <span className="inline-block font-medium -rotate-90 text-[16px]">MDG</span>
    </>
  )
}

export default Logo