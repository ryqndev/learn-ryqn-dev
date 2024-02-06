import { memo } from "react";
import { Layout, MarkdownRenderer } from "../../components";
import { PageProps } from "gatsby";
import * as cn from "./Lab.module.scss";
import { javascript } from "@codemirror/lang-javascript";
import CodeMirror from "@uiw/react-codemirror";
import { PalenightTheme } from "@components/MarkdownRenderer/CodeRenderer/theme";

const Lab = ({ pageContext }: PageProps<any, any>) => {
    const { exercises } = pageContext;
    return (
        <Layout>
            <div className={cn.container}>
                {exercises.map((exercise) => (
                    <div style={{ margin: 20 }}>
                        <h1>Problem Section</h1>
                        {exercise.map(({ problem, solution }) => (
                            <div>
                                <h2>{problem}</h2>
                                <CodeMirror
                                    theme={PalenightTheme}
                                    value={solution}
                                    extensions={[javascript()]}
                                    basicSetup={{
                                        syntaxHighlighting: true,
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default memo(Lab);
