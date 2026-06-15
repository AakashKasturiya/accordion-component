import { useState } from "react";
import { faq } from "../data/faqData";
import { AccordionItem } from "./AccordionItem";
import { UtilityButton } from "./UtilityButton";


export const Accordion = () => {
  const [openItems, setopenItems] = useState([]);

  // Toggle one item in the open list so multiple panels can stay expanded.
  const accordionHandler = (id) => {
    setopenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <>
      <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="w-full max-w-2xl">
          <h1 className="text-xl font-semibold text-gray-800 mb-4">FAQ</h1>

          {/* Accordion wrapper */}
          <div className="border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-200 bg-white">
            <AccordionItem
              faq={faq}
              accordionHandler={accordionHandler}
              openItems={openItems}
            />
          </div>

          {/* Expand/collapse all controls */}
          <UtilityButton openItems={openItems} setopenItems={setopenItems} faq={faq} />
        </div>
      </main>
    </>
  );
};
