import React, {useState} from 'react'
import Tweets from './Tweets'

function Tweet(props) {
    
    
    const [tweet, setTweet] = useState([ {
        name : 'Bipin',
        tweets : 'Hello i am Bipin',
        age: 23
    },
    {
        name : 'Mukesh',
        tweets : 'Hello i am Mukesh',
        age: 24
    },
    {
        name : 'Rahool',
        tweets : 'Hello i am Rahool',
        age: 25
    },
])
    
    return (

        <section>
        {tweet.map(tweets => (
            <Tweets name={tweets.name}/>
        ))}
        
        </section>
    )
}

export default Tweet
