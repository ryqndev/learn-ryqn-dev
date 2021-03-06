import {useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import {useParams} from 'react-router-dom';
import gfm from 'remark-gfm';
import {MarkdownRenderer, Spinner} from '../../components';

const Lesson = () => {
    const {lessonName} = useParams();
    const [content, setContent] = useState(null);

    useEffect(() => {
        import(`../../../api-learn-ryqn-dev/content/${lessonName}/README.md`).then(response => {
            fetch(response.default).then(res => res.text()).then(setContent);
        });
    }, [lessonName]);
    
    const imageRenderer = (props) => {
        let url = `https://cdn.jsdelivr.net/gh/ryqndev/learn-ryqn-dev/master/src/api-learn-ryqn-dev/content/${lessonName}${props.src.substr(1)}`;
        return <img alt={props.alt} src={url} />;
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
