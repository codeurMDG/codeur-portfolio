import Link from "next/link"
import socials from "../path/socials"


const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((social, index) => {
                return <Link key={index} href={social.path} className={iconStyles}>{social.icon}</Link>
            } )}
        </div>
    )
}

export default Social