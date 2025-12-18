import { posts as postsJSON } from "./posts";
// console.log(postsJSON);

const posts = document.getElementById("posts");
const moreBtn = document.getElementById("more-btn");
const main = document.getElementById("main");

let initialMainHtml = "";
console.log(initialMainHtml);
let postCount = 3;

function renderHomePosts(postCount) {
  let htmlArray = "";

  for (let i = 0; i < postCount; i++) {
    htmlArray += `
            <div data-post-id="${postsJSON[i].id}">
                <img class="home-img" src="${postsJSON[i].image}" alt="${postsJSON[i].title} image">
                <p>${postsJSON[i].time}</p>
                <h2>${postsJSON[i].title}</h2>
                <p>${postsJSON[i].headerText}</p>
            </div>
        `;
  }

  posts.innerHTML = htmlArray;
  initialMainHtml = main.innerHTML;
  // return htmlArray;
}

renderHomePosts(postCount);

moreBtn.addEventListener("click", (e) => {
  if (postsJSON.length > postCount) {
    postCount += 3;
  }
  if (postsJSON.length < postCount) {
    postCount = postsJSON.length;
  }

  console.log(postCount);

  renderHomePosts(postCount);
});

document.addEventListener("click", (e) => {
  if (e.target.parentElement.dataset.postId) {
    renderSinglePost(e.target.parentElement.dataset.postId);
  }

  if (e.target.id == "home") {
    homePage();
  }
});

function renderSinglePost(postId) {
  let post = postsJSON.find(({ id }) => id == postId);

  let paragraphs = post.paragraphs.map((paragraph) => {
    return `
            <h3>${paragraph.paragraphTitle}</h3>
            <p>${paragraph.paragraphText}</p>
        `;
  });

  main.innerHTML = `
          <p>${post.time}</p>
          <h2>${post.title}</h2>
          <p>${post.headerText}</p>
          <img 
          class="home-img" 
          src="${post.image}" 
          alt="${post.headerText} image"
          >
          ${paragraphs.join(" ")}
          <h3>Recent Posts</h3>
          <div class="posts" id="posts"></div>
      `;
}

function homePage() {
  main.innerHTML = initialMainHtml;
}
