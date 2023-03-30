import React from "react";
import * as RadixTooltip from "@radix-ui/react-tooltip";
import { PlusCircledIcon } from "@radix-ui/react-icons";
export const Tooltip = () => {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>
          <button className="text-violet11 shadow-blackA7 hover:bg-violet3 inline-flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white  outline-none">
            <PlusCircledIcon />
          </button>
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none will-change-[transform,opacity]"
            sideOffset={5}
          >
            Content
            <RadixTooltip.Arrow className="fill-white" />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};
