import React, {useState, useEffect, useRef} from 'react';
import LiveTranscript from './LiveTranscript';
import { Time, YoutubeLink } from '../../globals/Utils';
import YouTubePlayer from 'react-player/lib/players/YouTube'
import './Lesson.scss';

const Lesson = ({video}) => {
    const [length, setLength] = useState(new Time(video.length));
    const [link, setLink] = useState(new YoutubeLink(video.link));
    const [played, setPlayed] = useState(0);

    useEffect(() => {
        setLength(new Time(video.length));
        setLink(new YoutubeLink(video.link));
        // let getPlayed = setInterval(() => {
        //     setPlayed(document.getElementById("movie_player").getCurrentTime());
        // }, 1000);
        // return () => {
        //     clearInterval(getPlayed);
        // }
    }, [video]);

    return (
        <div className="lesson-w">
            <div className="video-w">
                <YouTubePlayer
                    url={video.link}
                    onProgress={e => {setPlayed(~~e.playedSeconds)}}
                    controls
                />
            </div>
            {/* <div className="vid-info--w">
                <div className="title">{video.title}</div>
                <div className="time">{length.toText(false)}</div>
                <div className="date">{video.date}</div>
                <div className="date">{video.desc}</div>
            </div> */}
            <LiveTranscript video={link.getID()} time={played}/>
        </div>
    )
}

export default Lesson;
