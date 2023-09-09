
import BackHandIcon from '@mui/icons-material/BackHand';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import PersonIcon from '@mui/icons-material/Person';

import PoolOptionQuestion from "./PoolOptionQuestion";
import { useEffect } from 'react';

const PoolTable = ({pool, indx})=>{

    function scrollToLast(table) {
        let active = document.getElementById(`${indx}-${pool.active}-active`);
        if(!active) return;
        // table.scrollTo({ top: active.getBoundingClientRect().top/2 - active.getBoundingClientRect().height, behavior: 'smooth' })
        table.scrollTo({ top: active.offsetTop - active.getBoundingClientRect().height/2, behavior: 'smooth' })
      }

    useEffect(()=>{
        var table = document.getElementById(indx+'-options');
        if (!table) return
        scrollToLast(table);
    },[])

    return (
        <div className="table" key={pool.name} >
        <div className="head">
            <h3> {pool.questions.length == 1 ? 'Simple Pool' : pool.questions.length + " Questions Pool"}</h3>
            <h2>{pool.name}</h2>
            <div className="meta-data">
                <div className="meta"><BackHandIcon/> {pool.totalVotes} Votes</div>
                <div className="meta"><WatchLaterIcon/> Published {pool.daysAgo} days ago</div>
            </div>
        </div>

        <div className="body" id={indx+'-options'}>
            {pool.questions.map((q,i)=>
                <PoolOptionQuestion q={q} i={i} parent={indx} parentName={pool.name} key={pool.name + i} active={pool.active}></PoolOptionQuestion>
            )}
        </div>

        <div className="meta footered"><PersonIcon/> By {pool.creator}</div>
        </div>  
    )
}

export default PoolTable;