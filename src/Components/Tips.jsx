export default function Tips() {
    return (
        <div className="tips-inner">
            <div className="tips-content">
                <div className="tips-boxes">
                    <img className="bowl" src="ph_bowl-food-light.svg" alt="bowl-food" />
                    <span className="tips-text">
                        <h4>Alimentação saudável</h4>
                        <h6>A alimentação saudável promove controle de peso, prevenção de doenças, melhor digestão, imunidade, clareza mental e humor.</h6>
                    </span>
                </div>
                <div className="tips-boxes">
                    <img className="barbell" src="ph_barbell-light.svg" alt="barbell-light" />
                    <span className="tips-text">
                        <h4>Exercício regular</h4>
                        <h6>O exercício melhora o condicionamento físico, ajuda no controle do peso, eleva o humor e reduz o risco de doenças, promovendo o bem-estar e a longevidade.</h6>
                    </span>
                </div>
                <div className="tips-boxes">
                    <img className="moon" src="ph_moon-stars-light.svg" alt="moon-stars" />
                    <span className="tips-text">
                        <h4>Sono adequado</h4>
                        <h6>O sono melhora a clareza mental, a estabilidade emocional e o bem-estar físico, promovendo a restauração e o rejuvenescimento geral.</h6>
                    </span>
                </div>
            </div>
        </div>
    )
}