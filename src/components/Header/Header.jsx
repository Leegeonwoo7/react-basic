import reactImg from "../../assets/react-core-concepts.png";
import './Header.css';

const reactDescription = ['Core', 'Fundamental', 'Crucial'];

function genRandomInt(max) {
    return Math.floor(Math.random() *  (max + 1));
}

export default function Header(){

    let description = reactDescription[genRandomInt(reactDescription.length - 1)];

    return (
        <header>
            <img src={reactImg} alt="reactImg"/>
            <h1>React Essentials</h1>
            <p>{description} React concepts you will need for almost any app you are going to build!</p>
        </header>
    );
}