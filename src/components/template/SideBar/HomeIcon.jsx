
import { useNavigate, useLocation } from 'react-router-dom'

function HomeIcon ({specialClass=""}){

    const navigate = useNavigate();
    const { pathname } = useLocation();

    const handdleScroll  = (path)=>{
        if(pathname === path){
            window.scrollTo({top: 0, behavior: 'smooth'})
        }else{
            navigate('/');
        }
    }

    return(
        <svg onClick={()=>{handdleScroll(`/`)}}
            version="1.1" viewBox="0 0 1024 1024" fill="#000000" className={`${specialClass}`}>
                <g><path d="M466.63 332.141l-2.949-2.286c-22.823-17.687-55.664-13.527-73.352 9.296L168.406 625.474c-17.691 22.821-13.529 55.66 9.297 73.354l2.949 2.29c22.826 17.683 55.666 13.528 73.352-9.299l221.922-286.32c17.694-22.824 13.53-55.669-9.296-73.358z" fill={'var(--pastel-red)'} /><path d="M700.612 619.811L475.887 335.684c-17.915-22.648-50.795-26.486-73.444-8.571l-2.925 2.315c-22.649 17.915-26.489 50.793-8.574 73.442l224.724 284.125c17.91 22.649 50.796 26.488 73.445 8.573l2.925-2.317c22.65-17.911 26.489-50.797 8.574-73.44z" fill={'var(--pastel-orange)'}/><path d="M970.613 897.67H55.454c-25.734 0-46.588 23.407-46.588 52.283v3.736c0 28.876 20.854 52.284 46.588 52.284h915.16c25.734 0 46.59-23.408 46.59-52.284v-3.736c-0.001-28.876-20.856-52.283-46.591-52.283z" fill={'var(--pastel-purple)'} /><path d="M66.425 15.049h-3.736c-28.876 0-52.284 20.551-52.284 45.901v901.601c0 25.353 23.407 45.9 52.284 45.9h3.736c28.876 0 52.284-20.548 52.284-45.9V60.95c0-25.35-23.408-45.901-52.284-45.901z" fill={'var(--pastel-blue)'} /><path d="M914.9 334.433l-2.91-2.346c-22.489-18.107-55.408-14.549-73.51 7.94L611.312 622.201c-18.113 22.491-14.556 55.41 7.938 73.517l2.905 2.347c22.494 18.107 55.408 14.546 73.52-7.941l227.169-282.18c18.106-22.49 14.546-55.403-7.944-73.511z" fill={'var(--pastel-lime)'} />
                </g>
        </svg>
    )
}
export default HomeIcon;