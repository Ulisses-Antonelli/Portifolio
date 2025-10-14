import React from "react";
import InfoBanner from "../InfoBanner/InfoBanner";
import ContainerSkills from "../ContainerSkills/ContainerSkills";

const skillsAndEducationCards = [
    {
        id: 1,
        label: "FRONT-END",
        description: "HTML5, CSS3, JavaScript, React, Bootstrap, Styled Components",
        link: "#frontend",
        color: "#1E1E27"
    },
    {
        id: 2,
        label: "BACK-END",
        description: "Node.js, Java, Spring Boot, MySQL, API REST",
        link: "#backend",
        color: "#22221B"
    },
    {
        id: 3,
        label: "FORMAÇÃO ACADÊMICA",
        description: "Tecnologia em Desenvolvimento de Software Multiplataforma - FATEC Zona Leste (6º Semestre - Em andamento) | Tecnologia em Construção Civil - FATEC Tatuapé (Concluído 2018) | Técnico em Projetos Mecânicos - ETEC (Concluído 2010)",
        link: "https://fateczl.edu.br/arquivos/Grade%20DSM.pdf",
        color: "#1A1A1A"
    },
];

export default function Page3() {
    return (
        <div style={{ height: "50vh"}}>
            <InfoBanner
                title= "Skills & Formação"
                description= "Tecnologias dominadas e trajetória acadêmica construída ao longo da minha formação como desenvolvedor."
                icon={true}
            />
            <ContainerSkills
                cards={skillsAndEducationCards}
            />
        </div>
    );
}