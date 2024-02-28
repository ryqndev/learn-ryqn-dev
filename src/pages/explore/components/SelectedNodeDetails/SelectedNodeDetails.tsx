import { HTMLProps } from "react";
import { ExplorerNode, Graph } from "../../controllers/useExplorerGraph";
import * as cn from "./SelectedNodeDetails.module.scss";
import { Link } from "gatsby";

interface SelectedNodeDetailsProps extends HTMLProps<HTMLDivElement> {
    selectedNode?: ExplorerNode;
    graph: Graph;
}

export const SelectedNodeDetails = ({
    graph,
    selectedNode,
    className,
}: SelectedNodeDetailsProps) => {
    console.log(selectedNode);

    const getUrl = (id: string) => {
        const link = graph.nodes.find((e) => e.id === id)?.val.link;

        if (!link) return "/explore";
        if (Array.isArray(link)) return "/" + link.join("/");
        return "/article" + link;
    };

    if (!selectedNode) return null;

    return (
        <div className={className}>
            <div className={cn.container}>
                <h2>{selectedNode?.title}</h2>
                <p>{selectedNode?.summary}</p>

                <Link to={getUrl(selectedNode.title)}>Go to article</Link>

                {selectedNode?.links?.from && (
                    <>
                        <h3>Previous:</h3>
                        <ul>
                            {selectedNode?.links?.from?.map((link) => {
                                return (
                                    <li>
                                        <Link key={link} to={getUrl(link)}>
                                            {link}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </>
                )}
                {selectedNode?.links?.to && (
                    <>
                        <h3>Next:</h3>
                        <ul>
                            {selectedNode?.links?.to?.map((link) => {
                                return (
                                    <li>
                                        <Link key={link} to={getUrl(link)}>
                                            {link}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </>
                )}
            </div>
        </div>
    );
};
