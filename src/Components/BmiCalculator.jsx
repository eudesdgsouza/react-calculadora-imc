import { useState } from "react"

export default function BmiCalculator() {

    const [height, setHeight] = useState(185);
    const [weight, setWeight] = useState(80);
    const [bmi, setBmi] = useState(23.37);
    const [result, setResult] = useState('Insira sua altura e peso e você verá o resultado do seu IMC aqui');
    const [unit, setUnit] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(unit) {
            const h = height;
            const w = weight / ((h * h) / 100000);
            setBmi(w.toFixed(2));

            if(w < 18.5) {
                setResult("Seu IMC mostra que você está abaixo do peso ideal. Converse com um nutricionista para se aproximar do seu ideal.");
            } else if(w >= 18.5 && w < 25) {
                setResult("Seu IMC sugere que você tem peso normal. Continue mantendo seu peso ideal.");
            } else if(w >= 25 && w < 30) {
                setResult("Seu IMC mostra que você está muito acima do seu peso ideal. Para voltar ao peso ideal, você precisa consultar urgentemente um nutricionista.");
            } else {
                setResult("Seu IMC mostra que você é obeso. Coloque-se em ordem e consulte um nutricionista.");
            }
        } else {
            const h = height;
            const w = 703 * (weight / ((h * h) / 10));
            setBmi(w.toFixed(2));

            if(w < 18.5) {
                setResult("Seu IMC mostra que você está abaixo do peso ideal. Converse com um nutricionista para se aproximar do seu ideal.");
            } else if(w >= 18.5 && w < 25) {
                setResult("Seu IMC sugere que você tem peso normal. Continue mantendo seu peso ideal.");
            } else if(w >= 25 && w < 30) {
                setResult("Seu IMC mostra que você está muito acima do seu peso ideal. Para voltar ao peso ideal, você precisa consultar urgentemente um nutricionista.");
            } else {
                setResult("Seu IMC mostra que você é obeso. Coloque-se em ordem e consulte um nutricionista.");
            }
        }
    }

    return (
        <form className="calculator"onChange={handleSubmit} autoComplete="off" >
            <h3>Insira seus dados abaixo</h3>
            <div className="radioBtns">
                <label onClick={() => {setUnit(true)}} ><input className="unit" type="radio" name="metric" defaultChecked checked={unit} onChange={() => { setUnit(true); }} />Metric</label>
                <label onClick={() => {setUnit(false)}}><input className="unit" type="radio" name="imperial"  checked={!unit} onChange={() => { setUnit(false); }}/>Imperial</label>
            </div>
            <div className="heightweight">
                <div className="calculator-section">
                    <div className="calculate-parts">
                        <div className="mini-title-inner">
                            <p className="miniTitle">Altura</p>
                            {unit 
                                    ? 
                                    <div className="height">
                                        <input type="number" name="cm" value={height} onChange={(e) => {setHeight(e.target.value)}} />
                                        <p className="info">cm</p>
                                    </div>
                                    : 
                                    <div className="height">
                                        <input type="number" name="in" value={height} onChange={(e) => {setHeight(e.target.value)}}  />
                                        <p className="info">in</p>
                                    </div>
                            }
                        </div>  
                        <div className="mini-title-inner">
                            <p className="miniTitle">Peso</p>
                            {unit 
                                ?
                                <div className="weight">
                                    <input type="number" name="kg" value={weight} onChange={(e) => {setWeight(e.target.value)}} />
                                    <p className="info">kg</p>
                                </div>
                                :
                                <div className="weight">
                                    <input type="number" name="lbs" value={weight} onChange={(e) => {setWeight(e.target.value)}} />
                                    <p className="info">lbs</p>
                                </div>
                            }
                            </div>    
                    </div>
                </div>
                <div className="result">
                    <span className="result-top-sec">
                        <h4>Seu IMC é...</h4>
                        <h2>{bmi}</h2>
                    </span>
                    <p>{result}.</p>
                </div>
            </div>
        </form>
    )
}