import React from "react";

const Table = ({ children }) => {
  return (
    <div className="general">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Nombre del plan</th>
            <th scope="col">Periodo</th>
            <th scope="col">Valor</th>
            <th scope="col"> </th>
          </tr>
        </thead>

        {children}
        
      </table>
    </div>
  );
};

export default Table;
