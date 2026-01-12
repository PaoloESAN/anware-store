import { json } from '@sveltejs/kit';
import { BYPASS_TOKEN } from '$env/static/private';

export const POST = async ({ request, fetch }) => {
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${BYPASS_TOKEN}`) {
        return json({ message: 'No autorizado' }, { status: 401 });
    }

    let body;
    try {
        body = await request.json();
    } catch (e) {
        return json({ message: 'Cuerpo de petición inválido' }, { status: 400 });
    }

    const { model, entry, event } = body;

    const paths = ['/', '/productos'];

    const slug = entry?.slug || entry?.attributes?.slug;

    if ((model === 'producto' || model === 'productos') && slug) {
        paths.push(`/productos/${slug}`);
    }

    const revalidate = async (path: string) => {
        const url = new URL(path, request.url);
        return fetch(url.href, {
            method: 'GET',
            headers: {
                'x-prerender-revalidate': BYPASS_TOKEN
            }
        });
    };

    try {
        const results = await Promise.all(paths.map((path) => revalidate(path)));

        const success = results.every((r) => r.ok);

        return json({
            success,
            paths,
            details: results.map((r) => ({
                path: r.url,
                status: r.status,
                ok: r.ok
            }))
        });
    } catch (err: any) {
        console.error('Error durante la revalidación:', err);
        return json({ success: false, error: err.message }, { status: 500 });
    }
};
