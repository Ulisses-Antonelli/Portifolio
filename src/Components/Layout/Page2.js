import ContainerCardProject from "../ContainerCardProjetc/ContainerCardProject";
import InfoBanner from "../InfoBanner/InfoBanner";

export default function Page2() {
    const projects = [
        {
            image: "https://placehold.co/560x200?text=Saude+Exata",
            title: "Saúde Exata",
            semester: "1º Semestre",
            description: "Website oferecendo quatro calculadoras de índices corporais: peso ideal (IMC), gordura corporal, taxa metabólica basal e calculadora de macros. Desenvolvido seguindo metodologia ágil Lean e padrões de acessibilidade WCAG, com design responsivo para mobile e tablet.",
            links: {
                project: "https://andradereryson.github.io/Saude-exata/",
                github: "https://github.com/AndradeReryson/Saude-exata"
            },
            technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
        },
        {
            image: "https://placehold.co/270x100?text=Battle+String",
            title: "Battle String",
            semester: "2º Semestre",
            description: "Jogo web interativo desenvolvido com foco em gameplay dinâmico e engajante. Projeto construído utilizando Node.js para o servidor e JavaScript puro no frontend, explorando conceitos de desenvolvimento de jogos para web.",
            links: {
                project: "https://github.com/AndradeReryson/Battle_String",
                github: "https://github.com/AndradeReryson/Battle_String"
            },
            technologies: ["JavaScript", "HTML", "CSS", "Node"],
        },
        {
            image: "https://placehold.co/270x100?text=Tech+Recycle",
            title: "TechRecycle",
            semester: "3º Semestre",
            description: "Plataforma de recompensa por comportamento sustentável que visa incentivar a reciclagem de resíduos eletrônicos. Sistema fullstack desenvolvido com Spring Boot no backend e React no frontend, implementando cadastro de usuários e estabelecimentos.",
            links: {
                project: "https://github.com/Ulisses-Antonelli/Tech_Recycle",
                github: "https://github.com/Ulisses-Antonelli/Tech_Recycle"
            },
            technologies: ["Java", "Spring Boot", "MySQL", "React", "Bootstrap"],
        },
        {
            image: "https://placehold.co/570x100?text=Mobile+Android",
            title: "Desenvolvimento Mobile Android",
            semester: "4º Semestre",
            description: "Projeto de desenvolvimento mobile focado em aplicações Android utilizando Kotlin. Exploração das ferramentas e frameworks nativos do Android, aplicando boas práticas de desenvolvimento mobile e arquitetura de aplicativos.",
            links: {
                project: "https://github.com/Ulisses-Antonelli/Desenvolvimento-Mobile-Android-4semestre",
                github: "https://github.com/Ulisses-Antonelli/Desenvolvimento-Mobile-Android-4semestre"
            },
            technologies: ["Kotlin", "Android"],
        },

    ];

    return (
        <>
            <InfoBanner
                title="Portfólio </>"
                description="Projetos acadêmicos desenvolvidos durante a graduação em Desenvolvimento de Software Multiplataforma na FATEC Zona Leste."
            />
            <ContainerCardProject projects={projects} />
        </>
    );
}