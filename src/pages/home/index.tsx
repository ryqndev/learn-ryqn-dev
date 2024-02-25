import { Layout } from "@components/Layout/Layout";
import * as cn from "./Home.module.scss";

const Head = () => {
    return (
        <>
            <title>Learn</title>
            <link
                href="https://fonts.googleapis.com/css2?family=Nunito&family=Plus+Jakarta+Sans:wght@400;800&display=swap"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Lexend:wght@800&family=Passion+One:wght@700&display=swap"
                rel="stylesheet"
            />
        </>
    );
};

const Home = () => {
    return (
        <Layout>
            <Head />
            <main className={cn.container}>
                <div className={cn.hero}>
                    <h1>LEARN.</h1>
                    <h1>RYQN.</h1>
                    <h1>DEV.</h1>
                </div>
            </main>
            {/* <Footer  /> */}
        </Layout>
    );
};

export default Home;
