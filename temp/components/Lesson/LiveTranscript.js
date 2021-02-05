import React, {useState, useEffect} from 'react';
import {transcript as transcriptLoadingData} from '../../globals/LoadingFiller';
import './LiveTranscript.scss';
import { Time, bs } from '../../globals/Utils';

const LiveTranscript = ({video, time, id="rPXvQJScsdQ"}) => {
    const [transcript, setTranscript] = useState(transcriptLoadingData);


    useEffect(() => {
        // get new transcript file with fetch
        fetch(`https://api.learn.ryqn.dev/transcripts/${id}.json`)
        .then(res => {
            return res.json();
        })
        .then(res => {
            setTranscript(res);
            console.log(res);
        })
    }, [id]);

    useEffect(() => {
        console.log("trasn", transcript)
    }, [transcript]);

    useEffect(() => {
        console.log(time);
        // bs(transcript, time, e => {return e.t});
        // let currentTime = bs(transcript, time);
        let currentTime = bs(transcript, time, e => {return e.t});
        // console.log(currentTime);
    }, [time]);

    return (
        <div className="transcript-w">
            Transcript
            {transcript.map(e => <TranscriptLine key={e.t} {...e}/> )}
        </div>
    )
}

const TranscriptLine = ({t, c}) => {
    let timestamp = new Time(t);
    return (
        <div className="transcript-line--w">
            <div className="time">
                <span>[ </span>{timestamp.toText(true)}<span> ]</span>
            </div>
            <div className="content">
                {c}
            </div>
        </div>
    );
}

export default LiveTranscript;
