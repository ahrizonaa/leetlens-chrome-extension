import Toggle from '../classes/toggle';
import { Format } from './Format';

export type Example = {
  title: string;
  dataset: any[];
  toggles: Toggle[];
  format: Format;
};
