import React from 'react';
import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Jessica', text: 'When is lunch?' },
    { id: 'q2', author: 'Jess', text: 'Dinner?' }
];

const AllQuotes = () => {

    return (
        <QuoteList quotes={DUMMY_QUOTES} />
    )
}

export default AllQuotes;