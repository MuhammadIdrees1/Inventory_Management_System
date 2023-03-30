import React from "react";
import { useParams } from "react-router-dom";

const StoreDetails = () => {
  const { storeId } = useParams();
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4  mt-14  ">
        <p>{storeId}</p>
      </div>
    </div>
  );
};

export default StoreDetails;
