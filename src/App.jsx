import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import CartItem from './components/cart/CartItem';

function App() {
  const [userName, setUserName] = useState("Fathima Inshafa");
  const [message, setMessage] = useState("");


  // console.log(userName);

  return (
    <>
     <Header user={userName} setUserName={setUserName} />
     
     <div className='p-8 bg-blue-950 text-white ml-100 mr-100 mt-20 rounded-xl'>
      <div className='text-center'>
        <h1 className='flex text-center justify-center text-3xl font-bold p-2 mt-3 mb-4' 
        onClick={() => setMessage(`Welcome ${userName}! Have a great day 😊`)}>
          💐 Hello {userName}!</h1>
          {message && (
          <p className="mt-4 p-4 text-2xl text-white font-semibold">
            {message}
          </p>
          )}
          <input
          type="text"
          placeholder='Enter your Name?'
          className='bg-blue-50 text-gray-900 p-2 border border-gray-400 rounded'
          onChange={(event) => {
            const value = event.target.value;
            if (value.length > 3) {
            setUserName(value);
            setMessage(`Welcome ${value}! Have a great day 😊`);
            } 
            else {
            setMessage(""); // clear message if name is too short
            }
          }}
        />
      </div>
     </div>

     {/* build a card with items*/}
     <section className='mt-5 mb-10 '>
      <h1 className='text-3xl font-bold mb-4 text-center text-blue-900 '>Dinner Time</h1>
      <div className='p-4 rounded w-full px-20'>
        <ul className='space-x-4 flex'>
          <CartItem item = {{image: 'https://static.toiimg.com/thumb/53096628.cms?imgsize=104874&width=800&height=800',
             name: "Chicken Briyani", 
             price: 400}}/>
          <CartItem item = {{image:'https://www.awesomecuisine.com/wp-content/uploads/2012/11/Chettinad-Mutton-Biryani.jpg' , 
            name: "Mutton Briyani", 
            price: 500}}/>
          <CartItem item = {{image: 'https://yellowchilis.com/wp-content/uploads/2021/01/prawn-biryani-recipe-shrim-biryani-in-one-pot-eral-biriyani.jpg',
             name: "Prawn Briyani", 
             price: 300}}/>
          <CartItem item = {{image: 'https://www.flavourstreat.com/wp-content/uploads/2024/07/vegetable-fried-rice-recipe-001.jpg', 
            name: "Fried Rice", 
            price: 500}}/>
          <CartItem item = {{image: 'https://valampuri.foodorders.lk/images/food/phpo4qaR3.jpg',
            name: "Nasikura", 
            price: 600}}/>
        </ul>
      </div>
     </section>
    </>
  )
}

export default App
