import { useState, useEffect, useRef } from 'react';

import {breath} from '../../../library'
import { useTheme } from '../../providers/theme/ThemeContext';

const PoolOption = ({option, indx, totalVotes})=>{

    const [breathing, setBreathing] = useState(0);
    const {BreathColors, theme} = useTheme();

    const intervalRef = useRef(0);

    const percentage = (option.votes*100/totalVotes).toFixed(2);;

    const resetCounter = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = 0;
        setBreathing(0)
      };

    let time = 5000 // miliseconds
    let hoverBrightness = 1 // scale 

    const dispatchBreathing = ()=>{

        const bar = document.getElementById(`loaded-bar${indx}`);
        if(!bar) return;

        setTimeout(()=>{
            bar.style.width = `${percentage}%`
        },300 + (time/50) *indx);

        intervalRef.current = breath(bar, indx, setBreathing, time, hoverBrightness, BreathColors);
    }

    useEffect(()=>{
        resetCounter();
    },[theme])

    useEffect(()=>{
        if(!breathing){
            dispatchBreathing();
        }
    },[breathing])

    return(
        <div className="pool-wraper">
            <div className="background">
                <div className="loaded" id={`loaded-bar${indx}`}>
                </div>
                <div className="percentage">
                    {percentage}% - {option.votes} Votes
                </div>
            </div>
            <div className="text">
                {option.name}
            </div>
        </div>
    )
}

export default PoolOption;