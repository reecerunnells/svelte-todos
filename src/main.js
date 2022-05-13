import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "Reece's Todos",
  },
});

export default app;
