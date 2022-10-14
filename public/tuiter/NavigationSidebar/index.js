const NavigationSidebar = () => {
    return(`
   <div class="list-group">
     <ul class=list-group>
                    <li class="list-group-item">
                        <i class="fab fa-twitter fa-1x p-2"></i>
                    </li>
                    <li class="list-group-item d-inline-flex">
                        <i class="fas fa-home fa-1x me-2"></i>
                        <span class="d-none d-lg-block"> Home </span>
                    </li>
                    <li class="list-group-item active d-inline-flex">
                        <i class="fas fa-hashtag fa-1x me-2"></i>
                        <span class="d-none d-lg-block"> Explore </span>
                    </li>
                    <li class="list-group-item d-inline-flex">
                        <i class="fas fa-bell fa-1x me-2"></i>
                        <span class="d-none d-lg-block"> Notifications </span>
                    </li>
                    <li class="list-group-item d-inline-flex">
                        <i class="fas fa-envelope fa-1x me-2"></i>
                        <span class="d-none d-lg-block"> Messages </span>
                    </li>
                    <li class="list-group-item d-inline-flex">
                        <i class="fas fa-bookmark fa-1x me-2"></i>
                        <span class="d-none d-lg-block"> Bookmarks </span>
                    </li>
                    <li class="list-group-item d-inline-flex">
                        <i class="fas fa-list fa-1x me-2"></i>
                        <span class="d-none d-lg-block"> Lists </span>
                    </li>
                    <li class="list-group-item d-inline-flex">
                        <i class="fas fa-user fa-1x me-2"></i>
                        <span class="d-none d-lg-block"> Profile </span>
                    </li>
                    <li class="list-group-item d-inline-flex">
                        <span class = "fa-stack fa-1x me-2" style = "width : 1em">
                            <i class = "fas fa-circle fa-stack-1x"></i>
                        <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse fa-xs"></i></span>
                        <span class="d-none d-lg-block"> More </span>
                    </li>
                </ul>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;