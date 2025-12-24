const apps = [
    {name:"Snapchat+", logo:"https://i.imgur.com/0Z8FQ6N.png"},
    {name:"Tinder Gold", logo:"https://i.imgur.com/7yUvePI.png"},
    {name:"Subway Surfers", logo:"https://i.imgur.com/jzQpZ9W.png"},
    {name:"Free Fire MOD", logo:"https://i.imgur.com/W5nZ6xx.png"},
    {name:"Instagram+", logo:"https://i.imgur.com/8Km9tLL.png"},
];

// duplicate to make 50 apps
while(apps.length < 50){
    apps.push({...apps[apps.length % 5]});
}

const grid = document.getElementById("appGrid");

apps.forEach(app=>{
    const div = document.createElement("div");
    div.className = "app-card";
    div.innerHTML = `
        <img src="${app.logo}">
        <h4>${app.name}</h4>
        <p>Premium Access</p>
        <button>INSTALL</button>
    `;
    grid.appendChild(div);
});
