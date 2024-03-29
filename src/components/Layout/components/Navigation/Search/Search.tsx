import { useEffect, useMemo, useRef, useState } from "react";
import articles from "@content/article/Articles.json";
import tutorials from "@content/tutorial/Tutorials.json";
import * as cn from "./Search.module.scss";
import SearchIcon from "./search.svg";
import Fuse from "fuse.js";
import {
    NoResultsFound,
    Result as SearchResult,
} from "./components/Result/Result";
import { IArticleMetaData } from "@templates/Article/types";
import { useKeyboardShortcuts } from "@controllers";
import { useKeyboard } from "./controllers/useKeyboard";
import { Tooltip as SearchTooltip } from "./components/Tooltip/Tooltip";

const content = [...articles, ...tutorials].filter((item) => !item?.hidden);

export const Search = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [results, setResults] = useState<IArticleMetaData[]>([]);
    const [query, setQuery] = useState("");
    const { selected } = useKeyboard(results, containerRef?.current);

    const searchBarShortcutRegistration = useMemo(
        () => ({
            combination: ["Meta", "k"],
            label: "Search...",
            description: "Open up the search bar",
            onTrigger: () => inputRef.current?.focus(),
        }),
        []
    );

    useKeyboardShortcuts(searchBarShortcutRegistration);

    const fuse = useMemo(
        () =>
            new Fuse(content, {
                isCaseSensitive: false,
                shouldSort: true,
                threshold: 0.3,
                keys: ["title", "summary", "tags"],
            }),
        [articles]
    );

    useEffect(() => {
        setResults(
            !query.length ? content : fuse.search(query).map(({ item }) => item)
        );
    }, [fuse, query]);

    return (
        <div className={cn.container} ref={containerRef}>
            <div className={cn.backdrop}></div>
            <div className={cn.wrapper}>
                <input
                    ref={inputRef}
                    id="search"
                    className={cn.input}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search..."
                    autoComplete="off"
                />

                <label htmlFor="search" className={cn.label}>
                    <SearchIcon
                        className={cn.icon}
                        viewBox="0 0 48 48"
                        htmlFor="search"
                    />
                </label>

                <div className={cn.results} tabIndex={0}>
                    <SearchTooltip />

                    <div className={cn.overflow}>
                        {results.map((article, idx) => (
                            <SearchResult
                                key={article.link.join("/")}
                                selected={idx === selected}
                                {...article}
                            />
                        ))}
                        {!results.length && <NoResultsFound />}
                    </div>
                </div>
            </div>
        </div>
    );
};
