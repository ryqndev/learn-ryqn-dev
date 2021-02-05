import {useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import {useParams} from 'react-router-dom';
import gfm from 'remark-gfm';
import {MarkdownRenderer} from '../../components';
import './Lesson.scss';

const Lesson = () => {
    const { lessonName } = useParams();
    const [content, setContent] = useState('');

    useEffect(() => {
        let url = `https://raw.githubusercontent.com/ryqndev/api-learn-ryqn-dev/master/content/${lessonName}/README.md`;
        fetch(url).then(res => res.text()).then(setContent);
    }, [lessonName]);


    return (
        <div className="lesson-wrapper">
            <main>
                <ReactMarkdown plugins={[gfm]} renderers={MarkdownRenderer}>
                    {content}
                </ReactMarkdown>
            </main>
        </div>
    )
}

export default Lesson;
