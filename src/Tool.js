import React, { useCallback } from "react";
import { useGlobals } from "@storybook/api";
import { Icons, IconButton } from "@storybook/components";
import { TOOL_ID } from "./constants";
export const Tool = () => {
  const [{ myAddon }, updateGlobals] = useGlobals();
  // const toggleMyTool = useCallback(
  //   () =>
  //     updateGlobals({
  //       myAddon: myAddon ? undefined : true,
  //     }),
  //   [myAddon]
  // );
  function toggleMyTool() {
    console.log("Triggered the add on");
    window.open("https://github.expedia.biz/Brand-Expedia/uitk-react/issues/new", "_blank");
  }
  return (
    <IconButton
      key={TOOL_ID}
      active={myAddon}
      title="Provide feedback to the UITK team"
      onClick={toggleMyTool}
    >
      {/*
       Checkout https://next--storybookjs.netlify.app/official-storybook/?path=/story/basics-icon--labels
       for the full list of icons
      */}
      <Icons icon="facehappy" />
    </IconButton>
  );
};
