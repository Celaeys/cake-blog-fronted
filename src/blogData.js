const blogData = getBlogData();

// api call TODOOO STUFF

async function getBlogData() {
    fetch('http://h2952311.stratoserver.net/wp-json/wp/v2/')
    .then(response => {
        // taxonomy category name render for id in posts and check for name
        let posts = response.data;
        for (let i = 0; i < posts.length; i++) {
          posts[i].headline = posts[i].title.rendered;
          posts[i].description = posts[i].excerpt.rendered;
          console.log(posts)
          // getMediaUrl(posts[i].featured_media, i);
          // getDate(posts[i].date, i);
        }
        return posts;
    })
    // const myJson = await response.json();
}

export default blogData;