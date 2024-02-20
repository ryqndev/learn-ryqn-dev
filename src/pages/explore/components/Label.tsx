import { ExplorerNode } from "../[...]";
import cn from "./Label.module.scss";

export const Label = ({ val }: ExplorerNode) => {
    return (
        <>
            <div className={cn.container}>
                <div>{val.author}</div>
                <div>{val.date.updated}</div>
                <div>{val.title}</div>
                <div>{val.summary}</div>
            </div>
        </>
    );
};
