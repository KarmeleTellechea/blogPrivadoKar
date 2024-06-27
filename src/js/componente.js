export class miComponenteWeb extends HTMLElement {
    constructor() {
        super();

        const template = document.createElement('template');
        template.innerHTML = `
            <div class="article-card">
                <img class="article-image" src="" alt="">
            </div>
            <style>
          
                .article-card {
                    width: calc( 25rem);
                    box-sizing: border-box;
                    text-align: center;
                    background-color: #f9f9f9;
                    transition: background-color 0.3s ease;
                    border-radius: 1rem;
                    padding: 1rem;
                    margin: 2rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .article-image {
                    width: 100%;
                    height: auto;
                    max-height: 12rem;
                    object-fit: cover;
                    border-radius: 1rem;
                }

                .article-card:hover {
                    background-color: #c5c4c4;
                }
            </style>
        `;

        const root = this.attachShadow({ mode: "open" });
        root.appendChild(document.importNode(template.content, true))
    }

    connectedCallback() {
        const imageSrc = this.getAttribute('image-src');
        const title = this.getAttribute('title');
        const shadow = this.shadowRoot;
        shadow.querySelector('.article-image').src = imageSrc;
        shadow.querySelector('.article-image').alt = title;
    }
}

