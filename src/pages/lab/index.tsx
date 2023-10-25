import * as cn from "./Lab.module.scss";
import { memo } from "react";

import { Layout } from "@components";
import { Head } from "@components/Layout";
import { Editor } from "./editor/Editor";

const Lab = memo(function Lab() {
    return (
        <Layout>
            <Head />
            <main className={cn.container}>
                <Editor />
            </main>
        </Layout>
    );
});

export default Lab;
