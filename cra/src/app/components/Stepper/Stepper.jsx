import {useEffect, useState} from 'react';

/**
 * A controller Stepper component. 
 * @param {Object[]} steps 
 */
const Stepper = ({steps, className=""}) => {
    const getStyledClassName = (status) => status.split(' ').join('-').toLowerCase();
    const [screenWidth, setScreenWidth] = useState(window.screen.width);

    useEffect(() => {
        const resizeListener = () => {setScreenWidth(window.screen.width)}
        window.addEventListener('resize', resizeListener);
        return () => {window.removeEventListener('resize', resizeListener)}
    }, [])

    return (
        <div className={"stepper--wrapper " + className}>
            <div className="row">
            {steps.map(({title, status, content}, index) => (
                <div key={title} className={"step--inline " + getStyledClassName(status)}>
                    <div className="step">
                        <div className={"circle " + getStyledClassName(status)}></div>
                        <span>0{index + 1}</span>
                        <h3>{title}</h3>
                        <div className="status">
                            <div>{status}</div>
                        </div>
                        {   
                            (index !== steps.length - 1) && 
                            <svg className="chart" height="100%" width="100%" viewBox="0 0 100 100"  preserveAspectRatio="none">
                                <line x1="50%" y1="0" x2="50%" y2="100%" strokeWidth="10"></line>
                            </svg>
                        }
                        <p>{content}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}

export default Stepper;
