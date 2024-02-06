import { memo, ReactNode } from "react";
import { Helmet } from "react-helmet";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Navigation } from "./components/Navigation/Navigation";
import * as cn from "./Layout.module.scss";
import { useLocation } from "@reach/router";
import "./styles/main.scss";

export const Layout = memo(function Layout({
    children,
}: {
    children: ReactNode;
}) {
    const location = useLocation();

    return (
        <>
            <Head />
            <Navigation />
            <TransitionGroup>
                <CSSTransition
                    key={location.pathname}
                    classNames="fast fade"
                    timeout={150}
                >
                    <>{children}</>
                </CSSTransition>
            </TransitionGroup>
        </>
    );
});

export const Head = () => (
    <Helmet>
        <link
            href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro"
            rel="stylesheet"
        />
        <link
            href="https://fonts.googleapis.com/css?family=B612+Mono"
            rel="stylesheet"
        />
        <link
            href="https://fonts.googleapis.com/css2?family=Lexend:wght@800&display=swap"
            rel="stylesheet"
        />
        <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;800"
            rel="stylesheet"
        />
        <link
            href="https://fonts.googleapis.com/css2?family=Nunito"
            rel="stylesheet"
        />
        <link
            href="https://fonts.googleapis.com/css2?family=Mukta:wght@300;400;600;800"
            rel="stylesheet"
        />
        <script
            defer
            data-domain="learn.ryqn.dev"
            src="https://plausible.io/js/plausible.js"
        ></script>

        <meta
            name="google-site-verification"
            content="o0xH1avXNyKssUbhu7Vi6uxIaRBziY2vNFX8IXDOvdE"
        />
    </Helmet>
);
