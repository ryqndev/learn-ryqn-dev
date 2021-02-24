import {useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import {useParams} from 'react-router-dom';
import gfm from 'remark-gfm';
import {MarkdownRenderer, Spinner} from '../../components';

const Lesson = () => {
    const {lessonName} = useParams();
    const [content, setContent] = useState(null);

    useEffect(() => {
        let url = `https://raw.githubusercontent.com/ryqndev/api-learn-ryqn-dev/master/content/${lessonName}/README.md`;
        fetch(url).then(res => res.text()).then(setContent);
    }, [lessonName]);
    
    const imageRenderer = (props) => {
        let url = `https://raw.githubusercontent.com/ryqndev/api-learn-ryqn-dev/master/content/${lessonName}`;
        return <img alt={props.alt} src={url + props.src.substr(1)} />;
    }

    return content === null ? (
        <Spinner />
    ) : (
        <div className="lesson-wrapper page__component">
            <article className="md-renderer">
                <ReactMarkdown plugins={[gfm]} renderers={{...MarkdownRenderer, image: imageRenderer}} transformLinkUri={null}>
                    {content}
                </ReactMarkdown>
            </article>
        </div>
    );
}

export default Lesson;
