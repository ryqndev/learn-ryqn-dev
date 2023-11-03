import { useState } from "react";
import { DEFAULT_WORKSPACE } from "./utils";
import { useFileContents } from "./useFileContents";

export const useWorkspace = () => {
    const [selectedPath, setSelectedPath] = useState("Workspace/index.html");

    const [workspace, setWorkspace] = useState(DEFAULT_WORKSPACE);
    const { fileContents, updateFile } = useFileContents(workspace);

    return {
        workspace,
        fileContents,
        selectedPath,
        updateFile,
    };
};
