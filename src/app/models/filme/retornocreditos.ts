import { Crew } from './crew';
import { Cast } from './cast';

export class RetornoCreditos {
    id: number;
    cast: Cast[];
    crew: Crew[];
}