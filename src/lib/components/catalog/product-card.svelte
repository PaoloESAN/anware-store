<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";
    import * as Button from "$lib/components/ui/button/index.js";
    import { Badge } from "$lib/components/ui/badge/index.js";
    import ShoppingCart from "@lucide/svelte/icons/shopping-cart";
    import type { Product } from "$lib/types";

    let { product }: { product: Product } = $props();

    function getImageUrl() {
        if (product.Imagen && product.Imagen.length > 0) {
            const img = product.Imagen[0];
            return img.medium || img.large || img.url;
        }
        return "https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=800&auto=format&fit=crop&q=60";
    }
</script>

<Card.Root
    class="group overflow-hidden border border-border/50 bg-card p-0 gap-0 transition-all hover:border-primary/50"
>
    <div class="relative aspect-square overflow-hidden bg-muted">
        <img
            src={getImageUrl()}
            alt={product.Nombre}
            class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {#if product.Categoria}
            <div class="absolute top-4 left-4">
                <Badge
                    class="border-none bg-black/80 text-white backdrop-blur-md px-3 py-1 font-medium"
                >
                    {product.Categoria}
                </Badge>
            </div>
        {/if}

        {#if !product.hayStock}
            <div
                class="absolute inset-0 bg-background/60 flex items-center justify-center backdrop-blur-[2px]"
            >
                <Badge variant="destructive" class="text-lg py-1 px-4"
                    >Agotado</Badge
                >
            </div>
        {/if}
    </div>

    <Card.Content class="flex flex-col gap-4 p-5">
        <h3
            class="text-xl font-bold text-foreground leading-tight min-h-12 line-clamp-2"
        >
            {product.Nombre}
        </h3>

        <div class="flex items-baseline gap-2">
            <span class="text-2xl font-medium text-foreground"
                >S/ {product.Precio.toFixed(2)}</span
            >
        </div>
    </Card.Content>

    <Card.Footer class="px-5 pb-4 pt-0">
        <Button.Root
            class="w-full gap-2 transition-all active:scale-95"
            variant={product.hayStock ? "default" : "secondary"}
            disabled={!product.hayStock}
        >
            <ShoppingCart class="h-5 w-5" />
            {product.hayStock ? "Ver detalles" : "Sin stock"}
        </Button.Root>
    </Card.Footer>
</Card.Root>
