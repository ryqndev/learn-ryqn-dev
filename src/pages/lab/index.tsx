import * as cn from "./Lab.module.scss";
import { memo } from "react";

import { Layout, Head } from "@components";
// import { Editor } from "../../components/editor/Editor";

const Lab = memo(function Lab() {
    return (
        <Layout>
            <Head />
            <main className={cn.container}>{/* <Editor /> */}</main>
        </Layout>
    );
});

export default Lab;
