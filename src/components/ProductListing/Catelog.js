import React, { Component } from 'react'
import { ReactComponent as AddIcon } from '../../images/add.svg';

export class Catelog extends Component {
    render() {
        return (
            <>
                <aside className="side-right">
                    <div className="grid-column">
                        <div className="cateloge-main">
                            <div className="pimage-div">
                                <img className="pimage" src="" alt="" />
                                <div className="product-discount">
                                    10%
                                    </div>
                            </div>
                            <div className="details-div">
                                <div className="ditail-inner">
                                    <div className="pname-div">
                                        Product A
                                        </div>
                                    <div className="pcolor-div">
                                        <p>Color</p>
                                        <div className="color-div"></div>
                                    </div>
                                </div>
                                <div className="ditail-inner">
                                    <div className="pbrand-div">
                                        Brand A
                                        </div>
                                    <div className="padd-div">
                                        <div className="add-button-div">
                                            <AddIcon className="add-icon" />
                                            <p>Add</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="ditail-inner">
                                    <div className="price-div">
                                        10$
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </>
        )
    }
}

export default Catelog
