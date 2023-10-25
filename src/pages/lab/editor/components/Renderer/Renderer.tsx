import { memo } from "react";
import * as cn from "./Renderer.module.scss";
import { FileContentMap } from "../../controllers/useFileContents";

export const Renderer = memo(function Renderer({
    files,
}: {
    files: FileContentMap;
}) {
    return (
        <div className={cn.container}>
            <div className={cn.header}>
                <svg
                    height="44px"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => {}}
                >
                    <circle cx="25px" cy="22px" r="6.5px" fill="red" />
                    <circle cx="48px" cy="22px" r="6.5px" fill="yellow" />
                    <circle cx="71px" cy="22px" r="6.5px" fill="green" />
                </svg>
                <div className={cn.url}>
                    <input type="text" value={"https://localhost:8000"} />
                </div>
            </div>
            <div className={cn.renderer}>
                <div className={cn.backdrop}>
                    <iframe
                        srcDoc={`<style>${Object.entries(files).reduce(
                            (acc, [k, v]) => {
                                return k.endsWith(".css")
                                    ? acc + "\n" + v
                                    : acc;
                            },
                            ""
                        )}</style>${
                            Object.entries(files).find(([k]) =>
                                k.endsWith(".html")
                            )?.[1] ?? ""
                        } `}
                    />
                </div>
            </div>
        </div>
    );
});
