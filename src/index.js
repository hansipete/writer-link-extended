import LinkDialogExtended from "./components/Dialogs/LinkDialogExtended.vue"

window.panel.plugin("toto/writer-link-extended", {
	components: {
		"k-link-dialog": LinkDialogExtended,
		"k-writer": {
			components: {
				"k-link-dialog": LinkDialogExtended
			}
		}
	}
})
