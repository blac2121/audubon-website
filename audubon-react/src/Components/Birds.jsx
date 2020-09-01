import React from "react";
import { useParams } from 'react-router-dom';

export default function Birds(props) {
  const params = useParams();
  console.log(params.name)

  const bird = props.birds.find((bird) => params.name === bird.name);

  if (!bird) {
    return <h3>The birds have migrated!</h3>
  }

  return (
    <div className="view-main-container">
      <div className="view-left-container">
        <img className="img-view" src={bird.image}></img>
      </div>
      <div className="view-right-container">
        <div><h3 className="view-header">{bird.name}</h3></div>
        <div><h6 className="view-genus">({bird.genus})</h6></div>
        <div><h4 className="view-conservation-title">Conservation status</h4></div>
        {bird.conservationStatus === "" ? <h5 className="No-details">No conservation details</h5> :
          <div><p className="view-conservation-description">{bird.conservationStatus}</p></div>
        }
        <div><button className="read-more-button"><a target="_blank" href={bird.homepage}>Read More</a></button></div>                  
      </div>       
    </div>
  );
}
