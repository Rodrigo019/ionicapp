import { Buy } from './buy';
import { Rent } from './rent';
import { Flatrate } from './flatrate';

export class RetornoWatchProviders {
    link: string;
    flatrate: Flatrate[];
    rent: Rent[];
    buy: Buy[];
    url: string;
}