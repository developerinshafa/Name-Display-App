import { useEffect, useState } from "react";


export default function Billing({searchTerm = "", limit = 5}){
   const [users, setUser] =useState([]);

    useEffect(() =>{
        let url = "https://mimic-server-api.vercel.app/bills";

    if (limit !== "All") {
      url += "?_limit=" + limit;
    }

    fetch(url)
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.log(err));
    //  console.log("Limit changed:", limit);

  }, [limit]);

    //    fetch("https://mimic-server-api.vercel.app/bills")
    //         .then(response => response.json())
    //         .then(data => setUser(data))
    //         .catch(error => console.log('error', error));
    // }, []);


    //search filter
    const filteredUsers = users.filter((bill) => {
    const customerName = bill.customer?.name?.toLowerCase() || "";
    const billId = bill.billId?.toString() || "";

    return(
        customerName.includes(searchTerm.toLowerCase()) ||
        billId.includes(searchTerm)
        );
    });
    
    return (
        // condition Bill not found
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredUsers.length === 0 && (
            <p className="text-red-500 font-bold ">No Bills Found</p>
            )}

            {filteredUsers.map((bill) => (
                <div key={bill.id} className="bg-white font-semibold p-4 rounded-xl border-blue-900 border-l-6 border-b-8 inset-shadow-sm inset-shadow-indigo-600 ...">
                    <h1 className="text-center font-bold p-2 text-base text-blue-800 border-b-6 border-blue-800">{bill.customer?.name}</h1>
                    <div className="p-2 space-y-1 text-sm">
                        <p className={bill.status === 'Paid' ? 'text-green-600' : 'text-red-600'}>Status: {bill.status}</p>
                        <p>Bill Id: {bill.billId}</p>
                        <p>Date: {bill.date}</p>
                        <p>Time: {bill.time}</p>
                    </div>
                    <hr className="text-blue-600" />
                    <h1 className="font-bold p-2 text-center text-base text-blue-800 border-b-6 border-blue-800">Product List</h1>
                    <div className="p-2">
                        <div className="flex space-x-7 text-sm space-y-1 font-bold mt-2">
                            <p>Item Name</p>
                            <p>QTY</p>
                            <p>Rate</p>
                            <p>Total</p>
                        </div>
                        {bill.productSaled?.map((item) => (
                            <div key={item.name + item.rate} className="flex space-x-6 text-sm">
                                <p>{item.name}</p>
                                <p>{item.quantity}</p>
                                <p>{item.rate}</p>
                                <p>{item.total?.toFixed(2)}</p>
                            </div>
                        ))}
                    </div>
                    <hr className="text-blue-600" />
                    <h2 className="p-2 pr-4 mt-4 bg-gray-200 text-right text-red-600 font-bold">Total: ₹{bill.grandTotal?.toFixed(2)}</h2>
                </div>
            ))}
        </div>
        
    );
}