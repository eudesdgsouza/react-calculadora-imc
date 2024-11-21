import BmiCalculator from "./BmiCalculator";


export default function BodyMassIndex() {
    return (
        <>
        <div className="bmi-content">
            <div className="bmi-text">
            <a href="#" className="bmi-logo"><img src="bmi-logo-mobile.svg" alt="bmi-logo"/></a>
            <h4>Massa Corporal <br /> Calculadora de índice</h4>
            <h6>Entenda melhor o seu peso em relação à sua altura usando nossa calculadora de índice de massa corporal (MC). Embora o IMC não seja o único determinante de um peso saudável, oferece um valioso ponto de partida para avaliar a sua saúde e bem-estar geral.</h6>
            </div>
            <div className="bmi-calculator">
                <BmiCalculator />
            </div>
        </div>
         
        </>
    )
}