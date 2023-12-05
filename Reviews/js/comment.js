class Comment extends HTMLElement {
    constructor(name, email, body) {
        super();
        this.name = name;
        this.email = email;
        this.body = body;
        this.shadow = this.attachShadow({ mode: 'closed' });
    }

    render() {
        let commentList = document.getElementById('comments');
        const template = document.getElementById("commentItem");
        let clone = template.content.cloneNode(true);
        let title = clone.querySelector('h3').textContent = this.name;
        let body = clone.querySelector('p').textContent = this.body;
        commentList.appendChild(clone);
        console.log(this.name);
        console.log(this.email);
        console.log(this.body)
    }
}

customElements.define('comment-card', Comment);

window.onload = function () {
    for (let i = 0; i < 100; i++){
        fetch(`https://jsonplaceholder.typicode.com/comments/${i}`)
            .then(response => response.json())
            .then(json => new Comment(json['name'], json['email'], json['body']).render())
    }
}
