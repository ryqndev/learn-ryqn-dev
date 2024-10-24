import { ReactNode } from "react";
import { HeadingComponent } from "react-markdown/lib/ast-to-react";
import * as cn from "./HeaderRenderer.module.scss";

export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

export interface IStandardHeaderProps {
    children: ReactNode[];
    node: {
        tagName: HeadingLevel;
    };
}

const convertToHashLinkID = (content) =>
    content
        .split(" ")
        .join("-")
        .toLowerCase()
        .replace(/[^a-z0-9#\-]/gi, "");

const StandardHeader: HeadingComponent = ({ children, node: { tagName } }) => {
    const HeaderLevel = tagName;
    const content: string = children ?? "";

    return (
        <>
            <HeaderLevel
                className={cn.invisible}
                id={convertToHashLinkID(content)}
            >
                {children}
            </HeaderLevel>
            <HeaderLevel
                className={cn.header}
                id={convertToHashLinkID(content) + "-visible"}
            >
                {children}
            </HeaderLevel>
        </>
    );
};

export { StandardHeader, convertToHashLinkID };
