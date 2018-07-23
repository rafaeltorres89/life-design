import React, {Component} from 'react';

import Breadcrumb from './breadcrumb';
import Anchor from './anchor';

class Title extends Component {
    render(){
        return <h2>{this.props.text}</h2>
    }
}

class SubTitle extends Component {
    render(){
        return <h3>{this.props.text}</h3>
    }
}

class NameColor extends Component {
    render(){
        return <p className="name-color">{this.props.text}</p>
    }
}

class HexaColor extends Component {
    render(){
        return <p className="hexa-color">#{this.props.text}</p>
    }
}

const Colors = () => {
    return (
        <div className="components">
            <Breadcrumb />
            <Title text="Colors" />
            <p className="info-page">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <SubTitle text="Standard Blue Colors" />
            <div className="row line-color">
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-aegonBlue"></div>
                        <div className="txt-info-color">
                            <NameColor text="Aegon Blue" />
                            <HexaColor text="0069B4" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-prussianBlue"></div>
                        <div className="txt-info-color">
                            <NameColor text="Prussian Blue" />
                            <HexaColor text="001E32" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-regalBlue"></div>
                        <div className="txt-info-color">
                            <NameColor text="Regal Blue" />
                            <HexaColor text="003C64" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-lochmara"></div>
                        <div className="txt-info-color">
                            <NameColor text="Lochmara" />
                            <HexaColor text="0079C2" />
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="row line-color">
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-cerulean"></div>
                        <div className="txt-info-color">
                            <NameColor text="Cerulean" />
                            <HexaColor text="00aeef" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-puertoRico"></div>
                        <div className="txt-info-color">
                            <NameColor text="Puerto Rico" />
                            <HexaColor text="3BC8BC" />
                        </div>
                    </div>
                </div>
            </div>
            
            <SubTitle text="Grayscale Color" />
            <div className="row line-color">
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-codGray"></div>
                        <div className="txt-info-color">
                            <NameColor text="Cod Gray" />
                            <HexaColor text="1D1D1D" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-support"></div>
                        <div className="txt-info-color">
                            <NameColor text="Support" />
                            <HexaColor text="929292" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-silver"></div>
                        <div className="txt-info-color">
                            <NameColor text="Silver" />
                            <HexaColor text="A5A5A5" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-line"></div>
                        <div className="txt-info-color">
                            <NameColor text="Line" />
                            <HexaColor text="D8D8D8" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row line-color">
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-lightLine"></div>
                        <div className="txt-info-color">
                            <NameColor text="Light Line" />
                            <HexaColor text="F0F0F0" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-metal"></div>
                        <div className="txt-info-color">
                            <NameColor text="Metal" />
                            <HexaColor text="D5CAC1" />
                        </div>
                    </div>
                </div>
            </div>

            <SubTitle text="Color Palette" />
            <div className="row line-color">
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-chestnut"></div>
                        <div className="txt-info-color">
                            <NameColor text="Chestnut" />
                            <HexaColor text="B8423E" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-affair"></div>
                        <div className="txt-info-color">
                            <NameColor text="Affair" />
                            <HexaColor text="6D4592" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-goldDrop"></div>
                        <div className="txt-info-color">
                            <NameColor text="Gold Drop" />
                            <HexaColor text="F27D00" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-tulipTree"></div>
                        <div className="txt-info-color">
                            <NameColor text="Tulip Tree" />
                            <HexaColor text="E6B627" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row line-color">
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-goblin"></div>
                        <div className="txt-info-color">
                            <NameColor text="Goblin" />
                            <HexaColor text="347D3E" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-apple"></div>
                        <div className="txt-info-color">
                            <NameColor text="Apple" />
                            <HexaColor text="49AF57" />
                        </div>
                    </div>
                </div>
            </div>
            
            <SubTitle text="Color High Contrast" />
            <div className="row line-color">
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-theBlue"></div>
                        <div className="txt-info-color">
                            <NameColor text="Aegon" />
                            <HexaColor text="0069B4" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-specialBlue"></div>
                        <div className="txt-info-color">
                            <NameColor text="Aegon" />
                            <HexaColor text="0069B4" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-specialLink"></div>
                        <div className="txt-info-color">
                            <NameColor text="Aegon" />
                            <HexaColor text="0069B4" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-specialFire"></div>
                        <div className="txt-info-color">
                            <NameColor text="Aegon" />
                            <HexaColor text="0069B4" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row line-color">
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-specialSea"></div>
                        <div className="txt-info-color">
                            <NameColor text="Aegon" />
                            <HexaColor text="0069B4" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-specialPoison"></div>
                        <div className="txt-info-color">
                            <NameColor text="Aegon" />
                            <HexaColor text="0069B4" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-specialPumpkin"></div>
                        <div className="txt-info-color">
                            <NameColor text="Aegon" />
                            <HexaColor text="0069B4" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-specialMoss"></div>
                        <div className="txt-info-color">
                            <NameColor text="Aegon" />
                            <HexaColor text="0069B4" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row line-color">
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-specialNature"></div>
                        <div className="txt-info-color">
                            <NameColor text="Aegon" />
                            <HexaColor text="0069B4" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-specialPool"></div>
                        <div className="txt-info-color">
                            <NameColor text="Aegon" />
                            <HexaColor text="0069B4" />
                        </div>
                    </div>
                </div>
            </div>

            <SubTitle text="Color DT Acromatico" />
            <div className="row line-color">
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtConcrete"></div>
                        <div className="txt-info-color">
                            <NameColor text="Aegon" />
                            <HexaColor text="0069B4" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtSecondDark"></div>
                        <div className="txt-info-color">
                            <NameColor text="Aegon" />
                            <HexaColor text="0069B4" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtStainless"></div>
                        <div className="txt-info-color">
                            <NameColor text="Aegon" />
                            <HexaColor text="0069B4" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtDoria"></div>
                        <div className="txt-info-color">
                            <NameColor text="Aegon" />
                            <HexaColor text="0069B4" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row line-color">
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtUbiquitous"></div>
                        <div className="txt-info-color">
                            <NameColor text="Aegon" />
                            <HexaColor text="0069B4" />
                        </div>
                    </div>
                </div>
            </div>

            <SubTitle text="Color DT Dic" />
            <div className="row line-color">
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtNavy"></div>
                        <div className="txt-info-color">
                            <NameColor text="Aegon" />
                            <HexaColor text="0069B4" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtGhost"></div>
                        <div className="txt-info-color">
                            <NameColor text="Aegon" />
                            <HexaColor text="0069B4" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtHalloween"></div>
                        <div className="txt-info-color">
                            <NameColor text="Aegon" />
                            <HexaColor text="0069B4" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtSaara"></div>
                        <div className="txt-info-color">
                            <NameColor text="Aegon" />
                            <HexaColor text="0069B4" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row line-color">
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtSand"></div>
                        <div className="txt-info-color">
                            <NameColor text="Aegon" />
                            <HexaColor text="0069B4" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtPersian"></div>
                        <div className="txt-info-color">
                            <NameColor text="Aegon" />
                            <HexaColor text="0069B4" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtTopaz"></div>
                        <div className="txt-info-color">
                            <NameColor text="Aegon" />
                            <HexaColor text="0069B4" />
                        </div>
                    </div>
                </div>
            </div>

            <SubTitle text="Color DT Dic Tri" />
            <div className="row line-color">
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtHole"></div>
                        <div className="txt-info-color">
                            <NameColor text="Aegon" />
                            <HexaColor text="0069B4" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtMetalPink"></div>
                        <div className="txt-info-color">
                            <NameColor text="Aegon" />
                            <HexaColor text="0069B4" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtCottonCandy"></div>
                        <div className="txt-info-color">
                            <NameColor text="Aegon" />
                            <HexaColor text="0069B4" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtCute"></div>
                        <div className="txt-info-color">
                            <NameColor text="Aegon" />
                            <HexaColor text="0069B4" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row line-color">
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtDust"></div>
                        <div className="txt-info-color">
                            <NameColor text="Aegon" />
                            <HexaColor text="0069B4" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtMud"></div>
                        <div className="txt-info-color">
                            <NameColor text="Aegon" />
                            <HexaColor text="0069B4" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtWood"></div>
                        <div className="txt-info-color">
                            <NameColor text="Aegon" />
                            <HexaColor text="0069B4" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtBamboo"></div>
                        <div className="txt-info-color">
                            <NameColor text="Aegon" />
                            <HexaColor text="0069B4" />
                        </div>
                    </div>
                </div>
            </div>

            <SubTitle text="Color DT Dic Tri 2" />
            <div className="row line-color">
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtSea"></div>
                        <div className="txt-info-color">
                            <NameColor text="Aegon" />
                            <HexaColor text="0069B4" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtNight"></div>
                        <div className="txt-info-color">
                            <NameColor text="Aegon" />
                            <HexaColor text="0069B4" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtOcean"></div>
                        <div className="txt-info-color">
                            <NameColor text="Aegon" />
                            <HexaColor text="0069B4" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtDeafultSea"></div>
                        <div className="txt-info-color">
                            <NameColor text="Aegon" />
                            <HexaColor text="0069B4" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row line-color">
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtSupport"></div>
                        <div className="txt-info-color">
                            <NameColor text="Aegon" />
                            <HexaColor text="0069B4" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtUrbanSky"></div>
                        <div className="txt-info-color">
                            <NameColor text="Aegon" />
                            <HexaColor text="0069B4" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtFlower"></div>
                        <div className="txt-info-color">
                            <NameColor text="Aegon" />
                            <HexaColor text="0069B4" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtRose"></div>
                        <div className="txt-info-color">
                            <NameColor text="Aegon" />
                            <HexaColor text="0069B4" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row line-color">
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtWall"></div>
                        <div className="txt-info-color">
                            <NameColor text="Aegon" />
                            <HexaColor text="0069B4" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtHappy"></div>
                        <div className="txt-info-color">
                            <NameColor text="Aegon" />
                            <HexaColor text="0069B4" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtCute"></div>
                        <div className="txt-info-color">
                            <NameColor text="Aegon" />
                            <HexaColor text="0069B4" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtVampire"></div>
                        <div className="txt-info-color">
                            <NameColor text="Aegon" />
                            <HexaColor text="0069B4" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row line-color">
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtAqua"></div>
                        <div className="txt-info-color">
                            <NameColor text="Aegon" />
                            <HexaColor text="0069B4" />
                        </div>
                    </div>
                </div>
            </div>
            
            <SubTitle text="Color Saturation" />
            <div className="row line-color">
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-light"></div>
                        <div className="txt-info-color">
                            <NameColor text="Aegon" />
                            <HexaColor text="0069B4" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dark"></div>
                        <div className="txt-info-color">
                            <NameColor text="Aegon" />
                            <HexaColor text="0069B4" />
                        </div>
                    </div>
                </div>
            </div>
            <Anchor />
        </div>
    );
}

export default Colors;