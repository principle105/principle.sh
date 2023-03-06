<script lang="ts">
    import WavingHand from "../icons/WavingHand.svelte";
</script>

<div class="m-auto">
    <div class="flex items-end gap-6">
        <h1 class="text-white text-8xl font-semibold">Hello!</h1>
        <div class="h-24">
            <WavingHand />
        </div>
    </div>
    <div class="mt-6">
        <div class="text-zinc-200 text-xl">
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
