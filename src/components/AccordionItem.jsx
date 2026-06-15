

export const AccordionItem = ({faq, openItems, accordionHandler}) => {

  return (
    <>
    {/* Render each FAQ as an independent toggle item. */}
    {faq?.map((item)=>(
    <div className="acc-item" key={item.id}>
        {/* Clicking the header adds or removes this item's id. */}
        <button onClick={()=> accordionHandler(item.id)} className="cursor-pointer acc-header w-full flex justify-between items-center px-5 py-4 text-left hover:bg-gray-50 transition-colors duration-200">
          <span className="text-sm font-medium text-gray-800">
            {item.question}
          </span>
          {/* Use the icon direction to show open vs closed state. */}
          {openItems.includes(item.id)? <i className="ri-arrow-up-s-line"></i> : <i className="ri-arrow-down-s-line"></i> }
        </button>
        {/* Only render the answer when this item is open. */}
        {openItems.includes(item.id) ? (<div className="acc-content">
          <div className="px-5 pb-4 text-sm text-gray-500 leading-relaxed">
             {item.answer}
          </div>
        </div>) : null
        }
      </div>
    ))}
    </>
  );
};
