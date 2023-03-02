export interface SlotGame {
    game_id: number;
    name: string;
    provider: string;
    image: string;
    url: string;
    order: number;
    tags: Array<string>;
    gameId: number;
    image2: string;
}

export interface SlotItemProvider {
    type: string;
    provider: string;
    iframeW: string;
    iframeH: string;
    name: string;
    order: number;
    tags: Array<string>;
    games: Array<SlotGame>;
}

export type SlotsByProvider = {data: SlotItemProvider }
