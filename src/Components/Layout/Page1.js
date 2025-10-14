import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import ContainerCard from "../ContainerCard/ContainerCard";

const cards = [
    {
        id: 1,
        label: "ABOUT",
        description: "This is a brief description about me.",
        link: "#about",
        color: "#383838"
    },
    {
        id: 2,
        label: "PORTFOLIO",
        description: "Check out my projects and work!",
        link: "#portfolio",
        color: "#20221D"
    },
    {
        id: 3,
        label: "SKILLS",
        description: "Here are the skills I have mastered.",
        link: "#skills",
        color: "#16111C"
    },
];

export default function Page1() {
    return (
        <>
            <Banner />
            <Contact />
            <ContainerCard 
                cards={cards}
            />
        </>
    );
}