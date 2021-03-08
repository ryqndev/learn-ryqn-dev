import {useState} from 'react';
import {useMachine} from '@xstate/react';
import {Machine} from 'xstate';
import {CSSTransition} from 'react-transition-group';
import {Stepper} from '../../../components';
import TemplateForm from './TemplateForm';
import useSteps from '../../../controller/hooks/useSteps';

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
                BACK: "started",
            },
        },
        pick_framework: {
            on: {
                FINISH: "finish",
                BACK: "started",
            },
        },
        finish: {
            on: {
                FINISH: "finish",
                BACK: "add_backend",
            },
        },
    }
});

const Generator = () => {
    const [formState, send] = useMachine(templateGeneratorMachine);
    const [formData, setFormData] = useState({
        hasBackend: null,
        backendLanguage: null,
        frontendFramework: null
    });
    const steps = useSteps(formData);

    return (
        <div className="template-generator--wrapper">
            <div className="layout--split-vertical">
                <Stepper className="layout-stepper" steps={steps} />
                <div className="selection">
                    <CSSTransition key={JSON.stringify(formData)} classNames="slide" timeout={350}>
                        <TemplateForm
                            formState={formState}
                            formData={formData}
                            setFormData={setFormData}
                            send={send}
                        />
                    </CSSTransition>
                </div>
            </div>
        </div>
    )
}

export default Generator;
