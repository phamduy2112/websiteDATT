'use client'
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';

const FAQItem = ({ question, answer, isOpen, toggleOpen }: any) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState('0px');

  // Set max-height when the item opens or closes
  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [isOpen]);

  return (
    <div>
      
      <div className="border rounded-lg shadow-md mb-4">
      <div 
        className="bg-gray-100 p-4 flex justify-between items-center cursor-pointer"
        onClick={toggleOpen}
      >
        <h3 className="font-semibold text-blue-600">{question}</h3>
        <span className={`transform ${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-300`}>
          ▼
        </span>
      </div>
      {/* Collapsible content */}
      <div 
        ref={contentRef} 
        style={{ maxHeight: height }} 
        className="overflow-hidden transition-max-height duration-500 ease-in-out"
      >
        <div className="p-4">
          <p className="text-gray-600">{answer}</p>
        </div>
      </div>
    </div>
    </div>
    
  );
};

const FAQList = () => {
  const faqs = [
    { question: "Mauris Congue Euismod Purus At Semper?", answer: "Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo." },
    { question: "Aenean Luctus Ornare?", answer: "Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida nisi id fringilla ultricies." },
    // Add more FAQs as needed...
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); // Close if already open, otherwise open
  };

  return (
    <div>
          <div className="breadcrumb-area mb-[2rem] relative bg-gray-300 min-h-[35vh]" style={{ borderRadius: '20px' }}>
      <div className="text-left container  m-auto">
       <div className='absolute top-[30%] left-[40%] z-[10]'>
        <h2 className='text-center text-[3rem] font-semibold'>Faq
        </h2>
        <div className="flex gap-6 self-center max-w-full text-[1rem] leading-none uppercase whitespace-nowrap w-[172px]">
            <Link href="/" className="text-black hover:text-blue-600">Home</Link>
            <div className="grow shrink text-blue-600 w-[92px]"> // Faq</div>
          </div>
       </div>
       
        <div className="absolute top-[30%] left-[40%] z-0 text-gray-400 text-8xl font-thin ">
          1920x406
        </div>
      </div>
      </div>
       <div className='w-[60%] m-auto'>
   <div className="space-y-4">
      {faqs.map((faq, index) => (
        <FAQItem 
          key={index} 
          question={faq.question} 
          answer={faq.answer} 
          isOpen={openIndex === index} 
          toggleOpen={() => toggleOpen(index)}
        />
      ))}
    </div>
    </div>
    </div>
   
 
  );
};

export default FAQList;
