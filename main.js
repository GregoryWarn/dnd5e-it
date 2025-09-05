Hooks.on("init", () => {
  if (typeof Babele !== "undefined") {
    Babele.get().register({
      module: "dnd5e-it",
      lang: "it",
      dir: "compendium",
    });
  }
});
