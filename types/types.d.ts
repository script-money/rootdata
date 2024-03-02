export declare const searchURL: string;
export interface SearchData {
    id: number;
    type: number;
    name: string;
    logo: string;
    introduce: string;
    rootdataurl: string;
}
export interface SearchResponse {
    data: SearchData[];
    result: number;
    message?: string;
}
