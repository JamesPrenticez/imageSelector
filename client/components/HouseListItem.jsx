import React from 'react'
import {connect} from 'react-redux'

class HouseListItem extends React.Component {

    render() {
        const { house, dispatch } = this.props
        const user = {id: 1}
        return (
            <>
                <div className="content">

                <div className="text">
                <b>Name:</b> {house.name}
                <b>GFA:</b> {house.gfa}
                <b>Cost:</b> {house.cost}
                <b>Description:</b> {house.description}        
                </div>

                <img style={{ backgroundImage: `url(${house.image_elevation})` }}></img>
                <img style={{ backgroundImage: `url(${house.image_3d})` }}></img>
                <img style={{ backgroundImage: `url(${house.image_floor})` }}></img>
                <img style={{ backgroundImage: `url(${house.image_cover})` }}></img>

                </div>

            </>
        )
    }
}

export default connect ()(HouseListItem)
