const yaml = require("js-yaml");
const fs = require("fs");

const CONTENT_PATH = "src/content";

function createGinormousJSON(allowHidden = false) {
    try {
        console.log("Reading tutorials YAML list...");
        const tutorialData = yaml.load(
            fs.readFileSync(`${CONTENT_PATH}/tutorial/complete-list.yaml`, {
                encoding: "utf8",
            })
        );
        const articleData = yaml.load(
            fs.readFileSync(`${CONTENT_PATH}/article/complete-list.yaml`, {
                encoding: "utf8",
            })
        );
        const aggregate = [
            ...tutorialData.map((e) => ({ ...e })),
            ...articleData.map((e) => ({ ...e })),
        ].reduce(
            (acc, cur) => {
                if (!allowHidden && cur.hidden) return acc;
                acc.nodes.push({
                    id: cur.title,
                    name: cur.title,
                    val: cur,
                });
                console.log(cur?.links?.to);
                console.log(cur?.links?.from);
                // if (cur?.links?.to?.length) {
                [...(cur.links?.to ?? []), ...(cur?.links?.from ?? [])].forEach(
                    (link) =>
                        acc.links.push({
                            source: cur.title,
                            target: link,
                        })
                );
                // }
                // if (cur?.links?.from?.length) {
                //     cur.links.from.forEach((link) =>
                //         acc.links.push({
                //             source: cur.title,
                //             target: link,
                //         })
                //     );
                // }

                return acc;
            },
            {
                nodes: [],
                links: [],
            }
        );

        return aggregate;
    } catch (e) {
        console.log(e);
    }
}

const aggregate = createGinormousJSON();

fs.writeFile(
    `${CONTENT_PATH}/graph.json`,
    JSON.stringify(aggregate),
    { encoding: "utf8" },
    () => {}
);

console.log(aggregate);
console.log("TOTAL COUNT:", Object.keys(aggregate).length);
