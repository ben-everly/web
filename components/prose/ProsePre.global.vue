<script setup lang="ts">
    const props = defineProps({
        code: {
            type: String,
            default: "",
        },
        language: {
            type: String,
            default: null,
        },
        filename: {
            type: String,
            default: null,
        },
        highlights: {
            type: Array as () => number[],
            default: () => [],
        },
        meta: {
            type: String,
            default: null,
        },
        class: {
            type: String,
            default: null,
        },
    });

    const codeCopied = ref<boolean>(false);
    const copyCode = (): void => {
        navigator.clipboard
            .writeText(props.code)
            .then(() => {
                codeCopied.value = true;
                setTimeout(function () {
                    codeCopied.value = false;
                }, 5000);
            })
            .catch((e) => {
                console.error("Error: Unable to copy code.");
            });
    };
</script>

<template>
    <div class="rounded-md bg-neutral-900 p-1 text-neutral-100">
        <div class="jusify-end flex items-center px-3 py-1">
            <div v-if="props.filename" class="mr-auto ml-0 text-sm opacity-50">
                <i>{{ filename }}</i>
            </div>
            <span v-if="codeCopied" class="opacity-50">
                <Icon
                    name="uil:check"
                    class="transtion-opacity size-6 p-2 align-middle"
                />
            </span>
            <button v-if="!codeCopied" @click="copyCode">
                <Icon
                    name="uil:copy"
                    class="size-5 p-2 align-middle opacity-50 transition-opacity duration-300 hover:opacity-100"
                />
            </button>
        </div>
        <pre
            class="pre-body m-0 overflow-x-auto rounded-t-none rounded-b-md p-0"
            :class="$props.class"
        ><slot/></pre>
    </div>
</template>

<style lang="css">
    .pre-body code {
        display: inline-block;
        width: 100%;
        min-width: max-content;
    }

    .pre-body .line {
        padding: 0 0.75rem;
        line-height: 1.6;
    }
    .pre-body .line span {
        background-color: transparent !important;
    }

    .pre-body .line.highlight,
    .pre-body .line.highlighted {
        background-color: color-mix(
            in srgb,
            var(--color-neutral-900) 70%,
            #888888
        );
    }

    .pre-body .line::before {
        content: attr(line);
        padding-right: 1.25rem;
        display: inline-block;
        opacity: 0.8;
    }

    .pre-body .line.diff.remove {
        background-color: color-mix(
            in srgb,
            var(--color-neutral-900) 65%,
            #f43f5e
        );
    }

    .pre-body .line.diff.add {
        background-color: color-mix(
            in srgb,
            var(--color-neutral-900) 75%,
            #10b981
        );
    }

    pre code .line {
        display: block;
    }
</style>
