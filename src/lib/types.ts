export interface ProductImage {
    url: string;
    thumbnail?: string;
    small?: string;
    medium?: string;
    large?: string;
}

export interface Feature {
    id: number;
    descripcion: string;
}

export interface Specification {
    id: number;
    nombre: string;
    detalle: string;
}

export interface Product {
    id: number;
    documentId: string;
    Nombre: string;
    Descripcion: string;
    Categoria: string;
    Precio: number;
    hayStock: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    features: Feature[];
    Imagen: ProductImage[];
    specifications: Specification[];
}

export interface StrapiResponse<T> {
    data: T[];
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}
