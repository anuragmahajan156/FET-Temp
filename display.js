//flags

var isLoggedIn = false;
var isImageUploaded = false;
var dispCont = document.querySelector("#displayContainer");

var numberOfBtn = document.querySelectorAll("button").length;

for(let i=0; i<numberOfBtn; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        switch(this.value){
            case "all": displayPosts("*");
                break;
            case "cars": displayPosts("=cars");
                break;
            case "music": displayPosts("=music");
                break;

            case "travel": displayPosts("=travel");
                break;

            case "food":    displayPosts("=food");
                break;
            case "fashion":    displayPosts("=fashion");
                break;
            case "gaming":    displayPosts("=gaming");
                break;
        }
    })
}

const displayPosts = async (catType) => {
    let uri= "http://localhost:3000/blogs"; //Endpoint for the GET Request
    uri = uri + "?category" + catType;
    const res = await fetch(uri);  // waits till its gets all data from the server and the response is stored in
    // the const res; since we used fetch we get a response Object and not just data
    const blogs = await res.json(); // .json() parses the data in res (response object) and converts it to JS Object
    //from JSON, wait first and then store all the data in the post
    var template = "";
    blogs.forEach(blog => {
        template = template + `
        <div>
            <h2>${blog.title}</h2>
            <p>${blog.text}</p>
            <p>$(blog.likes)</p>
            <p>${blog.category}</p>
</div>
    `
    })

    dispCont.innerHTML = template;
}


