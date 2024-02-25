import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { ReactMarkdownProps } from "react-markdown/lib/complex-types";
import * as cn from "./TableOfContent.module.scss";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { useState, useLayoutEffect } from "react";
import clsx from "clsx";
import { useLocation } from "@reach/router";

const TableOfContents = ({ value }: { value: string }) => {
    return (
        <div className={cn.grid}>
            <div className={cn.container}>
                <ReactMarkdown
                    remarkPlugins={[gfm]}
                    components={TOCInlineRenderer}
                >
                    {value}
                </ReactMarkdown>
            </div>
        </div>
    );
};

const TOCInlineRenderer = {
    a: ({ children, href }) => {
        const location = useLocation();
        const anchorHref = href.replace(/[^a-z0-9#\-]/gi, "");
        const [visible, setVisible] = useState(true);

        useLayoutEffect(() => {
            const anchor = document.querySelector(anchorHref + "-visible");
            if (!anchor) return;
            const observer = new IntersectionObserver(([entry]) => {
                setVisible(entry.isIntersecting);
            });

            try {
                observer.observe(anchor);
                return () => observer.unobserve(anchor);
            } catch (e) {
                console.error(
                    `This article is malformed - some links might or might not work. Error: ${anchorHref}`
                );
            }
        });

        return (
            <AnchorLink
                to={location.pathname + anchorHref}
                className={clsx(cn.link, visible && cn.highlight)}
            >
                {children}
            </AnchorLink>
        );
    },

    li: ({ children }: ReactMarkdownProps) => <li>{children}</li>,
    ol: ({ children }: ReactMarkdownProps) => (
        <ol style={{ paddingLeft: 32, listStyle: "decimal" }}>{children}</ol>
    ),
    ul: ({ children }: ReactMarkdownProps) => (
        <ul style={{ paddingLeft: 32, listStyle: "disc" }}>{children}</ul>
    ),
};

export { TableOfContents };
