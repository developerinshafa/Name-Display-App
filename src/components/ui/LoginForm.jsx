import { useEffect, useState } from "react"
import Input from "./forms/Input";
import InputLabel from "./forms/InputLabel";
import InputGroup from "./forms/InputGroup";

export default function LoginForm (){
    // const[firstName, setFirstName] = useState("Fathima");
    // const[lastName, setLastName] = useState("Inshafa");
    // const [email, SetEmail] = useState("");

    const [formData, setFormData] = useState({
        fullName: "",
        id: "",
        billId: "",
        date: "",
        time:"",
        status: "unpaid",
        products:[
            {productName:"", qty: 1, price: 0, total: 0}
        ]
    });

    function handleInputChange(e){
        // console.dir(e.target.value);
        const { name, value } = e.target;
        setFormData({...formData, [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();


        // send formData to server api using fetch

            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
            "_id": formData.id,
            "productSaled": [
            {
      "name": "Milky Mist Buttermilk",
      "quantity": "3.45",
      "rate": 64,
      "measurementType": "Volume-Based",
      "uid": "174",
      "total": 220.8
    },
    {
      "name": "Milky Mist Ghee",
      "quantity": "3.65",
      "rate": 95,
      "measurementType": "Volume-Based",
      "uid": "172",
      "total": 346.75
    }
  ],
  "customer": {
    "name": formData.fullName,
    "uniqueId": formData.id
  },
  "grandTotal": 567.55,
  "status": formData.status,
  "billId": formData.billId,
  "date": formData.date,
  "time": formData.time,
  "__v": 0
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw
};
            fetch("https://mimic-server-api.vercel.app/bills", requestOptions)
            .then(response => response.text())
            .then(result => {console.log(result);
                alert("Form submitted", formData);
                
            }
            );

        console.log("form Submitted",formData);
    }

    // current date and time add painrathukku
    useEffect(() => {
       const now = new Date();

        const formattedDate = now.toISOString().split("T")[0];
        const formattedTime = now.toTimeString().slice(0,5);

        setFormData(prev => ({
            ...prev,
            date: formattedDate,
            time: formattedTime
        }));
}, []);

    function handleProductChange(index, e) {
        const { name, value } = e.target;

        const updatedProducts = [...formData.products];

        updatedProducts[index][name] = value;

        // Auto calculate total
        const qty = Number(updatedProducts[index].qty);
        const price = Number(updatedProducts[index].price);
        updatedProducts[index].total = qty * price;

        setFormData({...formData, products: updatedProducts
        });
    }

        function addProduct() {
        setFormData({...formData, products: [
         ...formData.products,
         { productName: "", qty: 1, price: 0, total: 0 }
            ]
            });

        }

        
    
    return (
        <>
        <div className="bg-white p-4 rounded shadow">
            <div className="px-20 py-1">
                <h1 className="text-2xl font-bold ms-6 p-2">{formData.fullName.length > 3 ? `Welcome ${formData.fullName}! Have a great day 😊` : "Login Forms in React."}
                </h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 ">
                <div className="space-y-2 grid grid-cols-2 gap-4 ">
                    {/* First Name  */}
                    <InputGroup 
                    label="Full Name"
                    name="fullName"
                    placeholder="Enter your Full Name"
                    type="text"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    />

                    {/* ID Input Function */}
                    <InputGroup 
                    label="Id"
                    name="id"
                    placeholder="Enter your  ID"
                    type="text"
                    value={formData.id}
                    onChange={handleInputChange}
                    />

                    {/* bill id */}
                     <InputGroup 
                    label="billId"
                    name="billId"
                    placeholder="Enter your Bill ID"
                    type="text"
                    value={formData.billId}
                    onChange={handleInputChange}
                    />

                     <div className="mb-3">
                        <label className="font-semibold">Status</label>

                        <select
                        name="status"
                        value={formData.status}
                        onChange={handleInputChange}
                        className="w-full border p-1 bg-blue-50 rounded"
                        >
                            <option value="paid">Paid</option>
                            <option value="unpaid">Unpaid</option>
                        </select>
                    </div>

                    {/* Current time */}
                    <InputGroup 
                    label="time"
                    name="time"
                    placeholder=""
                    type="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    />

                    {/* current date */}
                    <InputGroup 
                    label="date"
                    name="date"
                    placeholder=""
                    type="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    />

                    {/* product List add */}
                    <div className="col-span-2 mt-4">
                        <h2 className="font-bold text-lg bg-red-400 text-center">Products</h2>

                        {formData.products.map((product, index) => (
                        <div key={index} className="grid grid-cols-4 gap-2 mt-2">

                            <input
                            type="text"
                            name="productName"
                            placeholder="Product Name"
                            value={product.productName}
                            onChange={(e) => handleProductChange(index, e)}
                            className="border border-gray-200 p-1"
                            />

                            <input
                            type="number"
                            name="qty"
                            min="0"
                            placeholder="Qty"
                            value={product.qty}
                            onChange={(e) => handleProductChange(index, e)}
                            className="border border-gray-200 p-1"
                            />

                            <input
                            type="number"
                            name="price"
                            placeholder="Price"
                            value={product.price}
                            onChange={(e) => handleProductChange(index, e)}
                            className="border border-gray-200 p-1"
                            />

                            <input
                            type="number"
                            name="total"
                            value={product.total}
                            readOnly
                            className="border border-gray-200 p-1 bg-gray-200"
                            />

                        </div>
                        ))}
                        <div className="col-span-2 mt-4 font-bold">
                        Grand Total: Rs.{" "}
                        {formData.products.reduce((sum, item) => sum + item.total, 0)}
                        </div>

                        <button
                        type="button"
                        onClick={addProduct}
                        className="mt-3 bg-green-600 text-white px-3 py-1 rounded"
                        >
                        + Add Product
                        </button>
                    </div>
                
                    <button 
                    // type="submit" 
                    className={"bg-blue-700 text-white font-semibold p-2 w-full rounded  disabled:bg-blue-500 disabled:cursor-not-allowed col-span-2"
                    }
                    // button disabied function - not data enter
                    disabled = {
                    formData.fullName.length < 3 ||  
                    formData.id.length < 5  
                    }
                    >
                    Submit
                    </button>
                </div>
            </form>
            
            <div className="my-5 p-2 bg-gray-200">
                <pre>
                    My Default value is: {formData.fullName},{formData.id},
                    <br />
                    My Default obj is: {JSON.stringify(formData)}
                </pre>
            </div>
        </div>
        </>
    )
}