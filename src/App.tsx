import {useState} from 'react';
import Accordion from './components/Accordion';

type ObjectType = {
  title: String;
  description: String;
};

type ArrayType = Array<ObjectType>;

const accordionInfo : ArrayType= [
  {
    title:'The Flash',
    description:'After being struck by lightning, Barry Allen wakes up from his coma to discover he been given the power of super speed, becoming the Flash'
  },
  {
    title:'Spiderman',
    description:'Peter Parker then attains spider-like qualities such as genius-level intellect, superb scientist and inventor, superhuman strength, speed, durability, and agility, he has the ability to cling to most surfaces, precognitive spider-sense, and his wrist as web-shooters.'
      
  },
  {
    title:'Ironman',
    description:'A brash but brilliant inventor, Stark was self-described as a genius, billionaire, playboy, and philanthropist.'
      
  }
];

function App() {
  const [openIndex, setOpenIndex] = useState(-1);
  const handleAccordionClick = (index: number) => {
    setOpenIndex((prevIndex) => {
      if (prevIndex === index) {
        // we have clicked twice
        return -1;
      } else {
        // we have clicked for first time
        return index;
      }
    });
  };
  return (
    <>
      {accordionInfo.map((item, index) => (
        <Accordion
          key={index}
          index={index}
          title={item.title}
          description={item.description}
          isOpen={openIndex === index}
          handleAccordionClick={handleAccordionClick}
        />
      ))}
    </>
  );
}

export default App;
