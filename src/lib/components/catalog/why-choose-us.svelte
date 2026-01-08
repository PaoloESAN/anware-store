<script lang="ts">
    import MessageCircle from "@lucide/svelte/icons/message-circle";
    import Users from "@lucide/svelte/icons/users";
    import Zap from "@lucide/svelte/icons/zap";
    import ShieldCheck from "@lucide/svelte/icons/shield-check";
</script>

<section class="bg-[#121212] py-24 text-white">
    <div class="container mx-auto max-w-7xl px-4">
        <div class="mb-16 text-center">
            <h2
                class="relative mb-4 inline-block text-4xl font-bold md:text-5xl"
            >
                ¿Por qué elegirnos?
                <span
                    class="absolute -bottom-2 left-1/2 h-1 w-11 -translate-x-1/2 rounded-full bg-white"
                ></span>
            </h2>
            <p class="text-zinc-400 text-lg font-light">
                Haz tus pedidos de forma directa, rápida y sin complicaciones
            </p>
        </div>

        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div
                class="flex flex-col items-start gap-4 rounded-4xl border border-white/5 bg-black p-8 transition-all hover:bg-black/80"
            >
                <div
                    class="rounded-full bg-zinc-900 p-3 text-white border border-white/10"
                >
                    <MessageCircle class="h-6 w-6" />
                </div>
                <h3 class="mt-2 text-xl font-bold">Pedidos por WhatsApp</h3>
                <p class="leading-relaxed text-zinc-400 font-light text-sm">
                    Selecciona lo que te gusta y escríbenos directamente.
                    Coordinamos el pago y el envío de forma rápida y sencilla.
                </p>
            </div>

            <div
                class="flex flex-col items-start gap-4 rounded-4xl border border-white/5 bg-black p-8 transition-all hover:bg-black/80"
            >
                <div
                    class="rounded-full bg-zinc-900 p-3 text-white border border-white/10"
                >
                    <Users class="h-6 w-6" />
                </div>
                <h3 class="mt-2 text-xl font-bold">Atención Humana</h3>
                <p class="leading-relaxed text-zinc-400 font-light text-sm">
                    No eres un número más. Resolvemos todas tus dudas y te
                    asesoramos personalmente para que elijas el producto ideal.
                </p>
            </div>

            <div
                class="flex flex-col items-start gap-4 rounded-4xl border border-white/5 bg-black p-8 transition-all hover:bg-black/80"
            >
                <div
                    class="rounded-full bg-zinc-900 p-3 text-white border border-white/10"
                >
                    <Zap class="h-6 w-6" />
                </div>
                <h3 class="mt-2 text-xl font-bold">Sin Complicaciones</h3>
                <p class="leading-relaxed text-zinc-400 font-light text-sm">
                    Olvídate de carritos complejos o registros. El proceso es
                    tan fácil como enviar un mensaje y recibir tu producto.
                </p>
            </div>

            <div
                class="flex flex-col items-start gap-4 rounded-4xl border border-white/5 bg-black p-8 transition-all hover:bg-black/80"
            >
                <div
                    class="rounded-full bg-zinc-900 p-3 text-white border border-white/10"
                >
                    <ShieldCheck class="h-6 w-6" />
                </div>
                <h3 class="mt-2 text-xl font-bold">Compra Segura</h3>
                <p class="leading-relaxed text-zinc-400 font-light text-sm">
                    Respaldamos cada uno de nuestros productos. Compra con total
                    confianza charlando directamente con nuestro equipo.
                </p>
            </div>
        </div>
    </div>
</section>
