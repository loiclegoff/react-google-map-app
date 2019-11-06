export interface Poi {
    id: number;
    name: string;
    description: string;
    longitude: number;
    latitude: number;
    adress: string; // TODO: replace by address
    phone: string;
    website: string;
    email: string;
    audience: string;
    validated: boolean;
    category_id: number;
    category: Category
}

interface Category {
    id: number;
    name: string
}