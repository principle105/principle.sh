<script lang="ts">
    import { onMount } from "svelte";
    import gsap from "gsap";
    import ScrollTrigger from "gsap/ScrollTrigger";

    import WavingHand from "./assets/wavingHand.svelte";

    gsap.registerPlugin(ScrollTrigger);

    onMount(() => {
        gsap.to("#mouse", {
            opacity: 0,
            scrollTrigger: {
                trigger: "#mouse",
                start: "top bottom-=100",
                end: "bottom bottom-=100",
                scrub: true,
            },
        });
    });
</script>

<main class="w-screen h-screen flex">
    <div
        class="w-10 h-16 border-[3px] border-zinc-400 rounded-3xl fixed z-20 bottom-3.5 left-1/2 before:w-3 before:h-3 before:absolute before:top-2 before:left-1/2 before:-translate-x-1/2 before:bg-zinc-100 before:rounded-full before:animate-wheel"
        id="mouse"
    />
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
                class="text-bg rounded-xl text-[1.075rem] px-9 py-3.5 bg-purple font-medium hover:brightness-90 transition"
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
