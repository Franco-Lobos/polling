import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const convertToCamelCase = (string)=>{
    if(!string) return;
        let words= string.split('-')[1] ? string.split('-') : string.split(' ') ;
        words = words.map((word,indx) => {
            if(indx===0) return word;
            let splitedWord = word.split('');
            splitedWord[0] = splitedWord[0].toUpperCase();
            splitedWord = splitedWord.join('');
            return splitedWord
        });

        return words.join('');
}

function valueToHex(c) {
    var hex = c.toString(16);
    return hex
}

export function rgbToHex(r, g, b) {
    return(valueToHex(r) + valueToHex(g) + valueToHex(b));
  }

export const redirect = (link, blank="_blank")=>{
    window.open(link, blank);
}

export const getYear = ()=>{
    const date = new Date();
    return date.getFullYear();
}


export const ScrollToTop = () => {
    // Extracts pathname property(key) from an object
    const { pathname } = useLocation();

    // Automatically scrolls to top whenever pathname changes
    useEffect(() => {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }, [pathname]);
}


export const getRGB= (color)=>{
    
    let colorHex = getComputedStyle(document.documentElement).getPropertyValue(`${color}`).split('');

    let returner ={
        r: 0,
        g: 0,
        b: 0
    }
    colorHex = colorHex.filter(char => char!== ' ');
    colorHex.shift();

    returner.r = parseInt(colorHex[0] + '' + colorHex[1],16);
    returner.g = parseInt(colorHex[2] + '' + colorHex[3],16);
    returner.b = parseInt(colorHex[4] + '' + colorHex[5],16);

    return returner;
}


export const breath = (link, indx, setBreathing, time, hoverBrightness, colors) =>{
    let colorKeys = Object.keys(colors)
    let listLength = colorKeys.length;

    let colorTransition = {
        prev: {},
        this: {},
        next: {}
    }
    let breathingColor1, breathingColor2, percent;

    while(indx >= listLength){
        indx-=listLength;
    }

    colorTransition.this = getRGB(colorKeys[indx]);
    colorTransition.prev = getRGB(colorKeys[indx === 0 ? listLength-1 : indx-1 ]);
    colorTransition.next = getRGB(colorKeys[indx+1 >= listLength ? 0 : indx+1]);


    let rDifPrev = colorTransition.this.r-colorTransition.prev.r;
    let gDifPrev = colorTransition.this.g-colorTransition.prev.g;
    let bDifPrev = colorTransition.this.b-colorTransition.prev.b;

    let rDifNext = colorTransition.this.r-colorTransition.next.r;
    let gDifNext = colorTransition.this.g-colorTransition.next.g;
    let bDifNext = colorTransition.this.b-colorTransition.next.b;

    let start = Date.now();

    setBreathing(1);
    return setInterval(()=> {
        let timePassed = Date.now() - start;
        if (timePassed >= time) {
            start = Date.now() +time;
            // start+=time*2;
        }
        percent = Math.abs(timePassed/time)

        breathingColor1 = [
            (colorTransition.this.r - rDifPrev*percent)* hoverBrightness,
            (colorTransition.this.g - gDifPrev*percent)* hoverBrightness,
            (colorTransition.this.b - bDifPrev*percent)* hoverBrightness
        ];

        breathingColor2 = [
            (colorTransition.this.r - rDifNext*percent)* hoverBrightness,
            (colorTransition.this.g - gDifNext*percent)* hoverBrightness,
            (colorTransition.this.b - bDifNext*percent)* hoverBrightness
        ];

        let gradient = `-webkit-linear-gradient(0.5turn, rgb(${breathingColor1}),   rgb(${breathingColor2})`;

        link.style.backgroundImage = gradient;

    }, 10);

}

// export const spawnElement = ( element, indx, time) =>{
//     let timeAnim = time*0.25 +"ms";

//     setTimeout(()=>{
//         element.style.animation = `spawn ${timeAnim}`;
//         element.style.opacity = '1';
        
//     },300 + (time/20) *indx);
// }

// export const addHover=(thisEl, othersEl, card, time, hoverBrightness,setLoad, indx)=>{
    
//     let specialTime = time /2;

//     let othersXOR = othersEl.filter(ln=>ln.id !== thisEl.id);

//     card.addEventListener('mouseenter', ()=>{
//     })

//     card.addEventListener('mouseover', ()=>{
//         time = specialTime;
//         hoverBrightness = 1.5;
//         othersXOR.map(lin=>
//             lin.style.filter= 'blur(0.2rem)'
//         )
//     })

//     card.addEventListener('mouseout', ()=>{
//         time = 4000;
//         othersXOR.map(lin=>
//             lin.style.filter= 'blur(0rem)'
//         )
//         hoverBrightness = 1;
//     })

//     card.addEventListener('animationend',()=>{
//         setLoad(indx)
//     });
// }
