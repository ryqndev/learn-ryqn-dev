import { Folder, Workspace } from "@components/editor/types";
import { useCallback, useState } from "react";

export type FileContentMap = {
    [id: string]: string;
};

const initializeFileContents = (
    folder: Folder,
    currentPath = "",
    contents: FileContentMap = {}
) => {
    for (const item of folder.contents) {
        console.log("@ryqndev", item);
        // its a file
        if (item?.type) {
            contents[currentPath + "/" + item.name] = item.content;
        } else {
            initializeFileContents(
                item,
                currentPath + "/" + item.name,
                contents
            );
        }
    }
    return contents;
};

export const useFileContents = (workspace: Workspace) => {
    const [fileContents, setFileContents] = useState<FileContentMap>(() =>
        initializeFileContents(workspace, "Workspace")
    );

    const updateFile = useCallback(
        (fileName: string) => (update: string) => {
            setFileContents((prev) => ({ ...prev, [fileName]: update }));
        },
        []
    );

    return { fileContents, updateFile };
};
