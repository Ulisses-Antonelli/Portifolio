import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import ContainerCard from "../ContainerCard/ContainerCard";

const homeCards = [
    {
        id: 1,
        label: "ABOUT",
        description: "Desenvolvedor Fullstack apaixonado por tecnologia. Clique para conhecer minha formação acadêmica e trajetória profissional.",
        link: "/about",
        color: "#383838"
    },
    {
        id: 2,
        label: "PORTFOLIO",
        description: "Explore meus projetos desenvolvidos ao longo dos semestres na FATEC, desde aplicações web até mobile.",
        link: "/portifolio",
        color: "#20221D"
    },
    {
        id: 3,
        label: "SKILLS",
        description: "Conheça as tecnologias e ferramentas que domino: HTML, CSS, JavaScript, React, Node.js, Java, Spring Boot, MySQL, Kotlin e Android.",
        link: "/about",
        color: "#16111C"
    },
];

export default function Page1() {
    return (
        <>
            <Banner />
            <Contact />
            <ContainerCard
                cards={homeCards}
            />
        </>
    );
}