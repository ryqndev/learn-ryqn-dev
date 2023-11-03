import { Workspace } from "@components/editor/types";

export const DEFAULT_WORKSPACE: Workspace = {
    name: "Workspace",
    contents: [
        {
            name: "index.html",
            type: "html",
            content: `<html>\n\t<head>\n\t</head>\n\t<body>\n\t\tType anything....\n\t</body>\n</html>`,
        },
        {
            name: "script.js",
            type: "js",
            content: `function load() {}`,
        },
        {
            name: "styles.css",
            type: "css",
            content: `.card {\n\tbackground-color: #151515;\n}`,
        },
    ],
};
