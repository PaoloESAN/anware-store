import { STRAPI_API_URL } from '$env/static/private';
import type { PageServerLoad } from './$types';
import type { Product, StrapiResponse } from '$lib/types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ fetch, params }) => {
    const slug = params.slug;

    const query = new URLSearchParams({
        'filters[slug][$eq]': slug,
        'populate[features][populate]': '*',
        'populate[Imagen][populate]': '*',
        'populate[specifications]': '*'
    });

    const url = `${STRAPI_API_URL}/api/productos?${query.toString()}`;

    const res = await fetch(url);

    if (!res.ok) {
        throw error(404, 'Error al conectar con la base de datos');
    }

    const response: StrapiResponse<Product> = await res.json();
    const product = response.data?.[0];

    if (!product) {
        throw error(404, 'Producto no encontrado');
    }

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

    return {
        product
    };
};
