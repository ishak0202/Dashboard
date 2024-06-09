import React from 'react';
import Board from 'react-trello';

const data = {
  lanes: [
    {
      id: 'todo',
      title: 'To Do',
      cards: [
        { id: 'task1', title: 'Task 1', description: 'Task 1 description' },
        { id: 'task2', title: 'Task 2', description: 'Task 2 description' },
      ],
    },
    {
      id: 'inProgress',
      title: 'In Progress',
      cards: [
        { id: 'task3', title: 'Task 3', description: 'Task 3 description' },
      ],
    },
    {
      id: 'done',
      title: 'Done',
      cards: [
        { id: 'task4', title: 'Task 4', description: 'Task 4 description' },
      ],
    },
  ],
};

const KanbanComponent = () => {
  return <Board data={data} draggable />;
};

export default KanbanComponent;
