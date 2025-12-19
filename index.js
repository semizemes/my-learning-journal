import { posts as postsJSON } from "./posts.js";

const posts = document.getElementById("posts");
const main = document.getElementById("main");
const singlePost = document.getElementById("single-post");
const about = document.getElementById("about");

let initialMainHtml = "";
let postCount = 3;
renderHomePosts(postCount);

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
}

document.addEventListener("click", (e) => {
  if (e.target.parentElement.dataset.postId) {
    renderSinglePost(e.target.parentElement.dataset.postId);
    window.scrollTo({
      top: 15,
      behavior: "smooth",
    });
  }

  if (e.target.id == "home") {
    homePage();
  }

  if(e.target.id == "about-me"){
    aboutMePage()
  }

  if (e.target.id == "more-btn") {
    if (postsJSON.length > postCount) {
      postCount += 3;
    }
    if (postsJSON.length < postCount) {
      postCount = postsJSON.length;
    }
    renderHomePosts(postCount);
  }
});

function renderSinglePost(postId) {
  let post = postsJSON.find(({ id }) => id == postId);
  main.style.display = "none";
  singlePost.style.display = "block";
  about.style.display = "none";

  let paragraphs = post.paragraphs.map((paragraph) => {
    return `
            <h3>${paragraph.paragraphTitle}</h3>
            <p>${paragraph.paragraphText}</p>
        `;
  });

  let postsHtml = posts.innerHTML;
  singlePost.innerHTML = `
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
          <div class="posts" id="posts">${postsHtml}</div>
      `;
}

function homePage() {
  main.style.display = "block";
  singlePost.style.display = "none";
  about.style.display = "none";
}

function aboutMePage() {
  about.style.display = "block";
  main.style.display = "none";
  singlePost.style.display = "block";

  let postsHtml = posts.innerHTML;

  about.innerHTML += `<div class="posts" id="posts">${postsHtml}</div>`;
}
