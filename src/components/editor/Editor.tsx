import ReactCodeMirror from "@uiw/react-codemirror";
import { PalenightTheme } from "@components/MarkdownRenderer/CodeRenderer/theme";
import { html } from "@codemirror/lang-html";
import { compressToEncodedURIComponent } from "lz-string";
import { memo, useEffect } from "react";
import * as cn from "./Editor.module.scss";
import { Renderer } from "./components/Renderer/Renderer";
import { Directory } from "./components/Directory/Directory";
import { useWorkspace } from "./controllers/useWorkspace";

export const Editor = memo(function Editor() {
    const { workspace, fileContents, selectedPath, updateFile } =
        useWorkspace();

    useEffect(() => {
        window.history.pushState(
            {},
            "",
            `/lab?c=${compressToEncodedURIComponent(JSON.stringify(workspace))}`
        );
    }, [workspace]);
    console.log(
        "sdfsdf",
        fileContents,
        selectedPath,
        fileContents[selectedPath]
    );
    return (
        <div className={cn.container}>
            <Directory directory={workspace} />
            <div className={cn.editor}>
                <ReactCodeMirror
                    className={cn.editor}
                    theme={PalenightTheme}
                    value={fileContents[selectedPath]}
                    extensions={[html()]}
                    onChange={updateFile(selectedPath)}
                    basicSetup={{
                        syntaxHighlighting: true,
                    }}
                />
            </div>
            <Renderer files={fileContents} />
        </div>
    );
});
