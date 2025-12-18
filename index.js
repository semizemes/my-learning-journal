import {posts as postsJSON} from "./posts";
console.log(postsJSON);

const posts = document.getElementById("posts")

const htmlArray = postsJSON.map(post => {
    const paragraphsArray = post.paragraphs.map(paragraph => {
        return `
            <h3>${paragraph.paragraphTitle}</h3>
            <p>${paragraph.paragraphText}</p>
        `
    })

    return `
        <img src="./${post.image}" alt="${post.title} image">
        <p>${post.time}</p>
        <h2>${post.title}</h2>
        <p>${post.headerText}</p>
    `

    // console.log(paragraphsArray)

    // return paragraphsArray.join(" ")
})


posts.innerHTML = htmlArray.join(" ")