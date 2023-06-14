<template>
    <button :class="[$options.name, ...classes.root]" type="button">
      {{ text }}
      <div :class="[`${$options.name}__bracket`, ...classes.bracket]">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m7 10l5 5l5-5H7Z" /></svg>
      </div>
    </button>
</template>

<script>
export default {
    name: 'BienIci_FakeSelect',
    props: {
        text: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            classes: {
                root: [
                    'relative',
                    'flex',
                    'border',
                    'border-solid',
                    'border-gray-300',
                    'px-4',
                    'py-1',
                    'pr-10',
                ],
                bracket: [
                    'absolute',
                    'right-1',
                    'text-gray-400',
                ],
            },
        }
    },
}
</script>
