import React from "react";

const UserProfile = ({ user }) => {
    // console.log(user);
  const {
    gender,
    name: { title, first, last },
    location: { city, state, country },
    email,
    picture: { large },
  } = user;

  return <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px' }}>
      <img src={large} alt={`${first} ${last}`} style={{ width: '100px', borderRadius: '50%' }} />
      <h2>{`${title} ${first} ${last}`}</h2>
      <p>{`Gender: ${gender}`}</p>
      <p>{`Location: ${city}, ${state}, ${country}`}</p>
      <p>{`Email: ${email}`}</p>
    </div>
}
export default UserProfile;
