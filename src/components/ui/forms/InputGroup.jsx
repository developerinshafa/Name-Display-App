import InputLabel from "./InputLabel";
import Input from "./Input";

export default function InputGroup ({
    label,
    id,
    name,
    placeholder,
    type ="text",
    value,
    onChange,
    required,
}) {
    return (
        <div className="mb-3 space-x-2 grid">
            <InputLabel htmlFor={name} > {label}</InputLabel>
            <Input 
            value={value} 
            name ={name} 
            id={id}
            placeholder={placeholder} 
            type={type} 
            required ={required}
            onChange={onChange}
            />    

        </div>
        
    );
}