import React, { Component } from 'react'
import MediaCard from '../MediaCard/MediaCard';

class CardList extends React.Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(JSON.stringify(nextProps.houses) === JSON.stringify(this.props.houses));
        return JSON.stringify(nextProps.houses) === JSON.stringify(this.props.houses) ? false : true
    }
    render() {
        const { houses } = this.props;
        return (
            <div className="cards" >
                {
                    houses.map((element, key) => {
                        return (<MediaCard desc={element.desc} title={element.name} img={element.img} key={key} />)
                    })
                }
            </div>
        )

    }
}

export default CardList;
