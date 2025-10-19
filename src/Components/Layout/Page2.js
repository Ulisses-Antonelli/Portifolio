import ContainerCardProject from "../ContainerCardProjetc/ContainerCardProject";
import InfoBanner from "../InfoBanner/InfoBanner";
import BattleStringImage from "../../assets/Battle String.png";
import SaudeExataImage from "../../assets/SaudeExata.png";
import TechRecycleImage from "../../assets/Tech Recycle.png";
import CodeCrumbsMobileImage from "../../assets/CodeCrumbsMobile.png";
import LogoTMC from "../../assets/Logo_TMC.png";

export default function Page2() {
    const projects = [
        {
            image: SaudeExataImage,
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
            image: BattleStringImage,
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
            image: TechRecycleImage,
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
            image: CodeCrumbsMobileImage,
            title: "CodeCrumbsMobile",
            semester: "4º Semestre",
            description: "Aplicativo Android para criação e gerenciamento de flashcards voltados para programação e desenvolvimento. Ferramenta educacional que permite aos desenvolvedores criar, organizar e estudar conceitos de código de forma interativa, utilizando Kotlin e arquitetura nativa Android.",
            links: {
                project: "https://github.com/Ulisses-Antonelli/CodeCrumbsMobile",
                github: "https://github.com/Ulisses-Antonelli/CodeCrumbsMobile"
            },
            technologies: ["Kotlin", "Android"],
        },
        {
            image: LogoTMC,
            title: "TaskManager CIVIL",
            semester: "6º Semestre",
            description: "Sistema multiplataforma de gerenciamento de projetos de construção civil. Oferece controle completo de obras com cronogramas, progresso e status. Desenvolvido com Kotlin Multiplatform e Compose Multiplatform, implementando gestão de projetos, tarefas, colaboradores, times e documentos com arquitetura MVVM e Clean Architecture.",
            links: {
                project: "https://ulisses-antonelli.github.io/TaskManagerCIVIL/",
                github: "https://github.com/Ulisses-Antonelli/TaskManagerCIVIL"
            },
            technologies: ["Kotlin", "Compose Multiplatform"],
        },

    ];

    return (
        <>
            <InfoBanner
                title="Portfólio </>"
                description="Projetos acadêmicos desenvolvidos durante a graduação em DSM na FATEC Zona Leste."
            />
            <ContainerCardProject projects={projects} />
        </>
    );
}