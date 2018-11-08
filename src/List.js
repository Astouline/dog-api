import React from "react";
import Breed from "./Breed";

const List = props => {
  return (
    <div>
      {props.breeds.map(breed => (
        <Breed breed={breed} key={breed} />
      ))}
      <p>Bonjour</p>
    </div>
  );
};
export default List;
