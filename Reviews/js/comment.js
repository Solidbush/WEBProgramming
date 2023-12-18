class Comment extends HTMLElement {
    constructor(name, email, body) {
        super();
        this.name = name;
        this.email = email;
        this.body = body;
        this.shadow = this.attachShadow({ mode: 'closed' });
    }

    render() {
        const template = document.getElementById("commentItem");
        let clone = template.content.cloneNode(true);
        let title = clone.querySelector('h3').textContent = this.name;
        let body = clone.querySelector('p').textContent = this.body;
        console.log(this.name);
        console.log(this.email);
        console.log(this.body);
        return clone;
    }

    static get observedAttributes() {
        return ['name', 'email', 'body'];
    }

    attributeChangedCallback(name, email, body) {
        this.name = name;
        this.email = email;
        this.body = body;
        this.render();
    }
}

customElements.define('comment-card', Comment);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function setCommonComment() {
    let commentList = document.getElementById('comments');
    let tempComment = new Comment("Что-то пошло не так!", "", "Сервис упал и не может подняться =(").render();
    hideSpinner();
    commentList.appendChild(tempComment);
}

function hideSpinner() {
    let commentList = document.getElementById('spin-wrapper');
    commentList.remove()
}

window.addEventListener('load', async (event) => {
    let commentList = document.getElementById('comments');
    let random = getRandomInt(1, 101)
    fetch(`https://jsonplaceholder.typicode.com/posts/${random}/comments`)
        .then(response => response.json())
        .then(json => {
            json.forEach((item) => {
                let tempComment = new Comment(item['name'], item['email'], item['body']).render();
                commentList.appendChild(tempComment);
            })
            hideSpinner();
        })
        .catch(setCommonComment);
});


