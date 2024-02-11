import { Head, Layout } from "@components";

import ForceGraph3D from "react-force-graph-3d";
import graph from "@content/graph.json";
import { memo, useCallback } from "react";
import { Label } from "./components/Label";
import { createStringFromReactNode } from "./createHTMLStringFromReact";

export type ExplorerNode = (typeof graph.nodes)[0];

function Explorer() {
    const getLabel = useCallback(
        (props: ExplorerNode) =>
            createStringFromReactNode(<Label {...props} />),
        []
    );

    return (
        <Layout>
            <Head />
            <main>
                <ForceGraph3D
                    nodeThreeObjectExtend={true}
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
                    linkWidth={0.4}
                    nodeLabel={getLabel}
                />
            </main>
        </Layout>
    );
}

export default memo(Explorer);
