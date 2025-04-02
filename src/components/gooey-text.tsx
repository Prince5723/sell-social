import * as React from "react";
import { GooeyText } from "@/components/ui/gooey-text-morphing";

function GooeyTextDemo() {
  return (
    <div className="h-[200px] flex items-center justify-center text-white">
      <GooeyText
        texts={["Don't","Keep", "Sitting", "On", "Ideas"]}
        morphTime={1}
        cooldownTime={0.25}
        className="font-bold"
      />
    </div>
  );
}

export { GooeyTextDemo };