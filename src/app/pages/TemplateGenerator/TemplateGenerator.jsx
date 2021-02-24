import {useState} from 'react';
import {useMachine} from '@xstate/react';
import {Machine} from 'xstate';
import {Stepper} from '../../components';
import {ScrollableNotice} from '../../components';
import TemplateForm from './TemplateForm';
import useSteps from '../../controller/hooks/useSteps';

const templateGeneratorMachine = Machine({
    id: 'templateGenerator',
    initial: 'started',
    states: {
        started: {
            on: {
                ADD_BACKEND: "add_backend",
                NO_BACKEND: "pick_framework",
            },
        },
        add_backend: {
            on: {
                CHOOSE_LANGUAGE: "pick_framework",
            },
        },
        pick_framework: {
            on: {
                FINISH: "finish",
            },
        },
        finish: {
            type: "final",
        },
    }
});

const TemplateGenerator = () => {
    const [formState, send] = useMachine(templateGeneratorMachine);
    const [formData, setFormData] = useState({
        hasBackend: null,
        backendLanguage: null,
        frontendFramework: null
    });
    const steps = useSteps(formData);

    return (
        <div className="template-generator--wrapper">
            <div className="hero page__component">
                <h1>Templates</h1>
                <p>This is a templating tool that will set up a web app boilerplate with your preferred languages. Not limited to but ideal for hackathons. Documentation will be provided as well. Let's get started!</p>
                <ScrollableNotice />
            </div>
            <div className="layout--split-vertical">
                <Stepper className="layout-stepper" steps={steps} />
                <div className="selection">
                    <TemplateForm
                        formState={formState}
                        formData={formData}
                        setFormData={setFormData}
                        send={send}
                    />
                </div>
            </div>
            <div className="result">
                <div className="bg"></div>
            </div>
        </div>
    )
}

export default TemplateGenerator;
