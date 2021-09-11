
var loggedInUserId = window.sessionStorage.getItem("userid");
var userBlogBtnRef = document.querySelector("#userBlogsBtn");
var userBlogDivRef = document.querySelector("#userBlogsDiv");

userBlogBtnRef.addEventListener("click", function () {

    userBlogs(loggedInUserId);
})



const userBlogs = async (loggedInUserId) => {
    let uri= "http://localhost:3000/blogs"; //Endpoint for the GET Request
    uri = uri + "?userid=" + "loggedInUserId";
    const res = await fetch(uri);  // waits till its gets all data from the server and the response is stored in
    // the const res; since we used fetch we get a response Object and not just data
    const blogs = await res.json(); // .json() parses the data in res (response object) and converts it to JS Object
    //from JSON, wait first and then store all the data in the post
    var template = "";
    blogs.forEach(blogs => {
        template = template + `
        <div>
            <h2>${blogs.title}</h2>
            <p>${blogs.text}</p>
            <p>$(blogs.likes)</p>
            <p>${blogs.category}</p>
</div>
    `
    })
    console.log(template);
    userBlogDivRef.innerHTML = template;
}
