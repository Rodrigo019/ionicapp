import { Filme } from 'src/app/models/filme/filme';
export class RetornoFilmes 
{
    page: number;
    results: Filme[];
    total_pages: number;
    total_results: number;
}