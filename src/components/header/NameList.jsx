const NameList = ({person}) => {
    return(
        <>
        <option value={person.value} > name={person.name}</option>
        {/* <option value="Ajith">Ajith</option>
        <option value="Anbu">Anbu</option>
        <option value="Nayanthara">Nayanthara</option>
        <option value="Jothika">Jothika</option> */}
        </>
    );
};

export default NameList;