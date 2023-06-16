import React, {useState} from 'react'

type AccordionProps = {
  title: String;
  description: String;
  isOpen: boolean;
  handleAccordionClick: (index: number) => void;
  index: number;
};

const Accordion = (props : AccordionProps) => {
  const { title, description, isOpen, handleAccordionClick, index } = props;
  const toggleAccordion = () => {
    handleAccordionClick(index);
  };

  return (
    <div className='border border-black w-1/3'>
        <div className='flex border h-16 justify-between' onClick={toggleAccordion}>
            <h2 className='w-[25rem] p-2 text-xl font-bold pt-3'>{title}</h2>
            <button className='border-l-2 w-64 text-xl font-bold'>
              {isOpen ? 'Collapse' : 'Expand'}
            </button>
        </div>
        {isOpen && <div>
            <p className='p-3 text-xl'>
              {description}
            </p>
        </div>}
    </div>
  )
}
export default Accordion