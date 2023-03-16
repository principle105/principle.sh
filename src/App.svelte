<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import type { ComponentType } from "svelte/internal";
    import gsap from "gsap";
    import ScrollTrigger from "gsap/ScrollTrigger";
    import Landing from "$components/Landing.svelte";
    import FaAngleRight from "svelte-icons/fa/FaAngleRight.svelte";
    import FaAngleDown from "svelte-icons/fa/FaAngleDown.svelte";
    import FaTimes from "svelte-icons/fa/FaTimes.svelte";
    import FaFolder from "svelte-icons/fa/FaFolder.svelte";
    import FaFile from "svelte-icons/fa/FaFile.svelte";

    interface File {
        name: string;
        icon: ComponentType;
    }

    interface Route extends File {
        route: string;
        component: ComponentType;
    }

    interface Folder extends Route {
        files: File[];
    }

    const isFolder = (route: Folder | Route): route is Folder => {
        return "files" in route;
    };

    let aspectRatio: string;
    let scale: number;

    let directory: (Route | Folder)[] = [
        {
            name: "projects",
            route: "#projects",
            icon: FaFolder,
            component: Landing,
            files: [
                {
                    name: "wordpractice.py",
                    icon: FaFile,
                },
                {
                    name: "thomas-coin.py",
                    icon: FaFile,
                },
            ],
        },
        {
            name: "about.md",
            route: "#about",
            icon: FaFolder,
            component: Landing,
        },
    ];

    let currentPage: Route = directory[1] as Route;

    const setAspectRatio = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        aspectRatio = `${width} / ${height}`;

        const content = document.getElementById("content");

        scale = window.innerWidth / content.offsetWidth;
    };

    gsap.registerPlugin(ScrollTrigger);

    onMount(() => {
        setAspectRatio();
        window.addEventListener("resize", setAspectRatio);

        // Scroll indicator
        gsap.to("#mouse", {
            opacity: 0,
            scrollTrigger: {
                trigger: "#mouse",
                start: "top bottom",
                end: "bottom bottom",
                scrub: true,
            },
        });

        gsap.from("#editor", {
            scale,
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
    <div class="flex-col flex origin-test" id="editor">
        <div
            class="w-full py-2 flex items-center border-b-2 border-border_main"
        >
            <div class="flex ml-2 gap-1.5">
                <div class="h-3 w-3 rounded-full bg-[#ed6a5e]" />
                <div class="h-3 w-3 rounded-full bg-[#f5be4f]" />
                <div class="h-3 w-3 rounded-full bg-[#61c554]" />
            </div>
            <h2 class="text-white text-xs text-center w-full">
                about.md - Principle@dev
            </h2>
        </div>
        <div class="grow overflow-hidden flex">
            <div
                class="w-[3.15rem] border-r-2 border-border_main hidden xl:block"
            />
            <div class="min-w-max border-r-2 border-border_main">
                <div class="w-full py-3 flex pl-6">
                    <h4 class="uppercase text-xs text-zinc-300">EXPLORER</h4>
                </div>
                <div
                    class="pl-3 pr-16 w-full h-7 border-b-2 border-border_main flex text-white items-center gap-1.5"
                >
                    <div class="h-4">
                        <FaAngleRight />
                    </div>
                    <h4 class="uppercase text-xs font-semibold">
                        Open Editors
                    </h4>
                </div>
                <h4
                    class="uppercase text-white text-xs font-semibold mt-3 ml-3 flex items-center gap-1.5"
                >
                    <div class="h-4">
                        <FaAngleDown />
                    </div>
                    <span>Principle@dev</span>
                </h4>
                <div class="text-white text-sm mt-3">
                    {#each directory as route}
                        {#if isFolder(route)}
                            <div class="flex items-center pl-6 py-1 gap-1.5">
                                <div class="h-4">
                                    <FaAngleDown />
                                </div>
                                <div class="h-4 text-zinc-400">
                                    <FaFolder />
                                </div>
                                <h5>{route.name}</h5>
                            </div>
                            <div class="pl-6 py-1">
                                {#each route.files as file}
                                    <h6
                                        class="pl-6 py-1 flex items-center gap-1.5 {currentPage.name ===
                                        file.name
                                            ? 'bg-highlight'
                                            : ''}"
                                    >
                                        <div class="h-4">
                                            <svelte:component
                                                this={file.icon}
                                            />
                                        </div>
                                        <span>
                                            {file.name}
                                        </span>
                                    </h6>
                                {/each}
                            </div>
                        {:else}
                            <h5
                                class="pl-6 py-1 flex items-center gap-1.5 {currentPage.route ===
                                route.route
                                    ? 'bg-highlight'
                                    : ''}"
                            >
                                <div class="h-4">
                                    <svelte:component this={route.icon} />
                                </div>
                                <span>
                                    {route.name}
                                </span>
                            </h5>
                        {/if}
                    {/each}
                </div>
            </div>
            <div class="grow">
                <div class="h-11 w-full flex">
                    <div
                        class="h-full bg-main_light w-max flex items-center gap-3 px-3 py-1 relative border-border_main border-r-2"
                    >
                        <div
                            class="absolute top-0 left-0 h-0.5 w-full bg-cyan"
                        />
                        <span class="text-vs text-cyan">
                            {currentPage.name}
                        </span>
                        <div class="h-4 text-white">
                            <FaTimes />
                        </div>
                    </div>
                    <div class="border-b-2 border-border_main grow" />
                </div>
                <div
                    class="text-comment text-xs flex items-center pl-3 py-1 bg-main_light gap-2"
                >
                    <span>folder</span>
                    <div class="h-4">
                        <FaAngleRight />
                    </div>
                    <span>{currentPage.name}</span>
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
        <footer class="border-t-2 border-border_main w-full flex items-center">
            <span class="text-purple opacity-50 text-sm">footer</span>
        </footer>
    </div>
</main>

<style global lang="postcss">
    @tailwind utilities;
    @tailwind components;
    @tailwind base;
</style>
