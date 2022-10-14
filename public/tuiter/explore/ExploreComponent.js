import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
                <div class="form=group">
                    <div class="input-group">
                        <div class="input-group-addon">
                            <span class="fas fa-search me-2"></span>
                        </div>
                        <input type="text"
                               class="form-control rounded-pill"
                               placeholder="Search Tuiter">
                        <div class="input-group-addon">
                            <span class="fas fa-cog ms-2 fa-2x" style="color: #2a9fd6"></span>
                        </div>
                    </div>
                </div>
                
           <ul class="nav mb-2 nav-tabs">
                      <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item d-none d-md-block">
                    <a class="nav-link" href="entertainment.html">Entertainment</a>
                </li>
           </ul>
           <div class="card">
                <img src="../../images/starship.jpeg"
                     class="card-img-top">
                <div class="card-img-overlay">
                    <h5 class="text-stroke text-white"> SpaceX's Starship</h5>
                </div>
                
                <div class="card-body p-0">
           ${PostSummaryList()}
           </div>
           </div>
    `);
}
export default ExploreComponent;
