class Comment extends HTMLElement {
    constructor(name, email, body) {
        super();
        this.name = name;
        this.email = email;
        this.body = body;
        this.shadow = this.attachShadow({ mode: 'closed' });
    }

    render() {
        const copy = commentItem.content.cloneNode(true);
        copy.querySelector('h3').innerText = this.getAttribute('name');
        this.shadow.replaceChildren(copy);
    }
}

customElements.define('comment-card', Comment);

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(json => console.log(json['body']))
