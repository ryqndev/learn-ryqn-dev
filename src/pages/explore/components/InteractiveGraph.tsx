import loadable from "@loadable/component";
import { HTMLProps, useCallback } from "react";
import { GraphData, NodeObject } from "react-force-graph-3d";

const ForceGraph3D = loadable(() => import("react-force-graph-3d"));

interface InteractiveGraphProps extends HTMLProps<HTMLDivElement> {
    graph: GraphData;
    selectNode: any;
}

export const InteractiveGraph = ({
    graph,
    selectNode,
}: InteractiveGraphProps) => {
    const onNodeClick = useCallback(
        ({ val }: NodeObject) => selectNode(val),
        []
    );

    return (
        <ForceGraph3D
            graphData={graph}
            nodeResolution={20}
            nodeRelSize={8}
            nodeVal={({ val }) =>
                val?.value ?? (val?.links?.to?.length ?? 0.1) / 20
            }
            nodeColor={({ val }) => {
                if (val.title === "Computer Science") return "#ff00ff";
                if (val.type === "tutorial") return "#00ffff";
                if (val.type === "article") return "#ffff00";
                return "#ffffff";
            }}
            onNodeClick={onNodeClick}
            linkWidth={0.4}
        />
    );
};
