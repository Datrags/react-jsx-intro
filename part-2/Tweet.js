// props the username of the user who wrote the tweet, 
// the name of the user who wrote the tweet, 
// the date of the tweet, and the message being tweeted.
const Tweet = (props) => {
    return (
        <div class="tweet">
            <b>{props.name}</b> @{props.username} - {props.date}
            <p>{props.message}</p>
            
        </div>)
}