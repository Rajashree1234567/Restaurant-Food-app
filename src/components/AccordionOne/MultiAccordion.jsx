import React, { useState, useRef, useEffect } from 'react';

// Accordion component
const Accordion = ({ index, isOpen, handleToggle }) => (
  <div>
    <button
      onClick={() => handleToggle(index)}
      aria-expanded={isOpen}
      aria-controls={`panel-${index}`}
      id={`accordion-${index}`}
    >
      Panel {index + 1}
    </button>
    <div
      id={`panel-${index}`}
      role="region"
      aria-labelledby={`accordion-${index}`}
      style={{
        display: isOpen ? 'block' : 'none',
        outline: 'none',
      }}
    >
      <p>Content for Panel {index + 1}</p>
    </div>
  </div>
);

// Controller component
const MultiAccordion = () => {
  const [openPanel, setOpenPanel] = useState(null);

  const handleToggle = (index) => {
    setOpenPanel(openPanel === index ? null : index);
  };

  useEffect(() => {
    if (openPanel !== null) {
      const element = document.getElementById(`accordion-${openPanel}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        element.focus();
      }
    }
  }, [openPanel]);

  return (
    <div>
      {[0, 1, 2].map((index) => (
        <Accordion
          key={index}
          index={index}
          isOpen={openPanel === index}
          handleToggle={handleToggle}
        />
      ))}
    </div>
  );
};

export default MultiAccordion;





// import React, { useState, useRef, useEffect } from 'react';

// const MultiAccordion = () => {
//   const [openPanel, setOpenPanel] = useState(null);
//   const panelRefs = useRef([]);

//   const handleToggle = (index) => {
//     setOpenPanel(openPanel === index ? null : index);
//   };

//   useEffect(() => {
//     if (openPanel !== null) {
//       panelRefs.current[openPanel]?.focus();
//     }
//   }, [openPanel]);

//   return (
//     <div>
//       {['Panel 1', 'Panel 2', 'Panel 3'].map((panel, index) => (
//         <div key={index}>
//           <button
//             onClick={() => handleToggle(index)}
//             aria-expanded={openPanel === index}
//           >
//             {panel}
//           </button>
//           <div
//             ref={(el) => (panelRefs.current[index] = el)}
//             tabIndex={-1}
//             style={{
//               display: openPanel === index ? 'block' : 'none',
//               outline: 'none',
//             }}
//           >
//             <p>{panel} content goes here.</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MultiAccordion;
