import React, {useState} from 'react'
type AccordianData = {
  title: string,
  content: string
}

const Accordion = (props : AccordianData) => {
  const [isOpen, setIsOpen] = useState(false);
  const {title, content} = props;

  const toggleAccordion = () => {
    setIsOpen(prevState => !prevState);
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
              {content}
            </p>
        </div>}
    </div>
  )
}
export default Accordion