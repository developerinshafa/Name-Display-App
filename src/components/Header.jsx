const Header = ({user, setUserName }) => {
    return [
    <header className='bg-blue-950 text-white font-semibold text-2xl p-2'>
    <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h3 className="font-semibold text-orange-400 p-2">{user}</h3>
        <ul className="flex items-center justify-center font-semibold gap-7 ">
            <li>
                <a href="#" className="hover:text-orange-400 p-2">Home</a>
            </li>
            <li> 
                <a href="#" className="hover:text-orange-400 p-2">About</a>
            </li>
            <li>
                <a href="#" className="hover:text-orange-400 p-2">Place</a>
            </li>
            <li> 
                <a href="#" className="hover:text-orange-400 p-2">Contect</a> 
            </li>
            
            <select 
            className="p-2 bg-blue-900 border rounded w-full"
            onChange={(event) => 
                // alert("Hey you have clicked me")
                // console.log(e.target.value)
                setUserName(event.target.value)}
          >
            <option value="Fathima Inshafa">Fathima Inshafa</option>
            <option value="Ajith">Ajith</option>
            <option value="Anbu">Anbu</option>
            <option value="Nayanthara">Nayanthara</option>
            <option value="Jothika">Jothika</option>
          </select>
    </ul>
    </div>
    </header>
]; 
};


export default Header;