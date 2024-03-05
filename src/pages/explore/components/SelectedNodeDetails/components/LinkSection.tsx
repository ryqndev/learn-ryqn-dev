import { Link } from "gatsby";
import graph from "@content/graph.json";

export const getUrl = (id: string) => {
    const link = graph.nodes.find((e) => e.id === id)?.val.link;

    if (!link) return "/explore";
    if (Array.isArray(link)) return "/" + link.join("/");
    return "/article" + link;
};

export const LinkSection = ({ links }: { links: string[] }) => {
    return (
        <div>
            {links && (
                <>
                    <h3>Next:</h3>
                    <ul>
                        {links?.map((link) => {
                            return (
                                <li>
                                    <Link key={link} to={getUrl(link)}>
                                        {link}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </>
            )}
        </div>
    );
};
