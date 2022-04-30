let arr = [];

function loadNews() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => (arr = [...json]));
    // document.getElementById("card").innerHTML = "test1";

    setTimeout(() => {
        document.getElementById("cardNew").innerHTML = arr
            .map((user, i) => {
                return `<div class="card" >
            <img class="img" onclick="txtAlert()" alt="news" id="${user.id}"
            src="https://source.unsplash.com/collection/${user.id}/320x320"/>

            <div>
            <h2 class="titletxt">${user.title}</h2>
            <p class="bodytxt">${user.body + " " + user.id}</p>
            </div>
            </div>`;
            })
            .join(" "); // fara join pune virgula intre carduri
    }, 300);
}

function txtAlert() {
    let id;
    window.onclick = (e) => {
        id = e.target.id;
        // alert(arr[id].title);

        document.getElementById("cardNew").innerHTML = `<div class="card2" >
    <img class="img" onclick="loadNews()" alt="news" id="${id}"
    src="https://source.unsplash.com/collection/${id}/1120x700"/>
    
    <div>
    <h2 class="titletxt">${arr[id].title}</h2>
    <p class="bodytxt">${arr[id].body + " " + id}</p>
    </div>
    </div>`;
    };
}