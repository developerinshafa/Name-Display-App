

export default function Input ({
    name,
    placeholder, 
    type ="test", 
    value, 
    onChange,
    required = true,
    ...rest
    })  {
    return (
        <input
            value={value} 
            name ={name} 
            id={name}
            type={type} 
            required ={required}
            placeholder={placeholder} 
            className="bg-blue-100 p-1 outline-gray-300" 
            onChange={onChange}
            {...rest}
        />

    )
}