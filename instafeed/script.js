// How to get an access token:
// http://jelled.com/instagram/access-token

// TODO:
// - improve UI
// - make it easy to copy and paste image url

// {{model.user.username}}, {{likes}} likes

var galleryFeed = new Instafeed({
  get: "user",
  userId:  2692649037,
  accessToken: "2692649037.1677ed0.cdcaac9081f346aaa9718b854dd27e17",
  resolution: "standard_resolution",
  useHttp: "true",
  limit: 6,
  template: '<div class="col-xs-12 col-sm-6 col-md-4"><a href="{{image}}"><div class="img-featured-container"><div class="img-backdrop"></div><div class="description-container"><p class="caption">{{caption}}</p><span class="likes"><i class="icon ion-heart"></i> {{likes}}</span><span class="comments"><i class="icon ion-chatbubble"></i> {{comments}}</span></div><img src="{{image}}" class="img-responsive"></div></a></div>',
  target: "instafeed-gallery-feed",
  after: function() {
    // disable button if no more results to load
    if (!this.hasNext()) {
      btnInstafeedLoad.setAttribute('disabled', 'disabled');
    }
  },
});
galleryFeed.run();

var btnInstafeedLoad = document.getElementById("btn-instafeed-load");
btnInstafeedLoad.addEventListener("click", function() {
  galleryFeed.next()
});