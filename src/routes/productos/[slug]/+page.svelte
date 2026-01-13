<script lang="ts">
    import Navbar from "$lib/components/layout/navbar.svelte";
    import Footer from "$lib/components/layout/footer.svelte";
    import * as Button from "$lib/components/ui/button/index.js";
    import * as Carousel from "$lib/components/ui/carousel/index.js";
    import ChevronLeft from "@lucide/svelte/icons/chevron-left";
    import Send from "@lucide/svelte/icons/send";
    import type { Product } from "$lib/types";
    import { Skeleton } from "$lib/components/ui/skeleton/index.js";
    import { useWhatsApp } from "$lib/hooks/use-whatsapp";

    let { data }: { data: { productData: Promise<Product> } } = $props();
    const { getWhatsAppUrl } = useWhatsApp();

    function getImageUrl(product: Product) {
        if (product.Imagen && product.Imagen.length > 0) {
            const img = product.Imagen[0];
            return img.large || img.medium || img.url;
        }
        return "https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=800&auto=format&fit=crop&q=60";
    }
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

        {#await data.productData}
            <div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
                <Skeleton class="aspect-square w-full rounded-2xl" />
                <div class="flex flex-col gap-6">
                    <div class="space-y-4">
                        <Skeleton class="h-12 w-3/4" />
                        <Skeleton class="h-6 w-1/4" />
                        <Skeleton class="h-10 w-1/3" />
                    </div>
                    <div class="space-y-2 mt-4">
                        <Skeleton class="h-4 w-full" />
                        <Skeleton class="h-4 w-full" />
                        <Skeleton class="h-4 w-2/3" />
                    </div>
                    <Skeleton class="h-12 w-full mt-6" />
                </div>
            </div>
        {:then product}
            {@const message = product.hayStock
                ? `Hola, estoy interesado en el producto: ${product.Nombre}. Precio: S/ ${product.Precio.toFixed(2)}`
                : `Hola, me gustaría consultar la disponibilidad del producto: ${product.Nombre}. Actualmente figura como agotado.`}
            {@const whatsappUrl = getWhatsAppUrl(message)}

            <div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
                <div
                    class="relative aspect-square overflow-hidden rounded-2xl bg-muted"
                >
                    {#if product.Imagen && product.Imagen.length > 1}
                        <Carousel.Root class="w-full">
                            <Carousel.Content class="ml-0">
                                {#each product.Imagen as img}
                                    <Carousel.Item class="pl-0">
                                        <div class="aspect-square">
                                            <img
                                                src={img.large ||
                                                    img.medium ||
                                                    img.url}
                                                alt={product.Nombre}
                                                class="h-full w-full object-cover"
                                            />
                                        </div>
                                    </Carousel.Item>
                                {/each}
                            </Carousel.Content>
                            <Carousel.Previous
                                class="start-4 z-10"
                                variant="secondary"
                            />
                            <Carousel.Next
                                class="end-4 z-10"
                                variant="secondary"
                            />
                        </Carousel.Root>
                    {:else}
                        <img
                            src={getImageUrl(product)}
                            alt={product.Nombre}
                            class="h-full w-full object-cover"
                        />
                    {/if}
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
                            <p
                                class="text-lg font-medium text-muted-foreground"
                            >
                                {product.Categoria}
                            </p>
                        {/if}
                        <span class="text-4xl font-semibold text-foreground">
                            S/ {product.Precio.toFixed(2)}
                        </span>
                    </div>

                    <div class="max-w-prose">
                        <p
                            class="text-lg leading-relaxed text-muted-foreground"
                        >
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
                    <h2 class="mb-8 text-2xl font-bold text-foreground">
                        Features
                    </h2>
                    {#if product.features && product.features.length > 0}
                        <ul class="space-y-4">
                            {#each product.features as feature}
                                <li
                                    class="flex items-start gap-3 text-muted-foreground"
                                >
                                    <div
                                        class="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground"
                                    ></div>
                                    <span class="text-lg"
                                        >{feature.descripcion}</span
                                    >
                                </li>
                            {/each}
                        </ul>
                    {:else}
                        <p class="text-muted-foreground italic">
                            No hay características disponibles.
                        </p>
                    {/if}
                </div>

                <div>
                    <h2 class="mb-8 text-2xl font-bold text-foreground">
                        Specifications
                    </h2>
                    {#if product.specifications && product.specifications.length > 0}
                        <div class="space-y-0">
                            {#each product.specifications as spec}
                                <div
                                    class="flex justify-between border-b border-border py-4"
                                >
                                    <span class="font-medium text-foreground"
                                        >{spec.nombre}</span
                                    >
                                    <span class="text-muted-foreground"
                                        >{spec.detalle}</span
                                    >
                                </div>
                            {/each}
                        </div>
                    {:else}
                        <p class="text-muted-foreground italic">
                            No hay especificaciones disponibles.
                        </p>
                    {/if}
                </div>
            </div>
        {/await}
    </div>
</main>

<Footer />
