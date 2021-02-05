/**
 * @author ryan yang
 * 
 * @description remark custom formatter that converts markdown to
 * carbon.sh-like code snippets
 */

import {UnControlled as CodeMirror} from 'react-codemirror2';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/css/css';
import './MarkdownRenderer.scss';



const MarkdownRenderer = {
    heading: (props) => {
        switch(props?.level){
            case 1:
                return (
                    <div className="article--header">
                        <h1 className="md-render--header">{props.node.children[0].value}</h1>
                        <p>by <a href="https://ryqn.dev/">Ryan Yang</a></p>
                    </div>
                );
            case 2:
                return (
                    <h2 className="md-render--header">{props.node.children[0].value}</h2>
                );
            case 3:
                return (
                    <h3 className="md-render--header">{props.node.children[0].value}</h3>
                );
            default:
                return (
                    <h4 className="md-render--header">{props.node.children[0].value}</h4>
                );
        }

    },
    emphasis: (props) => {
        return <span className="italicize">{props.children}</span>;
    },
    code: ({language, node, value}) => {
        if(language === 'file') return '';
        const options = {
            mode: language,
            theme: 'material-palenight',
            lineNumbers: true,
            viewportMargin: Infinity
        }
        if(options.mode === 'html'){
            options.mode = 'htmlmixed';
            options.tabSize = 2;
        }
        return(
            <div className="md-render--code">
                <div className="title-bar">
                    <svg height="44px" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="25px" cy="22px" r="6.5px" fill="red"/>
                        <circle cx="48px" cy="22px" r="6.5px" fill="yellow"/>
                        <circle cx="71px" cy="22px" r="6.5px" fill="green"/>
                    </svg>
                    <h3>{node?.meta}</h3>
                </div>
                <div className="code-mirror--wrapper">
                    <CodeMirror
                        value={value}
                        options={options}
                        onChange={(editor, data, value) => {}}
                    />
                </div>
            </div>
        )
    }
}

export default MarkdownRenderer;