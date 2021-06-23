import React from "react";
import { Toast } from "react-bootstrap";

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function ListItem(props) {
  function removeToast() {
    props.removeElement(props.id);
  }
  return (
    <Toast onClose={removeToast}>
      <Toast.Header>
        <strong className="mr-auto">
          {weekday[new Date().getUTCDay()]} : {new Date().toLocaleDateString()}
        </strong>
        <small>{props.timestamp}</small>
      </Toast.Header>
      <Toast.Body>{props.data}</Toast.Body>
    </Toast>
  );
}

export default ListItem;
