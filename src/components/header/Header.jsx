import NameList from './NameList';

const Header = ({user, setUserName }) => {
    const NameList = ({person}) => {
        return(
            <option value = {person.value} > {person.name}</option>
        );
    }
    return [
    <header className='bg-blue-950 text-white font-semibold text-2xl p-2 max-sm'>
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
            value={user}
            className="p-2 bg-blue-900 border rounded w-full"
            onChange={(event) => 
                // alert("Hey you have clicked me")
                // console.log(e.target.value)
                setUserName(event.target.value)}
          >
            <option value="">Select Option</option>
            <NameList person = {{value:"Fathima Inshafa", name:"Fathima Inshafa"}}/>
            <NameList person = {{value:"Suriya", name:"Suriya"}}/>
            <NameList person = {{value:"Jothika", name:"Jothika"}}/>
            <NameList person = {{value:"Anbu", name:"Anbu"}}/>
            <NameList person = {{value:"Nayanthara", name:"Nayanthara"}}/>
            <NameList person = {{value:"Trisha", name:"Trisha"}}/>

            {/* <option value="Suriya"> Suriya</option> */}
            {/* <option value="Ajith">Ajith</option>
            <option value="Anbu">Anbu</option>
            <option value="Nayanthara">Nayanthara</option>
            <option value="Jothika">Jothika</option> */}
          </select>
    </ul>
    </div>
    </header>
]; 
};


export default Header;