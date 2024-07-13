import React from "react";

const From = () => {
  // comp. k andar state initialize kiya ek object ke saath jisme firstname and lastName properties ha.

  const [name, setName] = useState({ firstName: "", lastName: "" });
// functions banao joh input fields mein changes ko handle karein,ya function bano jo state Object ko update kare.

const handleFirstNameChange  = (e)=>{
    setName((prevState)=>({
        ...prevState,
        firstName:e.target.value
    }))
}
onst handleLastNameChange  = (e)=>{
    setName((prevState)=>({
        ...prevState,
        lastName:e.target.value
    }))
}
  return (
    // RENDER
    <div>
        {/* form banaya jisme 2 input elements h */}
      <form>
        <input
          type="text"
          onChange={handleFirstNameChange}
          value={name.firstName}
          placeholder="first Name"
        ></input>

        <input
          type="text"
          onChange={handleLastNameChange}
          value={name.lastName}
          placeholder="last Name"
        ></input>
      </form>
      <h2> Your first name is : {name.firstName}</h2>
      <h2> Your last name is : {name.lasstName}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </div>
  );
};

export default From;
