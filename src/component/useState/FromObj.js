import React,{useState} from "react";

const FromObj = () => {
  // comp. k andar state initialize kiya ek object ke saath jisme firstname and lastName properties ha.

  const [name, setName] = useState({ firstName: "", lastName: "" });
// functions banao joh input fields mein changes ko handle karein,ya function bano jo state Object ko update kare.ye setName funtion ka use karte h state ko update karne ke liye,
// ...spread operator ka use karke exisiting state propertys ko copy karte hain aur specific property (firstname and lastName) ko new value ke sath overwrite karte hain.

const handleFirstNameChange  = (e)=>{
    setName((prevState)=>({
        ...prevState,
        firstName:e.target.value
    }))
}
const handleLastNameChange  = (e)=>{
    setName((prevState)=>({
        ...prevState,
        lastName:e.target.value
    }))
}

const {firstName,lastName} = name
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
      {/* display values and name object ko JSON string ke roop mein display karte h debugging ke liye */}
      <h2> Your first name is : {firstName}</h2>
      <h2> Your last name is : {lastName}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </div>
  );
};

/*
 
Conclusion:--

Is example se aapne seekha kaise ek object ko state variable ke roop mein useState hook ke sath use karte hain React mein. Humne spread operator ka use karke manually state updates ko merge kiya, taaki state object ke saare properties ko preserve kiya ja sake jab ek property update ho. Ye approach complex state structures ko manage karne mein madad karta hai functional components mein.

*/

export default FromObj;
