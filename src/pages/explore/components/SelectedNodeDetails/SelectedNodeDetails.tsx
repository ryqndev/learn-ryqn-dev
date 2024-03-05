import { HTMLProps } from "react";
import { ExplorerNode, Graph } from "../../controllers/useExplorerGraph";
import * as cn from "./SelectedNodeDetails.module.scss";
import { Link } from "gatsby";
import { LinkSection, getUrl } from "./components/LinkSection";

interface SelectedNodeDetailsProps extends HTMLProps<HTMLDivElement> {
    selectedNode?: ExplorerNode;
    graph: Graph;
}

export const SelectedNodeDetails = ({
    graph,
    selectedNode,
    className,
}: SelectedNodeDetailsProps) => {
    if (!selectedNode) return null;

    return (
        <div className={className}>
            <div className={cn.container}>
                <div className={cn.inner}>
                    <h2 className={cn.title}>{selectedNode?.title}</h2>
                    <p>{selectedNode?.summary}</p>
                    <LinkSection links={selectedNode?.links?.from} />
                    <LinkSection links={selectedNode?.links?.to} />
                </div>
                <Link className={cn.cta} to={getUrl(selectedNode.title)}>
                    Go to Article
                </Link>
            </div>
        </div>
    );
};
