import { useCallback, useEffect, useState } from "react";
import { PressedKeyMap } from "./types";

interface KeyboardShortcutProps {
    combination: string[];
    label: string;
    description: string;
    onTrigger: VoidFunction;
    onClose?: VoidFunction;
}

export const useKeyboardShortcuts = ({
    combination,
    label,
    description,
    onTrigger,
    onClose,
}: KeyboardShortcutProps) => {
    const [pressed, setPressed] = useState<PressedKeyMap>({});

    const onKeydown = useCallback(
        (e: KeyboardEvent) => {
            console.log(e, "down");

            setPressed((prev) => ({ ...prev, [e.key]: true }));
            if (e.key === "k") e.preventDefault();
        },
        [setPressed]
    );

    const onKeyup = useCallback(
        (e: KeyboardEvent) => {
            setPressed((prev) => {
                delete prev[e.key];
                return { ...prev };
            });
        },
        [setPressed]
    );

    useEffect(() => {
        if (combination.every((key) => pressed[key])) {
            onTrigger();
        }
    }, [pressed]);

    useEffect(() => {
        window.addEventListener("keydown", onKeydown);
        window.addEventListener("keyup", onKeyup);
        return () => {
            window.removeEventListener("keydown", onKeydown);
            window.removeEventListener("keyup", onKeyup);
        };
    });
};
