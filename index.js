import { posts as postsJSON } from "./posts";
console.log(postsJSON);

const posts = document.getElementById("posts");
const moreBtn = document.getElementById("more-btn");

let postCount = 3;

function renderHomePosts(postCount) {
  let htmlArray = "";

  for (let i = 0; i < postCount; i++) {
    htmlArray += `
            <div>
                <img class="home-img" src="./${postsJSON[i].image}" alt="${postsJSON[i].title} image">
                <p>${postsJSON[i].time}</p>
                <h2>${postsJSON[i].title}</h2>
                <p>${postsJSON[i].headerText}</p>
            </div>
        `;
  }

  posts.innerHTML = htmlArray;
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
