import {useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import {useParams} from 'react-router-dom';
import gfm from 'remark-gfm';
import {MarkdownRenderer, Spinner} from '../../components';

const Lesson = () => {
    const {lessonName} = useParams();
    const [content, setContent] = useState(null);

    useEffect(() => {
        import(`../../../content/${lessonName}/README.md`).then(response => {
            fetch(response.default).then(res => res.text()).then(setContent);
        });
    }, [lessonName]);

    const transformImageUri = uri => `https://cdn.jsdelivr.net/gh/ryqndev/learn-ryqn-dev@main/src/content/${lessonName}${uri.substr(1)}`;

    return content === null ? (
        <Spinner />
    ) : (
        <div className="lesson-wrapper page__component">
            <article className="md-renderer">
                <ReactMarkdown plugins={[gfm]} renderers={{...MarkdownRenderer}} transformLinkUri={null} transformImageUri={transformImageUri}>
                    {content}
                </ReactMarkdown>
            </article>
        </div>
    );
}

export default Lesson;
