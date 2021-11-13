import {UnControlled as CodeMirror} from 'react-codemirror2';
import FileStructureDisplay from './FileStructureDisplay';
import 'codemirror/mode/python/python';
import 'codemirror/mode/shell/shell';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/css/css';

const Code = ({language, node, value}) => {
    if(!language) return <p className="list-item__indent">{value}</p>;
    
    if(language === 'file') return <FileStructureDisplay value={value}/>;

    const options = {
        mode: language,
        theme: 'material-palenight',
        lineNumbers: true,
        viewportMargin: Infinity,
    }
    
    if(options.mode === 'html'){
        options.mode = 'htmlmixed';
        options.tabSize = 2;
    }
    if(options.mode === 'bash'){
        options.lineNumbers = false;
        options.readOnly = true;
        options.mode = 'shell';
    }

    return (
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
    );
}

export default Code;
