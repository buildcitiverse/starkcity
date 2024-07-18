// store/types.ts
export interface MetaCityItem {
    id: number;
    name: string;
    price: number;
    location: number,
    symbol: string;
    imgSymbol: string;
    address: string;
    network: string;
    description: string;
    x: number;
    y: number;
}

export interface MetaCityState {
    selectedItem: MetaCityItem | null;
}
