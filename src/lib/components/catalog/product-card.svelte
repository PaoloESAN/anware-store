<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";
    import * as Button from "$lib/components/ui/button/index.js";
    import { Badge } from "$lib/components/ui/badge/index.js";
    import Send from "@lucide/svelte/icons/send";
    import type { Product } from "$lib/types";
    import { slugify } from "$lib/utils";

    let { product }: { product: Product } = $props();
    let isInWishlist = $state(false);

    function getImageUrl() {
        if (product.Imagen && product.Imagen.length > 0) {
            const img = product.Imagen[0];
            return img.medium || img.large || img.url;
        }
        return "https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=800&auto=format&fit=crop&q=60";
    }

    const whatsappNumber = "5100000";
    let message = $derived(
        product.hayStock
            ? `Hola, estoy interesado en el producto: ${product.Nombre}. Precio: S/ ${product.Precio.toFixed(2)}`
            : `Hola, me gustaría consultar la disponibilidad del producto: ${product.Nombre}. Actualmente figura como agotado.`,
    );
    let whatsappUrl = $derived(
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
    );

    const productSlug = $derived(slugify(product.Nombre));

    function toggleWishlist(e: MouseEvent) {
        e.preventDefault();
        e.stopPropagation();
        isInWishlist = !isInWishlist;
    }
</script>

<div class="group h-full">
    <Card.Root
        class="relative h-full overflow-hidden rounded-xl p-0 transition-all hover:border-primary/50"
    >
        <div
            class="flex h-full flex-col transition-all duration-300 {!product.hayStock
                ? 'blur-md grayscale-[0.5] opacity-50'
                : ''}"
        >
            <a href="/productos/{productSlug}" class="flex flex-col">
                <div
                    class="relative aspect-square overflow-hidden bg-zinc-100 dark:bg-zinc-900"
                >
                    <img
                        src={getImageUrl()}
                        alt={product.Nombre}
                        class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {#if product.Categoria}
                        <div class="absolute top-4 left-4">
                            <Badge
                                variant="secondary"
                                class="bg-zinc-900/80 px-3 py-1 text-[11px] font-bold tracking-tight text-white backdrop-blur-md dark:bg-black/80"
                            >
                                {product.Categoria}
                            </Badge>
                        </div>
                    {/if}
                </div>

                <Card.Content class="flex flex-col gap-2 p-5">
                    <h3
                        class="text-lg font-bold text-foreground leading-tight min-h-12 line-clamp-2"
                    >
                        {product.Nombre}
                    </h3>

                    <div class="flex items-baseline gap-2">
                        <span class="text-xl font-bold text-foreground"
                            >S/ {product.Precio.toFixed(2)}</span
                        >
                    </div>
                </Card.Content>
            </a>

            <div class="mt-auto p-6 pt-0">
                <Button.Root href={whatsappUrl} target="_blank" class="w-full">
                    <Send class="h-4 w-4" />
                    {product.hayStock
                        ? "Consultar WhatsApp"
                        : "Consultar Disponibilidad"}
                </Button.Root>
            </div>
        </div>

        {#if !product.hayStock}
            <div
                class="absolute inset-0 z-20 pointer-events-none flex items-center justify-center p-4 bg-black/20"
            >
                <Badge
                    variant="destructive"
                    class="px-5 py-2 text-sm font-black tracking-widest shadow-2xl bg-[#7f1d1d]/90 text-white border-none"
                >
                    Agotado
                </Badge>
            </div>
        {/if}
    </Card.Root>
</div>
