export interface ProviderItem {
    _id: string;
    iframeW: number;
    iframeH: number;
    order: number;
    name: string;
    provider: string;
    vendor: string;
    type: string;
    enabled: boolean;
    logo: string;
    tags: Array<string>;
    gamesCount: number;
}

export type Providers = {data: Array<ProviderItem> }