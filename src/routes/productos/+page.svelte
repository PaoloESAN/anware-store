<script lang="ts">
    import Navbar from "$lib/components/layout/navbar.svelte";
    import Footer from "$lib/components/layout/footer.svelte";
    import ProductCard from "$lib/components/catalog/product-card.svelte";

    let { data } = $props();
    let products = $derived(data.products || []);
</script>

<Navbar />

<main class="min-h-screen bg-black text-foreground">
    <section class="py-12 md:py-20">
        <div class="container mx-auto max-w-350 px-4 sm:px-6 lg:px-8">
            <div
                class="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
            >
                <div class="text-left">
                    <h1 class="text-3xl font-bold tracking-tight text-white">
                        Productos
                    </h1>
                    <p class="mt-3 font-medium text-zinc-400">
                        Navega por nuestros últimos productos y encuentra algo
                        que te encantará.
                    </p>
                </div>
            </div>

            {#if products.length === 0}
                <div
                    class="flex flex-col items-center justify-center py-20 text-center"
                >
                    <p class="text-xl text-muted-foreground">
                        No se encontraron productos en este momento.
                    </p>
                </div>
            {:else}
                <div
                    class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8"
                >
                    {#each products as product (product.id)}
                        <ProductCard {product} />
                    {/each}
                </div>
            {/if}
        </div>
    </section>
</main>

<Footer />
