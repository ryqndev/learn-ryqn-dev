import { ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { flushSync } from "react-dom";

export function createStringFromReactNode(node: ReactNode) {
    const div = document.createElement("div");
    const root = createRoot(div);
    flushSync(() => {
        root.render(node);
    });
    console.log("@ryqndev", div);
    // return div.innerHTML;
    return "Sdf";
}
