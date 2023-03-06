<script lang="ts">
    import { onMount } from "svelte";
    import gsap from "gsap";
    import ScrollTrigger from "gsap/ScrollTrigger";
    import Landing from "$components/Landing.svelte";

    gsap.registerPlugin(ScrollTrigger);

    onMount(() => {
        // Scroll indicator
        gsap.to("#mouse", {
            opacity: 0,
            scrollTrigger: {
                trigger: "#mouse",
                start: "top bottom-=100",
                end: "bottom bottom-=100",
                scrub: true,
            },
        });

        gsap.set("#content", { xPercent: -50, yPercent: -50 });
        gsap.to("#content", {
            scale: 0.6667,
            scrollTrigger: {
                trigger: "#window",
                pin: "#window",
                scrub: true,
            },
        });
    });
</script>

<main class="w-screen h-screen">
    <div
        class="w-10 h-16 border-[3px] border-zinc-400 rounded-3xl fixed z-20 bottom-3.5 left-1/2 before:w-3 before:h-3 before:absolute before:top-2 before:left-1/2 before:-translate-x-1/2 before:bg-zinc-100 before:rounded-full before:animate-wheel"
        id="mouse"
    />
    <div class="relative h-full" id="window">
        <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-main_light flex"
            id="content"
        >
            <Landing />
        </div>
    </div>
</main>

<style global lang="postcss">
    @tailwind utilities;
    @tailwind components;
    @tailwind base;
</style>
