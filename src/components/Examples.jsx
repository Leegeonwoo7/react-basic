import TabButton from "./TabButton";
import Section from "./Section";
import {EXAMPLES} from "../data";
import {useState} from "react";
import Tabs from "./Tabs";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState()

    let tabContent = <p>Please select button</p>;

    if (selectedTopic) {
        tabContent =
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>
                        {EXAMPLES[selectedTopic].code}
                    </code>
                </pre>
            </div>
    }

function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
}

return (
    <Section title="Examples" id="examples">
        <Tabs
            buttonsContainer="menu"
            buttons={
            <>
                <TabButton isSelected={selectedTopic === 'components'}
                           onClick={() => handleSelect('components')}>Components
                </TabButton>
                <TabButton isSelected={selectedTopic === 'jsx'}
                           onClick={() => handleSelect('jsx')}>jsx
                </TabButton>
                <TabButton isSelected={selectedTopic === 'props'}
                           onClick={() => handleSelect('props')}>props
                </TabButton>
                <TabButton isSelected={selectedTopic === 'state'}
                           onClick={() => handleSelect('state')}>state
                </TabButton>
            </>
        }>
            {tabContent}
        </Tabs>
        </Section>
    );
};



// import {useState} from "react";
// import TabButton from "./TabButton";
// import {EXAMPLES} from "../data";
// import Section from "./Section";
//
// export default function Examples(){
//     const [ selectedTopic, setSelectedTopic ] = useState();
//     const [isSelected, setIsSelected] = useState();
//
//     function handleSelect(selectedButton) {
//         setSelectedTopic(selectedButton);
//
//     }
//
//     return (
//         <Section title="Examples" id="examples">
//             <menu>
//                 <TabButton isSelected={selectedTopic === 'components'}
//                            onSelect={() => handleSelect('components')}>Component</TabButton>
//                 <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
//                 <TabButton isSelected={selectedTopic === 'props'}
//                            onSelect={() => handleSelect('props')}>Props</TabButton>
//                 <TabButton isSelected={selectedTopic === 'state'}
//                            onSelect={() => handleSelect('state')}>State</TabButton>
//             </menu>
//             {!selectedTopic ? (<p>Please select a topic.</p>) : (<div id="tab-content">
//                 <h3>{EXAMPLES[selectedTopic].title}</h3>
//                 <p>{EXAMPLES[selectedTopic].description}</p>
//                 <pre>
//                             <code>
//                                 {EXAMPLES[selectedTopic].code}
//                             </code>
//                         </pre>
//             </div>)
//             }
//         </Section>
//     );
// }