import {
    Directory as FileDisplay,
    FolderRenderer,
} from "@components/MarkdownRenderer/CodeRenderer/components/FileStructureDisplay/FileStructureDisplay";
import { Folder } from "@components/MarkdownRenderer/CodeRenderer/components/FileStructureDisplay/types";
import { memo } from "react";
import * as cn from "./Directory.module.scss";

export const Directory = memo(function Directory({
    directory,
}: {
    directory: Folder;
}) {
    return (
        <div className={cn.container}>
            <FileDisplay directory={directory} />
        </div>
    );
});
