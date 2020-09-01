import React from "react";
import { useParams } from 'react-router-dom';

export default function Birds(props) {
  const params = useParams();
  console.log(params.name)

  const bird = props.birds.find((bird) => params.name === bird.name)

  if (!bird) {
    return <h3>The birds have migrated!</h3>
  }

  return (
    <div>
      <img src={bird.image}></img>
      <h3 className="view-header">{bird.name}</h3>
      <h5 className="view-genus">{bird.genus}</h5>
      <h4 className="view-conservation-title">Conservation status</h4>
      <p className="view-conservation-description">{bird.conservationStatus}</p>
    </div>
  );
}
