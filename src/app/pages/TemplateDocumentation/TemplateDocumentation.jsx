import {useParams} from 'react-router-dom';

const TemplateDocumentation = () => {
    const {stack} = useParams();
    console.log("stack:", stack);
    return (
        <div>
            
        </div>
    );
}

export default TemplateDocumentation;
