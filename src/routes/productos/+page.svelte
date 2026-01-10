<script lang="ts">
    import Navbar from "$lib/components/layout/navbar.svelte";
    import Footer from "$lib/components/layout/footer.svelte";
    import ProductCard from "$lib/components/catalog/product-card.svelte";
    import * as Pagination from "$lib/components/ui/pagination/index.js";
    import { Skeleton } from "$lib/components/ui/skeleton/index.js";
    import { goto } from "$app/navigation";

    let {
        data,
    }: {
        data: { productsData: Promise<{ products: any[]; pagination: any }> };
    } = $props();

    let currentPage = $state(1);
    let serverPage = $state(1);

    $effect(() => {
        data.productsData.then((res) => {
            if (res.pagination?.page) {
                serverPage = res.pagination.page;
                currentPage = res.pagination.page;
            }
        });
    });

    $effect(() => {
        if (currentPage !== serverPage) {
            const url = new URL(window.location.href);
            url.searchParams.set("page", currentPage.toString());
            goto(url.toString(), { keepFocus: true, noScroll: false });
        }
    });
</script>

<Navbar />

<main class="min-h-screen bg-background text-foreground">
    <section class="py-12 md:py-20">
        <div class="container mx-auto max-w-350 px-4 sm:px-6 lg:px-8">
            <div
                class="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
            >
                <div class="text-left">
                    <h1
                        class="text-3xl font-bold tracking-tight text-foreground"
                    >
                        Productos
                    </h1>
                    <p class="mt-3 font-medium text-muted-foreground">
                        Navega por nuestros últimos productos y encuentra algo
                        que te encantará.
                    </p>
                </div>
            </div>

            {#await data.productsData}
                <div
                    class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8"
                >
                    {#each Array(8) as _}
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
                </div>
            {:then { products, pagination }}
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

                    {#if pagination && pagination.pageCount > 1}
                        <div class="mt-12 flex justify-center">
                            <Pagination.Root
                                count={pagination.total}
                                perPage={pagination.pageSize}
                                bind:page={currentPage}
                            >
                                {#snippet children({ pages })}
                                    <Pagination.Content>
                                        <Pagination.Item>
                                            <Pagination.Previous />
                                        </Pagination.Item>
                                        {#each pages as page (page.key)}
                                            {#if page.type === "ellipsis"}
                                                <Pagination.Item>
                                                    <Pagination.Ellipsis />
                                                </Pagination.Item>
                                            {:else}
                                                <Pagination.Item>
                                                    <Pagination.Link
                                                        {page}
                                                        isActive={currentPage ===
                                                            page.value}
                                                    >
                                                        {page.value}
                                                    </Pagination.Link>
                                                </Pagination.Item>
                                            {/if}
                                        {/each}
                                        <Pagination.Item>
                                            <Pagination.Next />
                                        </Pagination.Item>
                                    </Pagination.Content>
                                {/snippet}
                            </Pagination.Root>
                        </div>
                    {/if}
                {/if}
            {/await}
        </div>
    </section>
</main>

<Footer />
