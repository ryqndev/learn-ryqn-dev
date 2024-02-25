import { readFileSync } from "fs";
import path from "path";
import yaml from "js-yaml";
import articles from "./src/content/article/Articles.json";
import labs from "./src/content/lab/Labs.json";
import tutorials from "./src/content/tutorial/Tutorials.json";

exports.onCreateBabelConfig = ({ actions }) => {
    actions.setBabelPlugin({
        name: "@babel/plugin-transform-react-jsx",
        options: {
            runtime: "automatic",
        },
    });
};

exports.createPages = async ({ actions: { createPage } }) => {
    const fetchArticle = (link) =>
        readFileSync(`./src/content${link}/README.md`, "utf-8");

    articles.forEach((article) => {
        const link = "/" + article.link.join("/");
        createPage({
            path: link,
            component: require.resolve("./src/templates/Article/index.tsx"),
            context: { ...article, content: fetchArticle(link) },
        });
    });

    const fetchLabExercises = (link, exercise) =>
        yaml.load(readFileSync(`./src/content${link}/${exercise}`, "utf-8"));

    labs.forEach((lab) => {
        const link = "/" + lab.link.join("/");

        createPage({
            path: link,
            component: require.resolve("./src/templates/Lab/index.tsx"),
            context: {
                ...lab,
                exercises: lab.exercises.map((exercise) =>
                    fetchLabExercises(link, exercise)
                ),
            },
        });
    });

    const fetchTutorial = (link) =>
        readFileSync(`./src/content${link}/README.md`, "utf-8");

    tutorials.forEach((tutorial) => {
        const link = "/" + tutorial.link.join("/");
        createPage({
            path: link,
            component: require.resolve("./src/templates/Tutorial/index.tsx"),
            context: { ...tutorial, content: fetchTutorial(link) },
        });
    });
};

exports.onCreateWebpackConfig = function ({ stage, loaders, actions }) {
    if (stage === "build-html") {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /react-force-graph-3d/,
                        use: loaders.null(),
                    },
                ],
            },
        });
    }
    actions.setWebpackConfig({
        resolve: {
            alias: {
                "@assets": path.resolve(__dirname, "src/assets"),
                "@components": path.resolve(__dirname, "src/components"),
                "@controllers": path.resolve(__dirname, "src/controllers"),
                "@content": path.resolve(__dirname, "src/content"),
                "@templates": path.resolve(__dirname, "src/templates"),
            },
        },
    });
};
