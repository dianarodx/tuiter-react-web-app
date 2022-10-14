const WhoToFollowListItem = (who) => {
    return (`
    <ul class = "list-group">
       <li class = "list-group-item"> 
       <ul class="p-0 mb-0">
                        <li class="list-inline-item col-2">
                            <img src ="../../images/${who.avatarIcon}" 
                                 class="rounded-circle"
                                 height="48px" width="48px">
                        </li>
                        <li class="list-inline-item col-6 align-middle">
                                        <span class="text-nowrap"> <b>${who.userName}</b> <span
                                                class="fa-stack fa-1x">
                                            <i class="fas fa-circle fa-stack-1x"></i>
                                            <i class="fas fa-check fa-stack-1x fa-xs fa-inverse"></i> </span></span><br>
                            <span class="text-muted"> @${who.handle}</span>
                        </li>
                        <li class="list-inline-item col-3">
                            <button class="btn btn-primary rounded-pill align-content-end">
                                <span class="d-flex justify-content-center"> Follow </span>
                            </button>
                        </li>
              </ul>
          </li>
    </ul>
   `);
}
export default WhoToFollowListItem;