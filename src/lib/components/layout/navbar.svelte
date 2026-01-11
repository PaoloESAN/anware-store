<script lang="ts">
    import { page } from "$app/state";
    import ThemeToggle from "$lib/components/common/themeToggle.svelte";
    import * as Separator from "$lib/components/ui/separator/index.js";
    import MenuIcon from "@lucide/svelte/icons/menu";
    import X from "@lucide/svelte/icons/x";
    import { slide } from "svelte/transition";

    let isOpen = $state(false);

    const links = [
        { name: "Home", href: "/" },
        { name: "Productos", href: "/productos" },
    ];

    $effect(() => {
        const path = page.url.pathname;
        isOpen = false;
    });
</script>

<header
    class="sticky top-0 z-50 w-full border-b backdrop-blur bg-background/60"
>
    <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
            <div class="flex items-center gap-6">
                <a
                    href="/"
                    class="text-xl font-bold bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent"
                >
                    Anware Store
                </a>

                <nav class="hidden md:flex">
                    <ul class="flex items-center gap-6">
                        {#each links as link (link.href)}
                            <li>
                                <a
                                    href={link.href}
                                    class="text-sm font-medium transition-colors hover:text-primary"
                                    class:text-primary={page.url.pathname ===
                                        link.href}
                                    class:text-muted-foreground={page.url
                                        .pathname !== link.href}
                                >
                                    {link.name}
                                </a>
                            </li>
                        {/each}
                    </ul>
                </nav>
            </div>

            <div class="flex items-center gap-2">
                <ThemeToggle />
                <button
                    onclick={() => (isOpen = !isOpen)}
                    class="md:hidden flex items-center justify-center rounded-md p-2 text-foreground hover:bg-muted transition-colors"
                    aria-expanded={isOpen}
                >
                    {#if isOpen}
                        <X class="h-6 w-6" />
                    {:else}
                        <MenuIcon class="h-6 w-6" />
                    {/if}
                    <span class="sr-only">Menu</span>
                </button>
            </div>
        </div>
    </div>

    {#if isOpen}
        <div
            transition:slide={{ duration: 300 }}
            class="md:hidden overflow-hidden"
        >
            <div class="container mx-auto px-4 py-4 flex flex-col">
                <nav class="flex flex-col gap-1">
                    {#each links as link (link.href)}
                        <a
                            href={link.href}
                            class="flex items-center px-4 py-2 rounded-lg font-semibold transition-all hover:bg-muted {page
                                .url.pathname === link.href
                                ? 'bg-primary/10!'
                                : ''}"
                        >
                            {link.name}
                        </a>
                    {/each}
                </nav>
            </div>
        </div>
    {/if}
    <Separator.Root />
</header>

<style>
    :global(body) {
        margin: 0;
    }
</style>
