/**
 * @author ryan yang
 * 
 * @description react-markdown custom formatter that converts markdown to
 * carbon.sh-like code snippets
 */
import {useLocation} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import scrollWithOffset from '../../controller/libs/hashLinkScroll';
import Code from './Code';

const ListItem = ({ordered, children, ...props}) => {
    const location = useLocation();
    const extraTextFromInnerLink = (node) => node.children?.[0]?.children?.[0]?.children?.[0]?.value;

    if(children.length > 1) { 
        return (
            <li>{'\u00A0'.repeat(ordered ? 6 : 0)}
                <ol>
                <HashLink smooth to={location.pathname + children[0].props.href} scroll={el => scrollWithOffset(el)}>
                    <li>{'\u00A0'.repeat(ordered ? 6 : 0)} <span>•</span> {'\u00A0'.repeat(6)} {extraTextFromInnerLink(props.node)}</li>
                </HashLink>
                {children.slice(1)}
                </ol>
            </li>
        );
    }
    return (
        <HashLink smooth to={location.pathname + children[0].props.href} scroll={el => scrollWithOffset(el)}>
            <li>{'\u00A0'.repeat(ordered ? 6 : 0)} <span>•</span> {'\u00A0'.repeat(6)} {extraTextFromInnerLink(props.node)}</li>
        </HashLink>
    )
}

const MarkdownRenderer = {
    heading: (props) => {
        const headerContent = props.node.children[0].value;
        const headerHashLink = headerContent.split(' ').join('-').toLowerCase();

        switch(props?.level){
            case 1:
                document.title = headerContent;
                return (
                    <div className="article--header">
                        <h1 className="md-render--header" id={headerHashLink}>{headerContent}</h1>
                        <p>by <a href="https://ryqn.dev/">Ryan Yang</a></p>
                    </div>
                );
            case 2:
                return (<h2 className="md-render--header" id={headerHashLink}>{headerContent}</h2>);
            case 3:
                return (<h3 className="md-render--header" id={headerHashLink}>{headerContent}</h3>);
            default:
                return (<h4 className="md-render--header" id={headerHashLink}>{headerContent}</h4>);
        }
    },
    table: ({children}) => {
        return (
            <div className="md-render--table">
                <table>{children}</table>
            </div>
        );
    },
    list: (props) => {
        return <ol>{props.children}</ol>;
    },
    listItem: ListItem,
    inlineCode: (props) => {
        return <span className="md-render--inline-code">{props.children}</span>;
    },
    emphasis: (props) => {
        return <span className="italicize">{props.children}</span>;
    },
    code: Code
}


export default MarkdownRenderer;