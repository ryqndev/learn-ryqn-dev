import { Head, Layout } from "@components";

import ForceGraph3D, { NodeObject } from "react-force-graph-3d";
import graph from "@content/graph.json";
import { memo, useCallback } from "react";
import { Label } from "./components/Label";
import { createStringFromReactNode } from "./createHTMLStringFromReact";

import { navigate } from "gatsby";

export type ExplorerNode = (typeof graph.nodes)[0];

function Explorer() {
    const getLabel = useCallback(
        (props: ExplorerNode) =>
            createStringFromReactNode(<Label {...props} />),
        []
    );

    const onNodeClick = (node: NodeObject<ExplorerNode>) => {
        const link = node.val.link;

        if (Array.isArray(link)) {
            navigate("/explore/" + link.join("/"));
            return;
        }

        navigate("/explore" + node.val.link);
    };

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
                    onNodeClick={onNodeClick}
                    // nodeLabel={() =>
                    //     `<div onclick="alert('aint no way')">LABEL</div>`
                    // }
                />
            </main>
        </Layout>
    );
}

export default memo(Explorer);
