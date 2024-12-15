(function() {
  "use strict";
  function isObject(input) {
    return typeof input === "object" && (input == null ? void 0 : input.constructor) === Object;
  }
  function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
    var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
    if (render) {
      options.render = render;
      options.staticRenderFns = staticRenderFns;
      options._compiled = true;
    }
    return {
      exports: scriptExports,
      options
    };
  }
  const props$1 = {
    props: {
      /**
       * Options for the cancel button
       */
      cancelButton: {
        default: true,
        type: [Boolean, String, Object]
      },
      /**
       * Whether to disable the submit button
       * @deprecated 4.0.0 use the `submit-button` prop instead
       */
      disabled: {
        default: false,
        type: Boolean
      },
      /**
       * The icon type for the submit button
       * @deprecated 4.0.0 use the `submit-button` prop instead
       */
      icon: {
        default: "check",
        type: String
      },
      /**
       * Options for the submit button
       */
      submitButton: {
        type: [Boolean, String, Object],
        default: true
      },
      /**
       * The theme of the submit button
       * @values "positive", "negative"
       * @deprecated 4.0.0 use the `submit-button` prop instead
       */
      theme: {
        default: "positive",
        type: String
      }
    }
  };
  const _sfc_main$2 = {
    mixins: [props$1],
    emits: ["cancel"],
    computed: {
      cancel() {
        return this.button(this.cancelButton, {
          click: () => this.$emit("cancel"),
          class: "k-dialog-button-cancel",
          icon: "cancel",
          text: this.$t("cancel"),
          variant: "filled"
        });
      },
      submit() {
        return this.button(this.submitButton, {
          class: "k-dialog-button-submit",
          disabled: this.disabled || this.$panel.dialog.isLoading,
          icon: this.icon,
          text: this.$t("confirm"),
          theme: this.theme,
          type: "submit",
          variant: "filled"
        });
      }
    },
    methods: {
      button(button, defaults) {
        if (typeof button === "string") {
          return {
            ...defaults,
            text: button
          };
        }
        if (button === false) {
          return false;
        }
        if (isObject(button) === false) {
          return defaults;
        }
        return {
          ...defaults,
          ...button
        };
      }
    }
  };
  var _sfc_render$2 = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("k-button-group", { staticClass: "k-dialog-buttons" }, [_vm.cancel ? _c("k-button", _vm._b({}, "k-button", _vm.cancel, false)) : _vm._e(), _vm.submit ? _c("k-button", _vm._b({ attrs: { "icon": _vm.$panel.dialog.isLoading ? "loader" : _vm.submit.icon } }, "k-button", _vm.submit, false)) : _vm._e()], 1);
  };
  var _sfc_staticRenderFns$2 = [];
  _sfc_render$2._withStripped = true;
  var __component__$2 = /* @__PURE__ */ normalizeComponent(
    _sfc_main$2,
    _sfc_render$2,
    _sfc_staticRenderFns$2
  );
  __component__$2.options.__file = "/Users/hans/2024/bechler-kirby/site/plugins/kirby-writer-link-extended/src/components/Dialogs/Elements/Buttons.vue";
  const Dialog = {
    mixins: [props$1],
    props: {
      /**
       * Width of the dialog
       * @values "small", "default", "medium", "large", "huge"
       */
      size: {
        default: "default",
        type: String
      },
      visible: {
        default: false,
        type: Boolean
      }
    },
    emits: ["cancel", "close", "input", "submit", "success"],
    methods: {
      /**
       * Triggers the `@cancel` event and closes the dialog.
       * @public
       */
      cancel() {
        this.$emit("cancel");
      },
      /**
       * Triggers the `@close` event and closes the dialog.
       * @public
       */
      close() {
        this.$emit("close");
      },
      /**
       * Shows the error notification bar in the dialog with the given message
       * @param {String} error
       */
      error(error) {
        this.$panel.notification.error(error);
      },
      /**
       * Sets the focus on the first usable input
       * or a given input by name
       * @public
       * @param {String} input
       */
      focus(input) {
        this.$panel.dialog.focus(input);
      },
      /**
       * Updates the dialog values
       * @public
       * @param {Object} value new values
       */
      input(value) {
        this.$emit("input", value);
      },
      /**
       * Opens the dialog and triggers the `@open` event.
       * Use ready to fire events that should be run as
       * soon as the dialog is open
       * @public
       */
      open() {
        this.$panel.dialog.open(this);
      },
      submit() {
        this.$emit("submit", this.value);
      },
      /**
       * Shows the success notification bar in the dialog with the given message
       * @param {String|Object} message
       */
      success(success) {
        this.$emit("success", success);
      }
    }
  };
  const props = {
    props: {
      /**
       * Empty state message if no fields are defined
       */
      empty: {
        default: () => window.panel.$t("dialog.fields.empty"),
        type: String
      },
      /**
       * An array or object with all available fields
       */
      fields: {
        default: () => [],
        type: [Array, Object]
      },
      /**
       * Skip client side validation (vuelidate).
       * Validation is skipped by default in
       * dialogs. Native input validation still works though.
       */
      novalidate: {
        default: true,
        type: Boolean
      },
      /**
       * An object with all values for the fields
       */
      value: {
        default: () => ({}),
        type: Object
      }
    }
  };
  const _sfc_main$1 = {
    mixins: [props],
    emits: ["input", "submit"],
    computed: {
      hasFields() {
        return this.$helper.object.length(this.fields) > 0;
      }
    }
  };
  var _sfc_render$1 = function render() {
    var _vm = this, _c = _vm._self._c;
    return _vm.hasFields ? _c("k-fieldset", { staticClass: "k-dialog-fields", attrs: { "novalidate": _vm.novalidate, "fields": _vm.fields, "value": _vm.value }, on: { "input": function($event) {
      return _vm.$emit("input", $event);
    }, "submit": function($event) {
      return _vm.$emit("submit", $event);
    } } }) : _c("k-box", { attrs: { "theme": "info" } }, [_vm._v(_vm._s(_vm.empty))]);
  };
  var _sfc_staticRenderFns$1 = [];
  _sfc_render$1._withStripped = true;
  var __component__$1 = /* @__PURE__ */ normalizeComponent(
    _sfc_main$1,
    _sfc_render$1,
    _sfc_staticRenderFns$1
  );
  __component__$1.options.__file = "/Users/hans/2024/bechler-kirby/site/plugins/kirby-writer-link-extended/src/components/Dialogs/Elements/Fields.vue";
  const _sfc_main = {
    mixins: [Dialog, props],
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
          class: Boolean(this.value.class ?? false)
        }
      };
    },
    methods: {
      submit() {
        let permalink = "/@/$1/";
        if (this.values.href.startsWith("page://") && window.panel.language.code) {
          permalink = "/" + window.panel.language.code + permalink;
        }
        const href = this.values.href.replace(/(file|page):\/\//, permalink);
        this.$emit("submit", {
          ...this.values,
          href,
          target: this.values.target ? "_blank" : null,
          class: this.values.class ? "button" : null
        });
      }
    }
  };
  var _sfc_render = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("k-form-dialog", _vm._b({ attrs: { "value": _vm.values }, on: { "cancel": function($event) {
      return _vm.$emit("cancel");
    }, "input": function($event) {
      _vm.values = $event;
    }, "submit": _vm.submit } }, "k-form-dialog", _vm.$props, false));
  };
  var _sfc_staticRenderFns = [];
  _sfc_render._withStripped = true;
  var __component__ = /* @__PURE__ */ normalizeComponent(
    _sfc_main,
    _sfc_render,
    _sfc_staticRenderFns
  );
  __component__.options.__file = "/Users/hans/2024/bechler-kirby/site/plugins/kirby-writer-link-extended/src/components/Dialogs/LinkDialogExtended.vue";
  const LinkDialogExtended = __component__.exports;
  window.panel.plugin("toto/writer-link-extended", {
    components: {
      "k-link-dialog": LinkDialogExtended,
      "k-writer": {
        components: {
          "k-link-dialog": LinkDialogExtended
        }
      }
    }
  });
})();
