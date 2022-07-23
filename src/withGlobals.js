import { useEffect, useGlobals } from "@storybook/addons";
export const withGlobals = (StoryFn, context) => {
  const [{ myAddon }] = useGlobals(); // Is the addon being used in the docs panel

  const isInDocs = context.viewMode === "docs";
  useEffect(() => {
    // Execute your side effect here
    // For example, to manipulate the contents of the preview
    const selectorId = isInDocs
      ? `#anchor--${context.id} .docs-story`
      : `#root`;
    displayToolState(selectorId, {
      myAddon,
      isInDocs,
    });
  }, [myAddon]);
  return StoryFn();
};

function displayToolState(selector, state) {
  const rootElement = document.querySelector(selector);
  let preElement = rootElement.querySelector("pre");

  if (!preElement) {
    preElement = document.createElement("pre");
    preElement.style.setProperty("margin-top", "2rem");
    preElement.style.setProperty("padding", "1rem");
    preElement.style.setProperty("background-color", "#eee");
    preElement.style.setProperty("border-radius", "3px");
    preElement.style.setProperty("max-width", "730px");
    rootElement.appendChild(preElement);
  }

  preElement.innerHTML = `<p>Please use the smiley button to raise an issue or contribute using the <a href="https://github.expedia.biz/Brand-Expedia/uitk-react/wiki/contribute">contributing guide</a></p>`;
}
