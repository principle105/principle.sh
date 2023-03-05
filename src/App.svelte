<script lang="ts">
    import WavingHand from "./assets/wavingHand.svelte";
    import wavingHand from "./assets/wavingHand.svelte";
</script>

<main class="w-screen h-screen flex">
    <div class="m-auto">
        <div class="flex items-end gap-6">
            <h1 class="text-white text-8xl font-semibold">Hello!</h1>
            <div class="h-24">
                <WavingHand />
            </div>
        </div>
        <div class="mt-6">
            <div class="text-white text-2xl">
                I'm a self-taught developer from
                <span class="text-red font-semibold">Canada</span>
                who likes building cool things.
            </div>
        </div>
        <div class="mt-10">
            <a
                href="https://github.com/principle105"
                target="_blank"
                rel="noreferrer"
                class="text-white rounded-xl text-[1.075rem] px-9 py-3.5 bg-highlight_light hover:brightness-125 transition"
            >
                Github
            </a>
        </div>
    </div>
</main>

<style global lang="postcss">
    @tailwind utilities;
    @tailwind components;
    @tailwind base;
</style>
