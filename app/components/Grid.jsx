import React from "react";

const Grid = ({ rows, columns }) => {
  // Generate an array with the number of rows
  const rowArray = Array.from(Array(rows).keys());

  // Generate an array with the number of columns
  const columnArray = Array.from(Array(columns).keys());

  return (
    <div className="grid grid-cols-4 gap-4">
      {rowArray.map((row) =>
        columnArray.map((column) => (
          <div
            key={`${row}-${column}`}
            className="bg-gray-200 p-4 flex items-center justify-center"
          >
            {/* Replace the content inside each grid item */}
            <span>{`${row}, ${column}`}</span>
          </div>
        ))
      )}
    </div>
  );
};

export default Grid;
