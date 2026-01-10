<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";
    import * as Button from "$lib/components/ui/button/index.js";
    import { Badge } from "$lib/components/ui/badge/index.js";
    import Send from "@lucide/svelte/icons/send";
    import type { Product } from "$lib/types";

    let { product }: { product: Product } = $props();

    function getImageUrl() {
        if (product.Imagen && product.Imagen.length > 0) {
            const img = product.Imagen[0];
            return img.medium || img.large || img.url;
        }
        return "https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=800&auto=format&fit=crop&q=60";
    }

    const whatsappNumber = "510000000";

    let message = $derived(
        product.hayStock
            ? `Hola, quiero consultar por este producto destacado: ${product.Nombre}. Precio: S/ ${product.Precio.toFixed(2)}`
            : `Hola, me gustaría consultar la disponibilidad del producto destacado: ${product.Nombre}. Actualmente figura como agotado.`,
    );
    let whatsappUrl = $derived(
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
    );
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

        <div class="absolute top-4 left-4 flex flex-col gap-2">
            {#if product.Categoria}
                <Badge
                    class="w-fit border-none bg-black/80 text-white backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-wider"
                >
                    {product.Categoria}
                </Badge>
            {/if}
        </div>

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

    <Card.Content class="flex flex-col gap-2 p-5">
        <h3
            class="text-lg font-bold text-foreground leading-tight min-h-12 line-clamp-2"
        >
            {product.Nombre}
        </h3>

        <div class="flex items-baseline gap-2">
            <span class="text-xl font-semibold text-foreground"
                >S/ {product.Precio.toFixed(2)}</span
            >
        </div>
    </Card.Content>

    <Card.Footer class="px-5 pb-5 pt-0">
        <Button.Root
            href={whatsappUrl}
            target="_blank"
            class="w-full gap-2 transition-all active:scale-95"
            variant="default"
        >
            <Send class="h-4 w-4" />
            {product.hayStock
                ? "Consultar WhatsApp"
                : "Consultar Disponibilidad"}
        </Button.Root>
    </Card.Footer>
</Card.Root>
