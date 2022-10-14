const PostSummaryItem = (post) => {
    return (`
    <ul class = "list-group">
    <li class="list-group-item p-0 m-0">
    <ul class = "p-0 m-0">
    <li class = "list-inline-item col-8 align-middle">
         <span class="text-muted"> ${post.topic} </span> <br>
          <span> <b>${post.userName}</b> <span class="fa-stack fa-1x">
          <i class="fas fa-circle fa-stack-1x"></i>
           <i class="fas fa-check fa-stack-1x fa-xs fa-inverse"></i> </span></span>
           <span class=text-muted> ${post.time}</span> <br>
            <p> <b> ${post.title} </b></p>
            <span class = "text-muted"> ${post.tweets}</span>
            </li>
            <li class="list-inline-item col-3 ps-5">
             <img src="${post.image}"
             class="rounded"
             height="50px" width="50px">
             </li>
             </ul>
             </li>
             </ul>
   `);
}
export default PostSummaryItem;