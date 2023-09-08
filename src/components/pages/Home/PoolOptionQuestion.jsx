import { useEffect, useState } from "react";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useNavigate } from 'react-router-dom'


const PoolOptionQuestion = ({q,i, parent,active, parentName})=>{

    const [blured, setBlured] = useState(1);
    const navigate = useNavigate();

    const activeOn = i+1 == active

    const setResults= ()=>{
        const toSave={pool: parentName, question: q.question};
        window.localStorage.setItem('selectedResult', JSON.stringify(toSave));
        navigate('/results');
    }

    useEffect(()=>{
        setBlured( i+1 < active);
    },[])

    return(
        <div id={activeOn ? `${parent}-${i+1}-active`: ""} className={`${activeOn ? `question active`: `question `} ${blured ? 'blured' : ''}`}
            onClick={setResults}
        >
            <span>#{q.order}</span>
            <p key={q.question}>{q.question}</p>
            {blured ? 
                <CheckBoxIcon/>
            :""}
        </div>
    )
}

export default PoolOptionQuestion