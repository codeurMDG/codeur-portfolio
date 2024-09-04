import { FaHtml5, FaCss3, FaJs, FaPhp, FaReact } from "react-icons/fa"
import { SiSass, SiWordpress, SiWebpack, SiNextdotjs, SiTailwindcss, SiBootstrap, SiElementor, SiMysql } from "react-icons/si"

const skills =  {
    title: "My skills", 
    description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Eleifend libero dictum faucibus odio magna.",
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
            icon: <SiSass/>,
            name: "sass"
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