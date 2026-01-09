import { STRAPI_API_URL } from '$env/static/private';
import type { PageServerLoad } from './$types';
import type { Product, StrapiResponse } from '$lib/types';

export const load: PageServerLoad = async ({ fetch, url: requestUrl }) => {
    const page = requestUrl.searchParams.get('page') || '1';
    const pageSize = '8';

    const url = `${STRAPI_API_URL}/api/productos?populate[features][populate]=*&populate[Imagen][populate]=*&populate[specifications]=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;
    const res = await fetch(url);

    if (!res.ok) {
        return {
            products: [],
            pagination: {
                page: 1,
                pageSize: 8,
                pageCount: 0,
                total: 0
            }
        };
    }

    const response: StrapiResponse<Product> = await res.json();

    const rawData = response.data || [];

    const products: Product[] = rawData.map((product: any) => {
        if (product.Imagen && product.Imagen.length > 0) {
            product.Imagen = product.Imagen.map((img: any) => {
                const addPrefix = (url: string) => url ? (url.startsWith('http') ? url : `${STRAPI_API_URL}${url}`) : '';

                return {
                    url: addPrefix(img.url),
                    thumbnail: addPrefix(img.formats?.thumbnail?.url),
                    small: addPrefix(img.formats?.small?.url),
                    medium: addPrefix(img.formats?.medium?.url),
                    large: addPrefix(img.formats?.large?.url)
                };
            });
        }
        return product as Product;
    });

    return {
        products,
        pagination: response.meta.pagination
    };
};