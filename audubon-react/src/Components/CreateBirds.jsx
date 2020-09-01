import React, { useState } from "react";
// import styled from 'styled-components'

export default function CreateBirds(props) {
  const [name, setName] = useState("");
  const [genus, setGenus] = useState("");
  const [image, setImage] = useState("");
  const [homepage, setHomepage] = useState("");
  const [conservationStatus, setConservationStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setBirds(prevBirds => {
      return [...prevBirds, {
        name,
        genus,
        image,
        homepage,
        conservationStatus
      }];
    })
    // want to return to home page
  }

  // const AddBirdContainer = styled.div`
  //   display: flex;
  //   flex-direction: column;
  //   width: 375px;
  //   justify-content: center;
  //   margin: 75px auto;
  //   color: #595757;
  // `

  return (
    <div className="add-bird-container">
      <h3>Add a new Bird</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          type="text"
          value={name} 
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="genus">Genus</label>
        <input
          name="genus"
          type="text"
          value={genus} 
          onChange={(e) => setGenus(e.target.value)}
        />
        <label htmlFor="image">Image</label>
        <input
          name="image"
          type="text"
          value={image} 
          onChange={(e) => setImage(e.target.value)}
        />
        <label htmlFor="homepage">Homepage</label>
        <input
          name="homepage"
          type="text"
          value={homepage} 
          onChange={(e) => setHomepage(e.target.value)}
        />
        <label htmlFor="conservation-status">Conservation status</label>
        <textarea
          name="conservation-status"
          rows="6"
          cols="41"
          value={conservationStatus} 
          onChange={(e) => setConservationStatus(e.target.value)}
        />
        <button className="add-bird-button" type="submit">Submit</button>
      </form> 
    </div>
  )
}
