import { useState } from "react"

export default function CartItem({ item }) {
    const [quantity, setQuantity] = useState(1);

    return (
    <li className="grid justify-between items-center bg-blue-50 border-b-8 border-l-8 border-blue-950 inset-shadow-sm inset-shadow-blue-700 shadow-xl shadow-blue-700/50 px-4 py-2 rounded ">
    <div className="grid items-center space-x-4">
        <img src={item.image} 
        alt={item.name} 
        className="object-cover transition-transform duration-300 hover:scale-110"
        />
        <span className="text-xl p-2 font-semibold">{item.name}</span>
    </div>
    <div className="flex items-center space-x-14 bg-blue-200 text-black rounded font-semibold">
        <div className='space-x-2 p-2 '>
            <button className=' hover:bg-red-500 rounded-full text-xl p-2' 
            onClick={() => setQuantity(() => Math.max(1,quantity - 1))} 
            >
            -</button>
            <span className='p-2'>{quantity}</span>
            <button className=' hover:bg-green-600 rounded-full text-xl p-2'
            onClick={() => setQuantity(quantity + 1)} 
            >+</button>
        </div>
        <span>RS: {item.price * quantity}</span>
    </div>
    </li>
    );
}
