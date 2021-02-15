import { Result } from './result';

export interface RetornoReviews {
    id: number;
    page: number;
    results: Result[];
    total_pages: number;
    total_results: number;
}