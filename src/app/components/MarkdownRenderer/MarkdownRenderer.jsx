/**
 * @author ryan yang
 * 
 * @description remark custom formatter that converts markdown to
 * carbon.sh-like code snippets
 */
import Code from './Code';
import './MarkdownRenderer.scss';

const MarkdownRenderer = {
    heading: (props) => {
        switch(props?.level){
            case 1:
                document.title = props.node.children[0].value;
                return (
                    <div className="article--header">
                        <h1 className="md-render--header">{props.node.children[0].value}</h1>
                        <p>by <a href="https://ryqn.dev/">Ryan Yang</a></p>
                    </div>
                );
            case 2:
                return (<h2 className="md-render--header">{props.node.children[0].value}</h2>);
            case 3:
                return (<h3 className="md-render--header">{props.node.children[0].value}</h3>);
            default:
                return (<h4 className="md-render--header">{props.node.children[0].value}</h4>);
        }
    },
    table: ({children}) => {
        return (
            <div className="md-render--table">
                <table>{children}</table>
            </div>
        );
    },

    inlineCode: (props) => {
        return <span className="md-render--inline-code">{props.children}</span>;
    },
    emphasis: (props) => {
        return <span className="italicize">{props.children}</span>;
    },
    code: Code
}

export default MarkdownRenderer;