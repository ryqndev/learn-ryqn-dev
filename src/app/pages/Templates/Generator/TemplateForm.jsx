import {Link} from 'react-router-dom';

const TemplateForm = ({formState, formData, setFormData, send}) => {
    const props = {send: send, formData: formData, setFormData: setFormData, back: () => send('BACK')};
    switch(formState.value){
        case 'add_backend':
            return <BackendLanguage {...props} />
        case 'pick_framework':
            return <FrontendFramework {...props} />
        case 'finish':
            return <Result {...props} />
        case 'started':
        default:
            return <Backend {...props} />
    }
}

const Backend = ({formData, setFormData, send}) => {
    const hasBackend = formData?.hasBackend;
    const toggleBackend = (value) => {
        setFormData({...formData, hasBackend: value});
        setTimeout(() => {send(value ? 'ADD_BACKEND' : 'NO_BACKEND')}, 100);
    }
    return (
        <div className="template--form-item">
            <h1>Backend</h1>
            <div className="backend--select">
                <button className={`option ${hasBackend && 'selected'}`} onClick={() => {toggleBackend(true)}}>
                    <h2>Yes, I need a backend</h2>
                    <p>This will set up a backend server in your preferred language</p>
                </button>
                <button className={`option ${hasBackend === false && 'selected'}`} onClick={() => {toggleBackend(false)}}>
                    <h2>No, I do not need a backend</h2>
                    <p>This will create a frontend folder only. However, you can still opt for a BaaS like Firebase if you want.</p>
                </button>
            </div>
        </div>
    );
}

const BackendLanguage = ({formData, setFormData, send, back}) => {
    const setBackendLanguage = (value, link) => {
        setFormData({...formData, backendLanguage: value, backendLink: link});
        setTimeout(() => {send('CHOOSE_LANGUAGE')}, 100);
    }
    return (
        <div className="template--form-item">
            <h1>Backend (Language)</h1>
            <div className="backend-language--select">
                <button className={`option`} onClick={() => {setBackendLanguage('Python (Flask)', 'flask')}}>
                    <h2>Python (Flask)</h2>
                    <p>Recommended</p>
                </button>
                <button className={`option`} onClick={() => {setBackendLanguage('Javascript (Node.js/Express)', 'node')}}>
                    <h2>Javascript (Node.js/Express)</h2>
                    <p>Recommended</p>
                </button>
                <button className="option">
                    <h2 className="disabled">More to come...</h2>
                </button>
            </div>
            <button className="back-nav" onClick={back}>back</button>
        </div>
    );
}

const FrontendFramework = ({formData, setFormData, send, back}) => {
    const setFrontendFramework = (value, link) => {
        setFormData({...formData, frontendFramework: value, frontendLink: link});
        setTimeout(() => {send('FINISH')}, 100);
    }
    return (
        <div className="template--form-item">
            <h1>Frontend (Framework)</h1>
            <div className="backend-language--select">
                <button className={`option`} onClick={() => {setFrontendFramework('HTML/CSS/JS (Vanilla)', 'vanilla')}}>
                    <h2>HTML/CSS/JS (Vanilla)</h2>
                    <p>Recommended for beginners</p>
                </button>
                <button className={`option`} onClick={() => {setFrontendFramework('React', 'reactjs')}}>
                    <h2>React (with Hooks, not Classes)</h2>
                </button>
                {/* <button className={`option`} onClick={() => {setFrontendFramework('Vue.js', 'vue')}}>
                    <h2>Vue.js (3)</h2>
                </button> */}
                <button className="option">
                    <h2 className="disabled">More to come...</h2>
                </button>
            </div>
            <button className="back-nav" onClick={back}>back</button>
        </div>
    );
}

const Result = ({formData, back}) => {
    const documentationLink = `/docs/${formData.frontendLink}${formData.hasBackend ? '+' + formData.backendLink : ''}`;
    return (
        <div>
            {/* {JSON.stringify(formData)} */}
            <Link target="_blank" rel="noopener noreferrer" to={documentationLink}>Click here for the documentation</Link>
            <button className="back-nav" onClick={back}>back</button>
        </div>
    );
}



export default TemplateForm;