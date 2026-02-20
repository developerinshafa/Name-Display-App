import { useState } from "react"

export default function CartItem({ item }) {
    const [quantity, setQuantity] = useState(1);

    return (
    <li className="grid justify-between items-center bg-blue-50 px-4 py-2 rounded w-250">
    <div className="grid items-center space-x-4">
        <img src={item.image} 
        alt={item.name} 
        className="object-cover"
        />
        <span className="text-xl p-2 font-semibold">{item.name}</span>
    </div>
    <div className="flex items-center space-x-14 bg-blue-200 text-black rounded font-semibold">
        <div className='space-x-2 p-2 '>
            <button className=' hover:bg-red-600 rounded-full text-xl px-2' 
            onClick={() => setQuantity(() => Math.max(1,quantity - 1))} 
            >
            -</button>
            <span className='mx-2'>{quantity}</span>
            <button className=' hover:bg-green-600 rounded-full text-xl px-2'
            onClick={() => setQuantity(quantity + 1)} 
            >+</button>
        </div>
        <span>RS: {item.price * quantity}</span>
    </div>
    </li>
    );
}
