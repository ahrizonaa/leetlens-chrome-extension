import Toggle from '../classes/toggle';
import { Tab } from '../types/Tab';
import {
  AdjacencyList,
  AdjacencyMatrix,
  LinkedListArray,
  QueueArray,
  StackArray,
  TreeArray,
} from 'src/app/constants/Formats';

export const Tabs: Tab[] = [
  {
    title: 'Graph',
    formats: [AdjacencyList, AdjacencyMatrix],
    toggles: [new Toggle('Directed'), new Toggle('Weighted')],
    examples: [
      {
        title: 'Connected Components',
        dataset: [
          [0, 1],
          [1, 2],
          [3, 4],
        ],
        toggles: [new Toggle('Directed'), new Toggle('Weighted')],
        format: AdjacencyList,
      },
      {
        title: 'Find the Town Judge',
        dataset: [
          [1, 3],
          [2, 3],
          [3, 1],
        ],
        toggles: [new Toggle('Directed', true), new Toggle('Weighted')],
        format: AdjacencyList,
      },
      {
        title: 'If Path Exists',
        dataset: [
          [0, 1],
          [0, 2],
          [3, 5],
          [5, 4],
          [4, 3],
        ],
        toggles: [new Toggle('Directed'), new Toggle('Weighted')],
        format: AdjacencyList,
      },
    ],
  },
  {
    title: 'Tree',
    formats: [TreeArray],
    toggles: [new Toggle('BST'), new Toggle('MaxHeap'), new Toggle('MinHeap')],
    examples: [
      {
        title: 'Longest ZigZag Path',
        dataset: [
          1,
          null,
          1,
          1,
          1,
          null,
          null,
          1,
          1,
          null,
          1,
          null,
          null,
          null,
          1,
        ],
        toggles: [
          new Toggle('BST'),
          new Toggle('MaxHeap'),
          new Toggle('MinHeap'),
        ],
        format: TreeArray,
      },
      {
        title: 'Diameter of Binary Tree',
        dataset: [1, 2, 3, 4, 5],
        toggles: [
          new Toggle('BST'),
          new Toggle('MaxHeap'),
          new Toggle('MinHeap'),
        ],
        format: TreeArray,
      },
      {
        title: 'Symmetric Tree',
        dataset: [1, 2, 2, 3, 4, 4, 3],
        toggles: [
          new Toggle('BST'),
          new Toggle('MaxHeap'),
          new Toggle('MinHeap'),
        ],
        format: TreeArray,
      },
    ],
  },
  {
    title: 'Stack',
    formats: [StackArray],
    toggles: [new Toggle('Push', false, true), new Toggle('Pop', false, true)],
    examples: [],
  },
  {
    title: 'Queue',
    formats: [QueueArray],
    toggles: [
      new Toggle('Enqueue', false, true),
      new Toggle('Dequeue', false, true),
    ],
    examples: [],
  },
  {
    title: 'LinkedList',
    formats: [LinkedListArray],
    toggles: [new Toggle('Doubly')],
    examples: [
      {
        title: 'Reverse Linked List',
        dataset: [1, 2, 3, 4, 5],
        toggles: [new Toggle('Doubly')],
        format: LinkedListArray,
      },
      {
        title: 'Middle of Linked List',
        dataset: [1, 2, 3, 4, 5, 6],
        toggles: [new Toggle('Doubly')],
        format: LinkedListArray,
      },
      {
        title: 'Delete Middle Node of Linked List',
        dataset: [1, 3, 4, 7, 1, 2, 6],
        toggles: [new Toggle('Doubly')],
        format: LinkedListArray,
      },
    ],
  },
];
