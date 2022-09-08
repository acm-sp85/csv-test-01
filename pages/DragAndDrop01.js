import React, { Component } from 'react';
import { Container, Draggable } from 'react-smooth-dnd';

function DragAndDrop01({ data }) {
  const onDrop = (e) => {
    console.log(e);
  };
  return (
    <div>
      <Container onDrop={onDrop}>
        {data.map((info) => {
          return <Draggable key={info.ID}>{info.FESTIVALS2022}</Draggable>;
        })}
      </Container>
    </div>
  );
}

export default DragAndDrop01;
