import ReactMarkdown, { uriTransformer } from "react-markdown";
import gfm from "remark-gfm";
import { memo } from "react";
import { Layout, MarkdownRenderer } from "@components";
import { PageProps } from "gatsby";
import * as cn from "./Article.module.scss";
import Head from "./components/Head";
import { IArticle } from "./types";

const Article = ({ pageContext }: PageProps<any, IArticle>) => {
    const { content, link } = pageContext;

    const transformUri = (uri: string, element: string) => {
        return element === "img"
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

export default memo(Article);
