import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import vuePlugin from "@highlightjs/vue-plugin";
import Vue from "vue";

hljs.registerLanguage('javascript', javascript);

Vue.use(vuePlugin);
