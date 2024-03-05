import loadable from "@loadable/component";
import { HTMLProps, useCallback, useEffect, useState } from "react";
import { GraphData, NodeObject } from "react-force-graph-3d";

const ForceGraph3D = loadable(() => import("react-force-graph-3d"));

interface InteractiveGraphProps extends HTMLProps<HTMLDivElement> {
    graph: GraphData;
    selectNode: any;
}

interface Dimension {
    width: number;
    height: number;
}

export const InteractiveGraph = ({
    graph,
    selectNode,
}: InteractiveGraphProps) => {
    const onNodeClick = useCallback(
        ({ val }: NodeObject) => selectNode(val),
        []
    );

    const [dimensions, setDimensions] = useState<Dimension>({
        height: window.innerHeight,
        width: window.innerWidth,
    });

    const resize = useCallback(() => {
        setDimensions({
            height: window.innerHeight,
            width: window.innerWidth,
        });
    }, []);

    useEffect(() => {
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, []);

    return (
        <ForceGraph3D
            height={dimensions.height}
            width={dimensions.width}
            graphData={graph}
            nodeResolution={20}
            nodeRelSize={8}
            nodeVal={({ val }) =>
                val?.value ?? (val?.links?.to?.length ?? 0.1) / 20
            }
            nodeColor={({ val }) => {
                if (val.title === "Computer Science") return "#ff00ff";
                if (val.type === "workshop") return "#ffff00";
                return "#00ffff";
            }}
            onNodeClick={onNodeClick}
            backgroundColor="#141617"
            linkWidth={0.4}
        />
    );
};
