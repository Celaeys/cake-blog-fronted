const blogData = getBlogData();

// api call TODOOO STUFF

async function getBlogData() {
    fetch('http://h2952311.stratoserver.net/wp-json/wp/v2/posts')
    .then(response => response.json())
    .then(data => {
        // taxonomy category name render for id in posts and check for name
        let posts = data;
        for (let i = 0; i < posts.length; i++) {
          posts[i].headline = posts[i].title.rendered;
          posts[i].description = posts[i].excerpt.rendered;
          getMediaUrl(posts[i].featured_media, i);
          // .then((imageURL) => { posts[i].image = imageURL});
          posts[i].dateBeautified = getDate(posts[i].date, i);
        }
        console.log('POSTS: ', data)
        return posts;
    })
}

function getMediaUrl(mediaId) {
  fetch('http://h2952311.stratoserver.net/wp-json/wp/v2/' + 'media/' + mediaId)
    .then(response => response.json())
    .then(data => {
      console.log('IMAGE: ', data.source_url)
       return data.source_url;
    })
}

function getDate(date) {
  const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
  let dateObject = new Date(date)
  console.log(dateObject.getDay())
  return dateObject.getDay() + ' ' + monthNames[dateObject.getMonth()];
}

export default blogData;