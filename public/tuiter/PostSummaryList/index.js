import PostSummaryItem from "./PostSummaryItem.js";
import post from "./posts.js"
const PostSummaryList = () => {
    return (`
           <ul class="list-group">
           <li class = "list-group-item"> ${
        post.map(post => {
            return(PostSummaryItem(post));
        }).join('')
    }</li> 
           </ul>
`); }

export default PostSummaryList;