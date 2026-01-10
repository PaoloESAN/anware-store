<script lang="ts">
    import Navbar from "$lib/components/layout/navbar.svelte";
    import Footer from "$lib/components/layout/footer.svelte";
    import * as Button from "$lib/components/ui/button/index.js";
    import { Badge } from "$lib/components/ui/badge/index.js";
    import * as Separator from "$lib/components/ui/separator/index.js";
    import ChevronLeft from "@lucide/svelte/icons/chevron-left";
    import Send from "@lucide/svelte/icons/send";
    import type { Product } from "$lib/types";

    let { data }: { data: { product: Product } } = $props();
    let product = $derived(data.product);

    function getImageUrl() {
        if (product.Imagen && product.Imagen.length > 0) {
            const img = product.Imagen[0];
            return img.large || img.medium || img.url;
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
</script>

<Navbar />

<main class="min-h-screen bg-background text-foreground pt-20 pb-12">
    <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
            <a
                href="/productos"
                class="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
                <ChevronLeft class="h-4 w-4" />
                Volver a Productos
            </a>
        </div>

        <div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div
                class="relative aspect-square overflow-hidden rounded-2xl bg-muted"
            >
                <img
                    src={getImageUrl()}
                    alt={product.Nombre}
                    class="h-full w-full object-cover"
                />
            </div>

            <div class="flex flex-col gap-6">
                <div class="flex flex-col gap-2">
                    <h1
                        class="text-4xl font-bold tracking-tight text-foreground lg:text-5xl"
                    >
                        {product.Nombre}
                    </h1>
                </div>

                <div class="flex flex-col items-baseline gap-3">
                    {#if product.Categoria}
                        <p class="text-lg font-medium text-muted-foreground">
                            {product.Categoria}
                        </p>
                    {/if}
                    <span class="text-4xl font-semibold text-foreground">
                        S/ {product.Precio.toFixed(2)}
                    </span>
                </div>

                <div class="max-w-prose">
                    <p class="text-lg leading-relaxed text-muted-foreground">
                        {product.Descripcion ||
                            "Sin descripción disponible para este producto."}
                    </p>
                </div>

                <p
                    class="text-sm font-medium {product.hayStock
                        ? 'text-green-600'
                        : 'text-red-600'}"
                >
                    {product.hayStock ? "En Stock" : "Agotado"}
                </p>

                <Button.Root
                    href={whatsappUrl}
                    target="_blank"
                    class="w-full text-sm font-semibold md:px-12"
                >
                    <Send class="h-5 w-5 mr-2" />
                    {product.hayStock
                        ? "Consultar por WhatsApp"
                        : "Consultar Disponibilidad"}
                </Button.Root>
            </div>
        </div>

        <div
            class="mt-20 grid grid-cols-1 gap-16 border-t pt-16 lg:grid-cols-2"
        >
            <div>
                <h2 class="mb-8 text-2xl font-bold text-white">Features</h2>
                {#if product.features && product.features.length > 0}
                    <ul class="space-y-4">
                        {#each product.features as feature}
                            <li class="flex items-start gap-3 text-zinc-400">
                                <div
                                    class="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-700"
                                ></div>
                                <span class="text-lg"
                                    >{feature.descripcion}</span
                                >
                            </li>
                        {/each}
                    </ul>
                {:else}
                    <p class="text-zinc-500 italic">
                        No hay características disponibles.
                    </p>
                {/if}
            </div>

            <div>
                <h2 class="mb-8 text-2xl font-bold text-white">
                    Specifications
                </h2>
                {#if product.specifications && product.specifications.length > 0}
                    <div class="space-y-0">
                        {#each product.specifications as spec}
                            <div
                                class="flex justify-between border-b border-zinc-800 py-4"
                            >
                                <span class="font-medium text-white"
                                    >{spec.nombre}</span
                                >
                                <span class="text-zinc-400">{spec.detalle}</span
                                >
                            </div>
                        {/each}
                    </div>
                {:else}
                    <p class="text-zinc-500 italic">
                        No hay especificaciones disponibles.
                    </p>
                {/if}
            </div>
        </div>
    </div>
</main>

<Footer />
