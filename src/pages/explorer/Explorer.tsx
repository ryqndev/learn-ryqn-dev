import { Head, Layout } from "@components";

import ForceGraph3D from "react-force-graph-3d";
import graph from "@content/graph.json";

export function Explorer() {
    return (
        <Layout>
            <Head />
            <main>
                <ForceGraph3D
                    graphData={graph}
                    nodeResolution={20}
                    nodeRelSize={8}
                    nodeVal={({ val }) =>
                        val?.value ?? (val?.links?.to?.length ?? 0.5) / 100
                    }
                    nodeColor={({ val }) => {
                        if (val.title === "Computer Science") return "#ff00ff";
                        if (val.type === "tutorial") return "#00ffff";
                        if (val.type === "article") return "#ffff00";
                        return "#ffffff";
                    }}
                    linkWidth={0.4}
                    nodeLabel={({ val }) => val.title}
                />
            </main>
        </Layout>
    );
}
