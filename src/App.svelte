<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import gsap from "gsap";
    import ScrollTrigger from "gsap/ScrollTrigger";
    import Landing from "$components/Landing.svelte";
    import FaAngleRight from "svelte-icons/fa/FaAngleRight.svelte";

    let aspectRatio = "16.1 / 8.9";
    let scale = 1.225;

    function setAspectRatio() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        aspectRatio = `${width} / ${height}`;

        const content = document.getElementById("content");

        scale = Math.sqrt(
            (window.innerWidth * window.innerHeight) /
                (content.offsetWidth * content.offsetHeight)
        );
    }

    gsap.registerPlugin(ScrollTrigger);

    onMount(() => {
        setAspectRatio();
        window.addEventListener("resize", setAspectRatio);

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

        gsap.from("#editor", {
            scale: scale,
            scrollTrigger: {
                trigger: "#window",
                pin: "#window",
                scrub: true,
            },
        });
    });

    onDestroy(() => {
        window.removeEventListener("resize", setAspectRatio);
    });
</script>

<main class="w-screen h-screen" id="window">
    <div
        class="w-10 h-16 border-[3px] border-zinc-400 rounded-3xl fixed z-20 bottom-3.5 left-1/2 before:w-3 before:h-3 before:absolute before:top-2 before:left-1/2 before:-translate-x-1/2 before:bg-zinc-100 before:rounded-full before:animate-wheel"
        id="mouse"
    />
    <div class="h-full w-full flex-col flex origin-test" id="editor">
        <div
            class="w-full py-2 h-10 flex items-center border-b-2 border-border_main"
        >
            <div class="flex gap-1.5 ml-3">
                <div class="h-3.5 w-3.5 rounded-full bg-[#ed6a5e]" />
                <div class="h-3.5 w-3.5 rounded-full bg-[#f5be4f]" />
                <div class="h-3.5 w-3.5 rounded-full bg-[#61c554]" />
            </div>
            <h2 class="text-white text-sm text-center w-full">
                about.md - Principle@dev
            </h2>
        </div>
        <div class="flex grow overflow-hidden">
            <div class="w-16 border-r-2 border-border_main hidden md:block" />
            <div class="min-w-max border-r-2 border-border_main">
                <div class="w-full h-12 py-3 flex pl-6">
                    <h4 class="uppercase text-xs text-zinc-300">EXPLORER</h4>
                </div>
                <div
                    class="pl-3 pr-16 gap-1.5 w-full h-7 border-b-2 border-border_main flex text-white items-center"
                >
                    <div class="h-4">
                        <FaAngleRight />
                    </div>
                    <h4 class="uppercase text-xs font-semibold">
                        Open Editors
                    </h4>
                </div>
                <h4
                    class="uppercase text-white text-xs font-semibold mt-3 ml-3"
                >
                    Principle@dev
                </h4>
                <div class="text-white text-sm mt-3">
                    <h5 class="bg-highlight pl-6 py-1">about</h5>
                    <h5 class="pl-6 py-1">contact</h5>
                    <h5 class="pl-6 py-1">projects</h5>
                </div>
            </div>
            <div class="grow">
                <div class="h-12 border-b-2 border-border_main w-full" />
                <div
                    class="h-7 text-comment text-sm flex items-center gap-2 ml-3"
                >
                    <span>projects</span>
                    <div class="h-4">
                        <FaAngleRight />
                    </div>
                    <span>about.md</span>
                </div>
                <div
                    class="bg-main_light flex"
                    style="aspect-ratio: {aspectRatio}"
                    id="content"
                >
                    <Landing />
                </div>
            </div>
        </div>
        <footer class="border-t-2 border-border_main w-full h-8">
            <p>footer</p>
        </footer>
    </div>
</main>

<style global lang="postcss">
    @tailwind utilities;
    @tailwind components;
    @tailwind base;
</style>
