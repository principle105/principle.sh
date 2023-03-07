<script lang="ts">
    import WavingHand from "$assets/WavingHand.svelte";
</script>

<div class="m-auto">
    <div class="flex items-end gap-5">
        <h1 class="text-white text-7xl font-bold">Hello!</h1>
        <div class="h-20">
            <WavingHand />
        </div>
    </div>
    <div class="mt-4">
        <div class="text-zinc-200">
            I'm a self-taught developer from
            <span class="text-red font-semibold">Canada</span>
            who likes building cool things.
        </div>
    </div>
    <div class="mt-7">
        <a
            href="https://github.com/principle105"
            target="_blank"
            rel="noreferrer"
            class="text-main rounded-lg text-sm px-7 py-2.5 bg-purple font-medium hover:brightness-[85%] transition"
        >
            Github
        </a>
    </div>
</div>
