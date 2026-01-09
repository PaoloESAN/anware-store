<script lang="ts">
    import { page } from "$app/stores";
    import ThemeToggle from "$lib/components/common/themeToggle.svelte";

    const links = [
        { name: "Home", href: "/" },
        { name: "Products", href: "/products" },
    ];
</script>

<header
    class="sticky top-0 z-50 w-full border-b border-black/8 bg-white/60 backdrop-blur-md dark:border-white/10 dark:bg-black/60"
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
                                    class:text-primary={$page.url.pathname ===
                                        link.href}
                                    class:text-muted-foreground={$page.url
                                        .pathname !== link.href}
                                >
                                    {link.name}
                                </a>
                            </li>
                        {/each}
                    </ul>
                </nav>
            </div>

            <div class="flex items-center gap-4">
                <ThemeToggle />
                <button
                    class="md:hidden text-foreground hover:text-primary transition-colors"
                >
                    Menu
                </button>
            </div>
        </div>
    </div>
</header>

<style>
    :global(body) {
        margin: 0;
    }
</style>
