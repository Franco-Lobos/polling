import PoolOption from "../Home/PoolOption";

import BackHandIcon from '@mui/icons-material/BackHand';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';
import DownloadIcon from '@mui/icons-material/Download';
import { useEffect, useState } from "react";

import { PoolsConst } from "../../constants/PoolsConst";

import PieChart from "./chartJSX/PieChart";

const Results = ()=>{

    const [results, setResults] = useState(0);
    const [pool, setPool] = useState(0);
    const [totalVotes, setTotalVotes] = useState(0);
    const [totalQuestionVotes, setTotalQuestionVotes] = useState(0);
    const [index, setIndex] = useState(0);


    const getProportional = (n, m) => {
        let scaled  = m * n ;
        return scaled%10;
    }

    const calculateTotalVotes = (pool)=>{
        let returner =0;
        pool.questions.map(question=>
            question.answers.map(answ=>
                returner+=answ.votes
            ));
        return returner;
    }

    const questionCalculateTotalVotes = (question)=>{
        let returner =0;
        question.answers.map(answ=>
            returner+=answ.votes
        )   
        return returner;
    }

    const sortByValue = (arr, propertyName ='votes', order = 'descending') => {
        const sortedArr = arr.sort((a, b) => {
          if (a[propertyName] < b[propertyName]) {
            return -1;
          }
          if (a[propertyName] > b[propertyName]) {
            return 1;
          }
          return 0;
        });
        if (order === 'descending') {
          return sortedArr.reverse();
        }
        return sortedArr;
      };

    const prevQuestion = ()=>{
        if(index <= 1){
            setIndex(pool.questions.length);
        }
        else{
            setIndex(index-1);
        }
    }

    const nextQuestion = ()=>{
        if(index >= pool.questions.length){
            setIndex(1);
        }
        else{
            setIndex(index+1);
        }
    }

    const setQuestionIndex = ()=>{
        const thisQuestion = pool.questions.find(q=>q.order == index);
        setResults(thisQuestion);
        setTotalQuestionVotes(questionCalculateTotalVotes(thisQuestion));
    }

    useEffect(()=>{
        const selected= window.localStorage.getItem('selectedResult');
        
        if(!selected) {
            const toSave={pool: PoolsConst.pools[0].name, question: PoolsConst.pools[0].questions[0].question};
            window.localStorage.setItem('selectedResult', JSON.stringify(toSave));
        }

        const data = JSON.parse(localStorage.getItem("selectedResult"));
        
        const thisPool = PoolsConst.pools.find(pool=>pool.name==data.pool);

        setPool(thisPool);
        setTotalVotes(calculateTotalVotes(thisPool));

        const thisQuestion = thisPool.questions.find(q=>q.question == data.question);
        setTotalQuestionVotes(questionCalculateTotalVotes(thisQuestion));
        setResults(thisQuestion);
        setIndex(thisQuestion.order);
    },[])


    useEffect(()=>{
        if(!pool || !index) return;
        setQuestionIndex();
    },[index])
    

    return (
        <div className="page results-columns">
            
            <div className="first-column table">
                {results && pool  ?
                <div className="head">
                    <h3> Round {results.order} of {pool.questions.length}</h3>
                    <h2> {results.question}</h2>
                    <div className="meta-data">
                        <div className="meta"><BackHandIcon/> {totalQuestionVotes}</div>
                        <div className="meta"><WatchLaterIcon/> {getProportional(totalQuestionVotes,totalQuestionVotes)} Days to go</div>
                        <div className="meta"><PersonIcon/> By {pool.creator}</div>
                    </div>
                </div>
                :""
                }
                {results && pool ?

                <div className="body" id={'questions-bars'}>
                    {sortByValue(results.answers).map((op,i)=>
                        <PoolOption option={op} key={op.name} indx={i} totalVotes={totalQuestionVotes}></PoolOption>    
                    )}
                    
                </div>
                :""
            }

            {

            results && pool && pool.questions.length > 1 ? 
            <div className="navigator">
                <div className="arrow" id="prev" onClick={prevQuestion}>
                    Previous
                </div>
                <div className="arrow" id="next" onClick={nextQuestion}>
                    Next
                </div>
            </div>
            :""
            }

            </div>  

            <div></div>

            <div className="second-column table">
                {results && pool ?
                <div className="head">
                        <div className="hashtaghs">
                            {
                                pool.hashtags.map(hash=>
                                    <h3 className="hashtag" key={hash}> #{hash}</h3>
                                )
                            }
                        </div>
                        <h3>{totalVotes} total votes</h3>
                        <h2> {pool.name}</h2>
                        <div className="meta-data buttoned">
                            <div className="meta buttoned"><EditIcon/> Modify</div>
                            <div className="meta buttoned"><DownloadIcon/> Download</div>
                        </div>
                    </div>
                :""
                }

                {results ?

                <div className="body" id="pie-wrapper">
                    <PieChart dataInput={results?.answers} totalVotes={totalQuestionVotes}/>
                </div>
                :""
                }

            </div>
            
        </div>
    )
}

export default Results;