class JanghoGreeting extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                }
                .container {
                    background: rgba(255, 255, 255, 0.7);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    padding: 3rem 4rem;
                    border-radius: 24px;
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
                    text-align: center;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .container:hover {
                    transform: scale(1.02);
                    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
                }
                h1 {
                    font-size: 3.5rem;
                    font-weight: 700;
                    background: linear-gradient(to right, #4f46e5, #9333ea);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    letter-spacing: -0.02em;
                    margin: 0;
                }
                .subtitle {
                    margin-top: 1rem;
                    color: #6b7280;
                    font-size: 1.1rem;
                }
            </style>
            <div class="container">
                <h1>안녕 장호야</h1>
                <div class="subtitle">반가워요! 멋진 하루 되세요.</div>
            </div>
        `;
    }
}

customElements.define('jangho-greeting', JanghoGreeting);
