<template>
	<k-form-dialog
		v-bind="$props"
		:value="values"
		@cancel="$emit('cancel')"
		@input="values = $event"
		@submit="submit"
	/>
</template>

<script>
import Dialog from "@/mixins/dialog.js";
import { props as FieldsProps } from "./Elements/Fields.vue";

export default {
	mixins: [Dialog, FieldsProps],
	props: {
		// eslint-disable-next-line vue/require-prop-types
		fields: {
			default: () => ({
				href: {
					label: window.panel.$t("link"),
					type: "link",
					placeholder: window.panel.$t("url.placeholder"),
					icon: "url"
				},
				title: {
					label: window.panel.$t("title"),
					type: "text",
					icon: "title"
				},
				target: {
					label: window.panel.$t("open.newWindow"),
					type: "toggle",
					text: [window.panel.$t("no"), window.panel.$t("yes")]
				},
				class: {
					label: 'Add "button" class',
					type: "toggle",
					text: [window.panel.$t("no"), window.panel.$t("yes")]
				}
			})
		},
		// eslint-disable-next-line vue/require-prop-types
		size: {
			default: "medium"
		},
		// eslint-disable-next-line vue/require-prop-types
		submitButton: {
			default: () => window.panel.$t("insert")
		}
	},
	data() {
		return {
			values: {
				href: "",
				title: null,
				...this.value,
				target: Boolean(this.value.target ?? false),
				class: Boolean(this.value.class ?? false),
			}
		};
	},
	methods: {
		submit() {
			let permalink = "/@/$1/";

			if (
				this.values.href.startsWith("page://") &&
				window.panel.language.code
			) {
				permalink = "/" + window.panel.language.code + permalink;
			}

			const href = this.values.href.replace(/(file|page):\/\//, permalink);

			this.$emit("submit", {
				...this.values,
				href: href,
				target: this.values.target ? "_blank" : null,
				class: this.values.class ? "button" : null
			});
		}
	}
};
</script>

<style>
.k-writer-input a.button {
	--button-color-back: var(--menu-color-back);

	/* duplicate of k-button */
	text-decoration: none;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: var(--button-align);
    gap: .5rem;
    padding-inline: var(--button-padding);
    white-space: nowrap;
    line-height: 1;
    border-radius: var(--button-rounded);
    background: var(--button-color-back);
    height: var(--button-height);
    width: var(--button-width);
    color: var(--button-color-text);
    font-variant-numeric: tabular-nums;
    overflow-x: clip;
    text-align: var(--button-align);
    flex-shrink: 0;
}
</style>