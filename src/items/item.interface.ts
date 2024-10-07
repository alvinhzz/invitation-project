export interface BaseItem{
    name: string;
    comment: string;
    createdat: string;
}

export interface Item extends BaseItem{
    id: number;
}