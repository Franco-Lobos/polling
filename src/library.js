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

