<script lang="ts">
    import Navbar from "$lib/components/layout/navbar.svelte";
    import * as Button from "$lib/components/ui/button/index.js";
    import { Badge } from "$lib/components/ui/badge/index.js";
    import ArrowRight from "@lucide/svelte/icons/arrow-right";
    import Lock from "@lucide/svelte/icons/lock";
    import Headphones from "@lucide/svelte/icons/headphones";
    import FeaturesCard from "$lib/components/catalog/features-card.svelte";
    import WhyChooseUs from "$lib/components/catalog/why-choose-us.svelte";
    import Footer from "$lib/components/layout/footer.svelte";
    import { Skeleton } from "$lib/components/ui/skeleton/index.js";
    import { useWhatsApp } from "$lib/hooks/use-whatsapp";

    let { data } = $props();

    const { getWhatsAppUrl } = useWhatsApp();
    const generalContactUrl = getWhatsAppUrl(
        "Hola, me gustaría saber más sobre ustedes.",
    );
</script>

<Navbar />

<main class="flex min-h-screen flex-col bg-background">
    <section class="relative overflow-hidden py-24 md:py-32">
        <div
            class="absolute inset-0 bg-linear-to-b from-muted to-background pointer-events-none"
        ></div>

        <div
            class="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/10 blur-[100px] opacity-40"
        ></div>

        <div
            class="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
            <div class="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
                <div class="flex flex-col justify-center space-y-8">
                    <div class="space-y-6">
                        <div class="flex items-center">
                            <Badge
                                variant="default"
                                class="flex gap-2 px-3 py-1 font-medium transition-colors"
                            >
                                <span>Nuevos productos</span>
                            </Badge>
                        </div>

                        <h1
                            class="font-display text-4xl leading-tight font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:leading-[1.1]"
                        >
                            La tienda en donde encuentras{" "}
                            <span
                                class="bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent"
                            >
                                lo que necesitas
                            </span>
                        </h1>

                        <p
                            class="max-w-700px text-lg text-muted-foreground md:text-xl"
                        >
                            Descubre una amplia variedad de productos de alta
                            calidad a precios competitivos. ¡Compra ahora!
                        </p>
                    </div>

                    <div class="flex flex-col gap-3 sm:flex-row">
                        <Button.Root
                            href="/productos"
                            class="group transition-all hover:scale-105 active:scale-95"
                        >
                            Ver Catalogo
                            <ArrowRight
                                class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                            />
                        </Button.Root>
                        <Button.Root
                            href={generalContactUrl}
                            target="_blank"
                            variant="outline">Contáctanos</Button.Root
                        >
                    </div>

                    <div
                        class="flex flex-wrap gap-5 text-sm text-muted-foreground"
                    >
                        <div
                            class="flex items-center gap-2 transition-colors hover:text-foreground"
                        >
                            <Lock class="h-4 w-4" />
                            <span>Seguro y confiable</span>
                        </div>
                        <div
                            class="flex items-center gap-2 transition-colors hover:text-foreground"
                        >
                            <Headphones class="h-4 w-4" />
                            <span>24/7 Soporte al cliente</span>
                        </div>
                    </div>
                </div>

                <div
                    class="relative mx-auto hidden aspect-square w-full max-w-md overflow-hidden rounded-2xl border bg-muted shadow-2xl lg:block"
                >
                    <div
                        class="absolute inset-0 z-10 bg-linear-to-tr from-primary/10 via-transparent to-transparent"
                    ></div>
                    <img
                        alt="Shopping experience"
                        class="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                        src="https://images.unsplash.com/photo-1624767735494-1929dc24ad43?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                    />
                </div>
            </div>
        </div>

        <div
            class="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent"
        ></div>
    </section>

    <section class="bg-background py-20">
        <div class="container mx-auto max-w-7xl px-4">
            <div class="mb-12 text-center">
                <h2 class="mb-2 text-3xl font-bold text-foreground md:text-4xl">
                    Productos Destacados
                </h2>
                <div
                    class="mx-auto mb-4 h-1 w-12 rounded-full bg-foreground"
                ></div>
                <p class="text-muted-foreground">
                    Nuestros productos mas populares y recomendados
                </p>
            </div>

            <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {#await data.featuredProductsData}
                    {#each Array(4) as _}
                        <div
                            class="flex flex-col gap-4 rounded-xl border p-0 overflow-hidden shadow-sm"
                        >
                            <Skeleton
                                class="aspect-square w-full rounded-none"
                            />
                            <div class="flex flex-col gap-3 p-5">
                                <Skeleton class="h-6 w-3/4" />
                                <Skeleton class="h-6 w-1/4 mt-1" />
                            </div>
                            <div class="p-6 pt-0">
                                <Skeleton class="h-10 w-full" />
                            </div>
                        </div>
                    {/each}
                {:then { products: featuredProducts }}
                    {#each featuredProducts as product}
                        <FeaturesCard {product} />
                    {:else}
                        <div class="col-span-full py-20 text-center">
                            <p class="text-muted-foreground text-lg">
                                No se encontraron productos disponibles.
                            </p>
                        </div>
                    {/each}
                {/await}
            </div>

            <div class="mt-12 text-center">
                <Button.Root href="/productos" variant="outline" class="group">
                    Ver todos los productos
                    <ArrowRight
                        class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                    />
                </Button.Root>
            </div>
        </div>
    </section>

    <WhyChooseUs />
</main>

<Footer />
