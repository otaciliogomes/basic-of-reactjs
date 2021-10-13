import './styles.css'
import pacotesMock from './mock.json';
import { useMediaQuery } from '@material-ui/core';

const Upgrade = () => {
    const screenMobile = useMediaQuery("(min-width: 780px)");
    return (
        <div className="root">
            <div className="contentTitle">
                <p className="textView" aria-hidden="true" aria-label="">Dê um <span className="textViewOrange">upgrade</span> no seu voos e viagem com mais conforto.</p>
                <h2 className="letter">Dê um upgrade em seu voo e viagem com mais conforto</h2>
            </div>
            <div className="radiosOptions">
                {
                    screenMobile && (
                        <div className="containerRadio">
                            <div className="contentColumn">
                                <img src='../img/upsell/class.svg' alt=""/>
                                <label> Classe </label>
                            </div>
                            <div className="contentColumn">
                                <img src='../img/upsell/bagagem_desp.svg' alt=""/>
                                <label> Bagagem Despachada </label>
                            </div>
                            <div className="contentColumn">
                                <img src='../img/upsell/bagagem_mao.svg' alt=""/>
                                <label> Reembolsável </label>
                            </div>
                            <div className="contentColumn">
                                <img src='../img/upsell/alt_canc.svg' alt=""/>
                                <label> Alteração e Cancelamento </label>
                            </div>
                        </div>
                    )
                }
                {pacotesMock.pacotes.map(pacote => (
                    screenMobile ?
                        <div className="containerPrimary">
                            <label className="titleh2">{pacote.title}</label>
                            <input id={pacote.title} type="radio" name="op" className="radio" />
                            <label htmlFor={pacote.title} className="containerRadioPrimary">
                                {
                                    `${pacote.content.price} pontos por adulto \n ${pacote.content.priceAdult} pontos (com taxas)`
                                }
                            </label>
                            <div className="containerRadio" >
                                <label htmlFor={pacote.title} className="labelRadio" >{pacote.content?.class}</label>
                                <label htmlFor={pacote.title} className="labelRadio" >{pacote.content?.bagagem}</label>
                                <label htmlFor={pacote.title} className="labelRadio" >{pacote.content?.marcacao}</label>
                                <label htmlFor={pacote.title} className="labelRadio" >{pacote.content?.reembolso}</label>
                            </div>
                        </div>
                        :
                        <label htmlFor={pacote.title} className="containerPrimary">
                            <label className="titleh2">{pacote.title}</label>
                            <input id={pacote.title} type="radio" name="op" className="radio" />
                            <p className="opacity containerRadioPrimary">
                                {
                                    `${pacote.content.price} pontos por adulto \n ${pacote.content.priceAdult} pontos (com taxas)`
                                }
                            </p>
                            <label className="containerRadioPrimary">
                                {
                                    `${pacote.content.price} pontos por adulto \n ${pacote.content.priceAdult} pontos (com taxas)`
                                }
                            </label>
                            <div className="containerRadio" >
                                <div className="contentColumn">
                                    <img src='../img/upsell/class.svg' alt=""/>
                                    <label> Classe </label>
                                </div>
                                <label className="labelRadio" >{pacote.content?.class}</label>
                                <div className="contentColumn">
                                    <img src='../img/upsell/bagagem_desp.svg' alt=""/>
                                    <label> Bagagem Despachada </label>
                                </div>
                                <label className="labelRadio" >{pacote.content?.bagagem}</label>
                                <div className="contentColumn">
                                    <img src='../img/upsell/bagagem_mao.svg' alt=""/>
                                    <label> Reembolsável </label>
                                </div>
                                <label className="labelRadio" >{pacote.content?.marcacao}</label>
                                <div className="contentColumn">
                                    <img src='../img/upsell/alt_canc.svg' alt=""/>
                                    <label> Alteração e Cancelamento </label>
                                </div>
                                <label className="labelRadio" >{pacote.content?.reembolso}</label>
                            </div>
                        </label>

                ))}
            </div>

        </div>
    )
}

export { Upgrade }