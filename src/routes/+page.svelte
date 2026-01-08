<script lang="ts">
    import Navbar from "$lib/components/layout/navbar.svelte";
    import * as Button from "$lib/components/ui/button/index.js";
    import { Badge } from "$lib/components/ui/badge/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import ArrowRight from "@lucide/svelte/icons/arrow-right";
    import Lock from "@lucide/svelte/icons/lock";
    import Headphones from "@lucide/svelte/icons/headphones";
    import ShoppingCart from "@lucide/svelte/icons/shopping-cart";
    //import Heart from "@lucide/svelte/icons/heart";

    const featuredProducts = [
        {
            name: "Premium Wireless Headphones",
            category: "Audio",
            price: 199.99,
            oldPrice: 249.99,
            discount: "20% OFF",
            rating: 4.5,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60",
        },
        {
            name: "Smart Watch Series 5",
            category: "Wearables",
            price: 299.99,
            oldPrice: 349.99,
            discount: "14% OFF",
            rating: 4.2,
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60",
        },
        {
            name: "Smartphone Pro Max",
            category: "Smartphones",
            price: 999.99,
            oldPrice: 1099.99,
            discount: "9% OFF",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=60",
        },
        {
            name: "Bluetooth Earbuds Pro",
            category: "Audio",
            price: 149.99,
            oldPrice: 179.99,
            discount: "17% OFF",
            rating: 4.4,
            image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=500&auto=format&fit=crop&q=60",
        },
    ];
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
                                class="flex gap-2 px-3 py-1 font-medium transition-colors hover:bg-muted"
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
                            class="group transition-all hover:scale-105 active:scale-95"
                        >
                            Ver Catalogo
                            <ArrowRight
                                class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                            />
                        </Button.Root>
                        <Button.Root variant="outline">WhatsApp</Button.Root>
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
                {#each featuredProducts as product}
                    <Card.Root
                        class="group overflow-hidden border border-border/50 bg-card p-0 gap-0 transition-all hover:border-primary/50"
                    >
                        <div
                            class="relative aspect-square overflow-hidden bg-muted"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            <div class="absolute top-4 left-4">
                                <Badge
                                    class="border-none bg-black/80 text-white backdrop-blur-md px-3 py-1 font-medium"
                                >
                                    {product.category}
                                </Badge>
                            </div>
                            <!--
                            <button
                                class="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-all hover:bg-black/60 hover:scale-110 active:scale-95"
                            >
                                <Heart class="h-5.5 w-5.5" />
                            </button>
                            -->
                        </div>

                        <Card.Content class="flex flex-col gap-4 p-5">
                            <h3
                                class="text-xl font-bold text-foreground leading-tight min-h-12 line-clamp-2"
                            >
                                {product.name}
                            </h3>

                            <div class="flex items-baseline gap-2">
                                <span
                                    class="text-2xl font-medium text-foreground"
                                    >S/ {product.price}</span
                                >
                            </div>
                        </Card.Content>

                        <Card.Footer class="px-5 pb-4 pt-0">
                            <Button.Root
                                class="w-full gap-2 transition-all active:scale-95"
                                variant="default"
                            >
                                <ShoppingCart class="h-5 w-5" />
                                Ver detalles
                            </Button.Root>
                        </Card.Footer>
                    </Card.Root>
                {/each}
            </div>

            <div class="mt-12 text-center">
                <Button.Root variant="outline" class="group">
                    Ver todos los productos
                    <ArrowRight
                        class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                    />
                </Button.Root>
            </div>
        </div>
    </section>
</main>
