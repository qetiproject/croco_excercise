import { SlotGame } from "./slot.interface";

export interface CategoryItem {
    type: string;
    category: string;
    platform: string;
    name: string;
    order: number;
    games: Array<SlotGame>;
    totalGames: number;
}

export type Categories = {data: Array<CategoryItem> }