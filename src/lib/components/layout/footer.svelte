<script lang="ts">
    import Facebook from "@lucide/svelte/icons/facebook";
    import Instagram from "@lucide/svelte/icons/instagram";
    import Twitter from "@lucide/svelte/icons/twitter";
    import Github from "@lucide/svelte/icons/github";
    import Linkedin from "@lucide/svelte/icons/linkedin";
</script>

<footer
    class="bg-white py-16 text-zinc-950 border-t border-zinc-200 dark:bg-black dark:text-white dark:border-white/5"
>
    <div class="container mx-auto max-w-7xl px-4">
        <div class="grid grid-cols-1 gap-12 md:grid-cols-4 lg:grid-cols-5">
            <div class="md:col-span-2">
                <h2 class="text-xl font-bold mb-6">Anware Store</h2>
                <p
                    class="text-zinc-500 dark:text-zinc-400 max-w-xs mb-8 font-light leading-relaxed"
                >
                    Tu tienda de confianza para encontrar lo que necesitas.
                    Calidad, rapidez y atención personalizada en cada consulta.
                </p>
                <div class="flex gap-6">
                    <a
                        href="https://facebook.com"
                        class="text-zinc-400 hover:text-zinc-950 dark:text-zinc-500 dark:hover:text-white transition-colors"
                        aria-label="Facebook"
                    >
                        <Facebook class="h-5 w-5" />
                    </a>
                    <a
                        href="https://twitter.com"
                        class="text-zinc-400 hover:text-zinc-950 dark:text-zinc-500 dark:hover:text-white transition-colors"
                        aria-label="Twitter"
                    >
                        <Twitter class="h-5 w-5" />
                    </a>
                    <a
                        href="https://instagram.com"
                        class="text-zinc-400 hover:text-zinc-950 dark:text-zinc-500 dark:hover:text-white transition-colors"
                        aria-label="Instagram"
                    >
                        <Instagram class="h-5 w-5" />
                    </a>
                    <a
                        href="https://github.com"
                        class="text-zinc-400 hover:text-zinc-950 dark:text-zinc-500 dark:hover:text-white transition-colors"
                        aria-label="Github"
                    >
                        <Github class="h-5 w-5" />
                    </a>
                    <a
                        href="https://linkedin.com"
                        class="text-zinc-400 hover:text-zinc-950 dark:text-zinc-500 dark:hover:text-white transition-colors"
                        aria-label="Linkedin"
                    >
                        <Linkedin class="h-5 w-5" />
                    </a>
                </div>
            </div>

            <div>
                <h3 class="font-bold mb-6">Navegación</h3>
                <ul
                    class="space-y-4 text-zinc-500 dark:text-zinc-400 font-light"
                >
                    <li>
                        <a
                            href="/"
                            class="hover:text-zinc-950 dark:hover:text-white transition-colors"
                            >Inicio</a
                        >
                    </li>
                    <li>
                        <a
                            href="/"
                            class="hover:text-zinc-950 dark:hover:text-white transition-colors"
                            >Productos</a
                        >
                    </li>
                    <li>
                        <a
                            href="/"
                            class="hover:text-zinc-950 dark:hover:text-white transition-colors"
                            >Catálogo</a
                        >
                    </li>
                    <li>
                        <a
                            href="/"
                            class="hover:text-zinc-950 dark:hover:text-white transition-colors"
                            >Ofertas</a
                        >
                    </li>
                </ul>
            </div>

            <div>
                <h3 class="font-bold mb-6">Empresa</h3>
                <ul
                    class="space-y-4 text-zinc-500 dark:text-zinc-400 font-light"
                >
                    <li>
                        <a
                            href="/"
                            class="hover:text-zinc-950 dark:hover:text-white transition-colors"
                            >Sobre Nosotros</a
                        >
                    </li>
                    <li>
                        <a
                            href="/"
                            class="hover:text-zinc-950 dark:hover:text-white transition-colors"
                            >Contacto</a
                        >
                    </li>
                    <li>
                        <a
                            href="/"
                            class="hover:text-zinc-950 dark:hover:text-white transition-colors"
                            >Blog</a
                        >
                    </li>
                    <li>
                        <a
                            href="/"
                            class="hover:text-zinc-950 dark:hover:text-white transition-colors"
                            >Carreras</a
                        >
                    </li>
                </ul>
            </div>

            <div>
                <h3 class="font-bold mb-6">Soporte</h3>
                <ul
                    class="space-y-4 text-zinc-500 dark:text-zinc-400 font-light"
                >
                    <li>
                        <a
                            href="/"
                            class="hover:text-zinc-950 dark:hover:text-white transition-colors"
                            >Centro de Ayuda</a
                        >
                    </li>
                    <li>
                        <a
                            href="/"
                            class="hover:text-zinc-950 dark:hover:text-white transition-colors"
                            >Envíos</a
                        >
                    </li>
                    <li>
                        <a
                            href="/"
                            class="hover:text-zinc-950 dark:hover:text-white transition-colors"
                            >Términos de Servicio</a
                        >
                    </li>
                    <li>
                        <a
                            href="/"
                            class="hover:text-zinc-950 dark:hover:text-white transition-colors"
                            >Privacidad</a
                        >
                    </li>
                </ul>
            </div>
        </div>

        <div
            class="mt-16 pt-8 border-t border-zinc-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6"
        >
            <p class="text-zinc-500 dark:text-zinc-400 text-sm font-light">
                © 2026 Anware Store. Todos los derechos reservados.
            </p>
            <div
                class="flex flex-wrap justify-center gap-x-8 gap-y-2 text-zinc-500 dark:text-zinc-400 text-sm font-light"
            >
                <a
                    href="/"
                    class="hover:text-zinc-950 dark:hover:text-white transition-colors"
                    >Privacidad</a
                >
                <a
                    href="/"
                    class="hover:text-zinc-950 dark:hover:text-white transition-colors"
                    >Términos</a
                >
                <a
                    href="/"
                    class="hover:text-zinc-950 dark:hover:text-white transition-colors"
                    >Cookies</a
                >
                <a
                    href="/"
                    class="hover:text-zinc-950 dark:hover:text-white transition-colors"
                    >Sitemap</a
                >
            </div>
        </div>
    </div>
</footer>
