import { Part } from '../models/part/Part';

export const partsFromLocalStore = (): Part[] => {
  const ps = localStorage.getItem('parts');
  return JSON.parse(ps ? ps : '[]');
};
