export const UtilityButton = ({ setopenItems, faq }) => {

  // Mark every FAQ as open.
  const ExpandAllHandler = () => {
    const getAllId = faq.map(item => item.id)
    setopenItems(getAllId);
  };
  
  // Clear the open list to collapse everything.
  const CollapseAllHandler = () => {
    setopenItems([]);
  };

  return (
    <>
      <div className="mt-4 flex gap-2">
        <button
          onClick={ExpandAllHandler}
          className="cursor-pointer text-xs px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-100 transition-colors">
          Expand all
        </button>
        <button
          onClick={CollapseAllHandler}
          className="cursor-pointer text-xs px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-100 transition-colors">
          Collapse all
        </button>
      </div>
    </>
  );
};
