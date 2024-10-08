const yaml = require("js-yaml");
const fs = require("fs");

const CONTENT_PATH = "src/content";

try {
    console.log("Reading tutorials YAML list...");
    const tutorialData = yaml.load(
        fs.readFileSync(`${CONTENT_PATH}/tutorial/complete-list.yaml`, {
            encoding: "utf8",
        })
    );
    console.log("Writing tutorials JSON list...");
    fs.writeFile(
        `${CONTENT_PATH}/tutorial/Tutorials.json`,
        JSON.stringify(tutorialData),
        { encoding: "utf8" },
        () => {}
    );

    console.log("Reading Articles YAML list...");
    const articleData = yaml.load(
        fs.readFileSync(`${CONTENT_PATH}/article/complete-list.yaml`, {
            encoding: "utf8",
        })
    );
    console.log("Writing articles JSON list...");
    fs.writeFile(
        `${CONTENT_PATH}/article/Articles.json`,
        JSON.stringify(articleData),
        { encoding: "utf8" },
        () => {}
    );
} catch (e) {
    console.log(e);
}
