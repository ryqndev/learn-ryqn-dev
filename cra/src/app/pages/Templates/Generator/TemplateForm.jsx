import {useHistory} from 'react-router-dom';

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

const Backend = ({formData, setFormData, send, back}) => {
    const hasBackend = formData?.hasBackend;
    const toggleBackend = (value) => {
        setFormData({...formData, hasBackend: value});
    }
    const next = () => send(formData?.hasBackend ? 'ADD_BACKEND' : 'NO_BACKEND');
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
            <div className="nav-button--grid">
                <button className="prev" disabled>Prev</button>
                /
                <button className="next" disabled={formData.hasBackend === null} onClick={next}>Next</button>
            </div>
        </div>
    );
}

const BackendLanguage = ({formData, setFormData, send, back}) => {
    const setBackendLanguage = (value, link) => {
        setFormData({...formData, backendLanguage: value, backendLink: link});
    }
    const next = () => send('CHOOSE_LANGUAGE');
    return (
        <div className="template--form-item">
            <h1>Backend (Language)</h1>
            <div className="backend-language--select">
                <button className={`option ${formData?.backendLink === 'flask' && 'selected'}`} onClick={() => {setBackendLanguage('Python (Flask)', 'flask')}}>
                    <h2>Python (Flask)</h2>
                    <p>Recommended</p>
                </button>
                <button className={`option ${formData?.backendLink === 'node' && 'selected'}`} onClick={() => {setBackendLanguage('Javascript (Node.js/Express)', 'node')}}>
                    <h2>Javascript (Node.js/Express)</h2>
                    <p>Recommended</p>
                </button>
                <button className="option" disabled>
                    <h2 className="disabled">More to come...</h2>
                </button>
            </div>
            <div className="nav-button--grid">
                <button className="prev" onClick={back}>Prev</button>
                /
                <button className="next" disabled={!formData?.backendLink} onClick={next}>Next</button>
            </div>
        </div>
    );
}

const FrontendFramework = ({formData, setFormData, send, back}) => {
    const setFrontendFramework = (value, link) => {
        setFormData({...formData, frontendFramework: value, frontendLink: link});
    }
    const next = () => send('FINISH');
    return (
        <div className="template--form-item">
            <h1>Frontend (Framework)</h1>
            <div className="backend-language--select">
                <button className={`option ${formData?.frontendLink === 'vanilla' && 'selected'}`} onClick={() => {setFrontendFramework('HTML/CSS/JS (No Framework)', 'vanilla')}}>
                    <h2>HTML/CSS/JS (No Framework)</h2>
                    <p>Recommended for beginners</p>
                </button>
                <button className={`option ${formData?.frontendLink === 'reactjs' && 'selected'}`} onClick={() => {setFrontendFramework('React', 'reactjs')}}>
                    <h2>React (with Hooks, not Classes)</h2>
                </button>
                <button className="option" disabled>
                    <h2 className="disabled">More to come...</h2>
                </button>
            </div>
            <div className="nav-button--grid">
                <button className="prev" onClick={back}>Prev</button>
                /
                <button className="next" disabled={!formData?.frontendFramework} onClick={next}>Next</button>
            </div>
        </div>
    );
}

const Result = ({formData, back}) => {
    const documentationLink = `/docs/${formData.frontendLink}${formData.hasBackend ? '+' + formData.backendLink : ''}`;
    const history = useHistory();
    const start = () => {
        history.push(documentationLink);
    }
    return (
        <div className="template--form-item">
            <h1>Your Template</h1>
            <div className="details">
                <div className="detail">
                    <h2>HAS BACKEND?</h2>
                    <p>{formData?.hasBackend ? "Yes" : "No"}</p>
                </div>
                {
                    formData?.hasBackend && 
                    (
                        <div className="detail">
                            <h2>BACKEND LANGUAGE</h2>
                            <p>{formData?.backendLanguage}</p>
                        </div>
                    )
                }
                <div className="detail">
                    <h2>FRONTEND FRAMEWORK</h2>
                    <p>{formData?.frontendFramework}</p>
                </div>
            </div>
            <div className="nav-button--grid">
                <button className="prev" onClick={back}>Prev</button>
                /
                <button className="start" onClick={start}>{'Start >>'}</button>
            </div>
        </div>
    );
}



export default TemplateForm;