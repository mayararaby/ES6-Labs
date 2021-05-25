var Users = fetch("https://jsonplaceholder.typicode.com/users");
Users.then((response) => {
        return response.json()
    })
    .then((usersData) => {
        for (let index = 0; index < usersData.length; index++) {
            let UsersTabs = document.getElementById("usersName").innerHTML += `<li class='nav-item'>
            <a class=nav-link active' id='user' data-toggle='tab' onclick='displayPosts(${usersData[index].id})' href='?userId=${usersData[index].id}'>
                ${usersData[index].name}
            </a>
            </li>`;
            if (index == 0) {
                document.getElementById("user").click();
            }
        }
    });

async function displayPosts(userIds) {
    document.getElementById("userPosts").innerHTML = `<div></div>`;
    console.log(userIds);
    var Posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userIds}`);
    userPosts = await Posts.json();
    console.log(userPosts);
    for (let index = 0; index < userPosts.length; index++) {
        let UsersTabs = document.getElementById("userPosts").innerHTML += `
                <div id="userId=${userIds}" class="container tab-pane active">
                <p>${userPosts[index].title}</p>
                </div>
                `;
    }
}