const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    // "Popcorn",
    // "Gemwoman",
    // "Bolt",
    // "Antwoman",
    // "Mask",
    // "Tiger",
    // "Captain",
    // "Catwoman",
    // "Fish",
    // "Hulk",
    // "Ninja",
    // "Black Cat",
    // "Volverine",
    // "Thor",
    // "Slayer",
    // "Vader",
    // "Slingo"
];

// Player Class
class Player {
    constructor(id, name, type) {
        // Create member variables and assign values
        // Type your code
        this.id=id;
        this.name=name;
        this.strength=this.getRandomStrength()
        this.image = `images/super-${id + 1}.png` 
        this.type=type;
    }

    // getting random strength
    getRandomStrength = () => {
        return Math.ceil(Math.random() * 100);
    }

    // Create a player for displaying
    view = () => {
        // Accumulate HTML template
        // Type your code here
        // let player = document.createElement('div');
        // let template = `<div class="player" data-id="${this.id}">
        //     <img src="${this.image}">
        //     <div class="name">${this.name}</div>
        //     <div class="strength">${this.strength}</div>
        // </div>`
        // player.innerHTML = template

        let player = document.createElement('div')
        player.classList.add('player')
        player.setAttribute('data-id',this.id)
        var img = document.createElement('img')
        img.setAttribute('src',this.image)
        var name = document.createElement('div')
        name.classList.add('name')
        name.textContent=this.name
        var strength = document.createElement('div')
        strength.classList.add('strength')
        strength.textContent=this.strength
        player.append(img,name,strength)
        return player;
    }
}

// Superwar Class
class Superwar {
    constructor(players) {
    // Create a field players 
    // Use Map method to loop through  argument and create new players
    // Type your code here
        this.players = players.map((name, index) => {
           let type=""
           if(index%2==0)
            {
                type="hero"
            }
            else
            {
                type="villain"
            }
           return new Player(index,name,type)
        });
    }
    

    // Display players in HTML
    viewPlayers = () => {
        let team = document.getElementById('heroes');
        team.innerHTML = '';
        let fragment =
            this.buildPlayers('hero');
        team.append(fragment);

        team = document.getElementById('villains');
        team.innerHTML = '';
        fragment =
            this.buildPlayers('villain');
        team.append(fragment);
    }

    // Build players fragment 
    buildPlayers = (type) => {
        let fragment = document.createDocumentFragment();
        this.players
            .filter(player => player.type == type)
            .forEach(player => fragment.append(player.view()));
        return fragment;
    }

}


window.onload = () => {
    const superwar = new Superwar(PLAYERS);
    superwar.viewPlayers();
}