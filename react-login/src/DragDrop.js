import React from 'react';
import boat from './boat.png';
import math from './math.png';
import drawing from './drawing.png';
import Picture from './Picture';
import { useDrop } from 'react-dnd';
import { useState } from 'react';

const PictureList = [
  {
    id: 1,
    path: { boat },
  },
  {
    id: 2,
    upath: { math },
  },
  {
    id: 3,
    path: { drawing },
  },
];

function DragDrop() {
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'image',
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    const pictureList = PictureList.filter((picture) => id === picture.id);
    setBoard((board) => [...board, pictureList[0]]);
  };

  return (
    <div>
      <div classsName="Pictures">
        {PictureList.MAP((picture) => {
          return <Picture path={picture.path} id={picture.id} />;
        })}
      </div>

      <div className="Board" ref={drop}>
        {board.map((picture) => {
          return <Picture path={picture.path} id={picture.id} />;
        })}
      </div>
    </div>
  );
}

export default DragDrop;
