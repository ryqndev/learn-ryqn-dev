import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { memo } from "react";
import { Layout, MarkdownRenderer } from "@components";
import { PageProps } from "gatsby";
import * as cn from "./Tutorial.module.scss";
import { IArticle } from "@templates/Article/types";
import Head from "@templates/Article/components/Head";

const Tutorial = ({ pageContext }: PageProps<any, IArticle>) => {
    const { content, link } = pageContext;

    const transformUri = (uri: string, element: string) => {
        return element === "src"
            ? `https://cdn.jsdelivr.net/gh/ryqndev/learn-ryqn-dev/src/content/${link.join(
                  "/"
              )}${uri.substr(1)}`
            : uri;
    };

    return (
        <Layout>
            <Head meta={pageContext} />
            <div className={cn.container}>
                <article className={cn.article}>
                    <ReactMarkdown
                        remarkPlugins={[gfm]}
                        components={MarkdownRenderer}
                        urlTransform={transformUri}
                    >
                        {content}
                    </ReactMarkdown>
                </article>
            </div>
        </Layout>
    );
};

export default memo(Tutorial);
