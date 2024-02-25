import { HTMLProps } from "react";
import { ExplorerNode } from "../controllers/useExplorerGraph";

interface SelectedNodeDetailsProps extends HTMLProps<HTMLDivElement> {
    selectedNode?: ExplorerNode;
}

export const SelectedNodeDetails = ({
    selectedNode,
    className,
}: SelectedNodeDetailsProps) => {
    return <div className={className}>{JSON.stringify(selectedNode)}</div>;
};
