import { useEffect, useState } from "react";
import graph from "@content/graph.json";

export type ExplorerNode = (typeof graph)["nodes"][number]["val"];

export function updateURL(url: string) {
    if (typeof window !== `undefined` && typeof url !== `undefined`) {
        window.history.pushState({}, "", url);
    }
    return;
}

export const useExplorerGraph = () => {
    const [selectedNode, setSelectedNode] = useState<ExplorerNode>();

    useEffect(() => {
        if (!selectedNode) return;

        /**
         * Push a new state to the URL, but don't refresh page,
         * we'll handle this selection change internally
         */
        const link = selectedNode.link;
        if (Array.isArray(link)) {
            updateURL("/explore/" + link.join("/"));
            return;
        }
        updateURL("/explore" + link);
    }, [selectedNode]);

    const selectNode = (node: ExplorerNode) => {
        setSelectedNode(node);
    };

    return { selectNode, graph, selectedNode };
};
