import { PoolsConst } from "../../constants/PoolsConst";
import PoolTable from './PoolTable';

const Home = ()=>{


    return (
        <div className="page home-columns">
            {
                PoolsConst.pools.map((pool, indx)=>
                    <PoolTable pool={pool} key={indx} indx={indx} />
                )  
            }     
        </div>
    )
}

export default Home;