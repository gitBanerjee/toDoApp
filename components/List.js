import React, { Fragment } from "react";
import ListItem from "./ListItem";

function List(props) {
  let lists = <p>Nothing Found. Please Add one to begin with.</p>;
  if (props.data.length > 0) {
    lists = (
      <div>
        {props.data.map((el) => (
          <ListItem
            key={el.id}
            id={el.id}
            timestamp={el.timestamp}
            data={el.data}
            removeElement={props.remove}
          />
        ))}
      </div>
    );
  }
  return <Fragment>{lists}</Fragment>;
}

export default List;
