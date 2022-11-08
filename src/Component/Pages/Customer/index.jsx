import React, { useState } from "react";
// import AddCustomers from "../../PageComponent/CustomersDetails/AddCustomer/AddCustomers";
import ViewCustomers from "../../PageComponent/CustomersDetails/ViewCustomer/ViewCustomer";
// import SecondaryHeader from "../../UI/SecondaryHeader/SecondaryHeader";

function Customer() {
  const [showData, setShowData] = useState("View");

  return (
    <div>
      {/* <SecondaryHeader
        setShowData={setShowData}
        showData={showData} */}
        {/* // viewBtn="ViewCustomer"
        // SearchText={SearchText} */}
      {/* /> */}
      {<ViewCustomers />}
    </div>
  );
}

export default Customer;