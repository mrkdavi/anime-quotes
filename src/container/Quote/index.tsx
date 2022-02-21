import QuoteMarkLeft from '../../assets/svg/quotation-mark-left.svg';
import QuoteMarkRight from '../../assets/svg/quotation-mark-right.svg';

import { useState, useEffect } from 'react';
import { getOneQuote, AnimeResultQuote } from '../../services/animechanAPI';

import './style.css';

const INITIAL_QUOTE = {
    quote: '',
    character: '',
    anime: ''
};

export function Quote() {
    const [quote, setQuote] = useState<AnimeResultQuote>(INITIAL_QUOTE);
    useEffect(()=>{
        getQuote();
    }, []);

    async function getQuote() {
        const data = await getOneQuote();
        setQuote(data);
    }

    return (
        <div className='quote-container'>
            <p className='quote-message'>
                <img className='quotes-mark quotes-mark-left' src={QuoteMarkLeft}></img>
                {quote.quote}
                <img className='quotes-mark quotes-mark-right' src={QuoteMarkRight}></img>
            </p>
            <p className='quote-anime-character'><span className='anime-span-type'>Character:</span> {quote.character}</p>
            <p className='quote-anime-name'><span className='anime-span-type'>Anime:</span> {quote.anime}</p>
            <button className='new-quote' onClick={getQuote}>New Quote</button>
        </div>
    )
}