import CoreConcept from "./CoreConcept";
import {CORE_CONCEPTS} from "../data";

export default function Concepts() {
    return(
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
                {CORE_CONCEPTS.map(conceptItem => (
                    <CoreConcept
                        title={conceptItem.title}
                        image={conceptItem.image}
                        description={conceptItem.description}
                        key={conceptItem.title}
                    />
                ))}
            </ul>
        </section>
    );
};

// import {CORE_CONCEPTS} from "../data";
// import CoreConcept from "./CoreConcept";
//
// export default function Concepts() {
//     return (
//         <section id="core-concepts">
//             <h2>Core Concepts</h2>
//             <ul>
//                 {CORE_CONCEPTS.map((conceptItem) => (
//                     <CoreConcept key={conceptItem.title} {...conceptItem}/>
//                 ))}
//             </ul>
//         </section>
//     )
// }
