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
                            <NameColor text="The Blue" />
                            <HexaColor text="3455DB" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-specialBlue"></div>
                        <div className="txt-info-color">
                            <NameColor text="Special Blue" />
                            <HexaColor text="00008B" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-specialLink"></div>
                        <div className="txt-info-color">
                            <NameColor text="Special Link" />
                            <HexaColor text="0000E0" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-specialFire"></div>
                        <div className="txt-info-color">
                            <NameColor text="Special Fire" />
                            <HexaColor text="AA0000" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row line-color">
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-specialSea"></div>
                        <div className="txt-info-color">
                            <NameColor text="Special Sea" />
                            <HexaColor text="007FAA" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-specialPoison"></div>
                        <div className="txt-info-color">
                            <NameColor text="Special Poison" />
                            <HexaColor text="7600A8" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-specialPumpkin"></div>
                        <div className="txt-info-color">
                            <NameColor text="Special Pumpkin" />
                            <HexaColor text="AA5D00" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-specialMoss"></div>
                        <div className="txt-info-color">
                            <NameColor text="Special Moss" />
                            <HexaColor text="806C00" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row line-color">
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-specialNature"></div>
                        <div className="txt-info-color">
                            <NameColor text="Special Nature" />
                            <HexaColor text="005500" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-specialPool"></div>
                        <div className="txt-info-color">
                            <NameColor text="Special Pool" />
                            <HexaColor text="008080" />
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
                            <NameColor text="DT Concrete" />
                            <HexaColor text="535353" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtSecondDark"></div>
                        <div className="txt-info-color">
                            <NameColor text="DT Second Dark" />
                            <HexaColor text="39373A" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtStainless"></div>
                        <div className="txt-info-color">
                            <NameColor text="DT Stainless" />
                            <HexaColor text="888888" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtDoria"></div>
                        <div className="txt-info-color">
                            <NameColor text="DT Doria" />
                            <HexaColor text="D0CDD0" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row line-color">
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtUbiquitous"></div>
                        <div className="txt-info-color">
                            <NameColor text="DT Ubiquitous" />
                            <HexaColor text="666966" />
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
                            <NameColor text="DT Navy" />
                            <HexaColor text="636883" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtGhost"></div>
                        <div className="txt-info-color">
                            <NameColor text="DT Ghost" />
                            <HexaColor text="8A96C7" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtHalloween"></div>
                        <div className="txt-info-color">
                            <NameColor text="DT Halloween" />
                            <HexaColor text="6893FF" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtSaara"></div>
                        <div className="txt-info-color">
                            <NameColor text="DT Saara" />
                            <HexaColor text="B19E15" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row line-color">
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtSand"></div>
                        <div className="txt-info-color">
                            <NameColor text="DT Sand" />
                            <HexaColor text="D4BD29" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtPersian"></div>
                        <div className="txt-info-color">
                            <NameColor text="DT Persian" />
                            <HexaColor text="796E39" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtTopaz"></div>
                        <div className="txt-info-color">
                            <NameColor text="DT Topaz" />
                            <HexaColor text="B4A458" />
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
                            <NameColor text="DT Hole" />
                            <HexaColor text="201C1D" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtMetalPink"></div>
                        <div className="txt-info-color">
                            <NameColor text="DT Metal Pink" />
                            <HexaColor text="9F8D93" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtCottonCandy"></div>
                        <div className="txt-info-color">
                            <NameColor text="DT Cotton Candy" />
                            <HexaColor text="ECD1D9" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtCute"></div>
                        <div className="txt-info-color">
                            <NameColor text="DT Cute" />
                            <HexaColor text="FFEBF1" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row line-color">
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtDust"></div>
                        <div className="txt-info-color">
                            <NameColor text="DT Dust" />
                            <HexaColor text="C79500" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtMud"></div>
                        <div className="txt-info-color">
                            <NameColor text="DT Mud" />
                            <HexaColor text="575738" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtWood"></div>
                        <div className="txt-info-color">
                            <NameColor text="DT Wood" />
                            <HexaColor text="856943" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtBamboo"></div>
                        <div className="txt-info-color">
                            <NameColor text="DT Bamboo" />
                            <HexaColor text="C89C5A" />
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
                            <NameColor text="DT Sea" />
                            <HexaColor text="006E76" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtNight"></div>
                        <div className="txt-info-color">
                            <NameColor text="DT Night" />
                            <HexaColor text="002022" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtOcean"></div>
                        <div className="txt-info-color">
                            <NameColor text="DT Ocean" />
                            <HexaColor text="004145" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtDeafultSea"></div>
                        <div className="txt-info-color">
                            <NameColor text="DT Deafult Sea" />
                            <HexaColor text="008089" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row line-color">
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtSupport"></div>
                        <div className="txt-info-color">
                            <NameColor text="DT Support" />
                            <HexaColor text="94909C" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtUrbanSky"></div>
                        <div className="txt-info-color">
                            <NameColor text="DT Urban Sky" />
                            <HexaColor text="F2EEFF" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtFlower"></div>
                        <div className="txt-info-color">
                            <NameColor text="DT Flower" />
                            <HexaColor text="B84145" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtRose"></div>
                        <div className="txt-info-color">
                            <NameColor text="DT Rose" />
                            <HexaColor text="A81917" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row line-color">
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtWall"></div>
                        <div className="txt-info-color">
                            <NameColor text="DT Wall" />
                            <HexaColor text="63535A" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtHappy"></div>
                        <div className="txt-info-color">
                            <NameColor text="DT Happy" />
                            <HexaColor text="F6747C" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtCute"></div>
                        <div className="txt-info-color">
                            <NameColor text="DT Cute" />
                            <HexaColor text="EFAAB7" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtVampire"></div>
                        <div className="txt-info-color">
                            <NameColor text="DT Vampire" />
                            <HexaColor text="783A46" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row line-color">
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dtAqua"></div>
                        <div className="txt-info-color">
                            <NameColor text="DT Aqua" />
                            <HexaColor text="49C4D4" />
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
                            <NameColor text="Light" />
                            <HexaColor text="FFFFFF" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 color-box">
                    <div className="row">
                        <div className="full-color bg-dark"></div>
                        <div className="txt-info-color">
                            <NameColor text="Dark" />
                            <HexaColor text="231F20" />
                        </div>
                    </div>
                </div>
            </div>
            <Anchor />
        </div>
    );
}

export default Colors;