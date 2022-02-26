import {useParams} from 'react-router-dom';

const Documentation = () => {
    const {stack} = useParams();
    console.log("stack:", stack);
    return (
        <div>
            
        </div>
    );
}

export default Documentation;
