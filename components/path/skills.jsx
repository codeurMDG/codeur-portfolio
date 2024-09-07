import { FaHtml5, FaCss3, FaJs, FaPhp, FaReact } from "react-icons/fa"
import { SiWordpress, SiWebpack, SiNextdotjs, SiTailwindcss, SiBootstrap, SiElementor, SiMysql } from "react-icons/si"

const skills =  {
    title: "Mes compétences", 
    description: "Pour offrir des solutions web innovantes, j’utilise une variété de technologies. Voici un aperçu de mes compétences techniques :",
    skillList: [
        {
            icon: <FaHtml5/>,
            name: "html 5"
        },
        {
            icon: <FaCss3/>,
            name: "css 3"
        },
        {
            icon: <FaJs/>,
            name: "javascript"
        },
        {
            icon: <FaPhp/>,
            name: "php"
        },
        {
            icon: <FaReact/>,
            name: "react.js"
        },
        {
            icon: <SiNextdotjs/>,
            name: "next.js"
        },
        {
            icon: <SiTailwindcss/>,
            name: "tailwind.css"
        },
        {
            icon: <SiBootstrap/>,
            name: "bootstrap"
        },
        {
            icon: <SiWebpack/>,
            name: "webpack"
        },
        {
            icon: <SiWordpress/>,
            name: "wordpress"
        },
        {
            icon: <SiElementor/>,
            name: "elementor"
        },
        {
            icon: <SiMysql/>,
            name: "mysql"
        },
    ]
}

export default skills