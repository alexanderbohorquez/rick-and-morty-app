import React from "react";

const Page = ({ page, setPage, quantyPage }) => {
  const pageNumbers = Array.from({ length: quantyPage }, (_, index) => index + 1);

  return (
<div className="page-numbers-container">
  {pageNumbers.map((pageNumber) => (
    <button
      key={pageNumber}
      onClick={() => setPage(pageNumber)}
      className={`page-number-button ${pageNumber === page ? "active" : ""}`}
    >
      {pageNumber}
    </button>
  ))}
</div>
  );
};

export default Page;