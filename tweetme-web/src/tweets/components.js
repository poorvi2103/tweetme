import React , {useState} from 'react'
import {TweetList} from './list'
import {TweetCreate} from './create'


export function TweetComponent(props) {
    const [newTweets, setNewTweets] = useState([])
    const canTweet = props.canTweet === "false" ? false : true
    const handleNewTweet = (newTweet) => {
        let tempNewTweets = [...newTweets]
        tempNewTweets.unshift(newTweets)
        setNewTweets(tempNewTweets)
    }
    return <div className={props.className}>
        {canTweet === true && <TweetCreate didTweet = {handleNewTweet} className='col-12 mb-3'/>}
        <TweetList newTweets={newTweets} {...props}/>
    </div>
}