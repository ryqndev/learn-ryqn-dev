import { Layout } from "@components";

import { InteractiveGraph } from "./components/InteractiveGraph";
import { useExplorerGraph } from "./controllers/useExplorerGraph";
import { SelectedNodeDetails } from "./components/SelectedNodeDetails";
import * as cn from "./Explore.module.scss";

const Explore = () => {
    const { graph, selectNode, selectedNode } = useExplorerGraph();

    return (
        <Layout>
            <main className={cn.container}>
                <InteractiveGraph
                    className={cn.graph}
                    graph={graph}
                    selectNode={selectNode}
                />
                {selectedNode && (
                    <SelectedNodeDetails
                        className={cn.details}
                        selectedNode={selectedNode}
                    />
                )}
            </main>
        </Layout>
    );
};

export default Explore;
