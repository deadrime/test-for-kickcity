import React, { Component } from 'react';
import styled from 'react-emotion'
import PlaceImgSrc from './assets/place.png'
import ArrowDownImgSrc from './assets/arrow-down.png'
import filter from 'lodash/filter'

const LeftMenuLocation = styled.div`
    font-weight: 600;
    font-size: 14px;
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 0 3.857em;
    white-space: nowrap;
    &::before {
        height: 20px;
        width: 16px;
        margin-right: 1em;
        content: '';
        background: url(${PlaceImgSrc}) center no-repeat
    }
`

const LeftMenuLocationButton = styled.button`
    cursor: pointer;
    background: url(${ArrowDownImgSrc}) center no-repeat;
    border: none;
    width: 9px;
    height: 5px;
    padding: 10px;
    outline:none;
    transform: ${props =>
        props.active ? 'rotate(180deg)' : null};
`

const DropdownMenu = styled.div`
    position: absolute;
    background: #fcfefd;
    z-index: 0;
    top: 100%;
    display: ${props =>
        props.visible ? 'flex' : 'none'};
    flex-direction: column;
    padding: 20px 0;
    white-space: nowrap;
    box-shadow: 0px 4px 9px 0px rgba(207,222,234,0.45), inset 0px 8px 8px -8px rgba(207,222,234,0.45);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    & > span {
        text-decoration: none;
        color: var(--text-light-grey);
        font-weight: normal;
        padding: 8px 32px;
        &:hover {
            color: var(--text-dark-grey)
        }
    }
`

class Location extends Component {
    state = {
        isActive: false,
        locations: ['Houston', 'Moscow', 'Saint-Petersburg', 'Helsinki', 'Toronto'],
        currentLocation: 'Houston'
    }
    toggleActive = () => {
        this.setState({
            isActive: !this.state.isActive
        })
    }
    chooseLocation = (current) => {
        this.setState({
            currentLocation: current,
            isActive: false
        })
    }
    render () {
        let LocationsList = filter(this.state.locations, (item) => item !== this.state.currentLocation).map((name) =>
            <span 
                key={name}
                value={name} 
                onClick={this.chooseLocation.bind(this, name)}>
                {name}
            </span>
        )
    
        return(
            <LeftMenuLocation>
                <span onClick={this.toggleActive}>{this.state.currentLocation}</span>
                <LeftMenuLocationButton active={this.state.isActive} onClick={this.toggleActive}/>
                <DropdownMenu visible={this.state.isActive}>
                    {LocationsList}
                </DropdownMenu>
            </LeftMenuLocation>
        )
    }
}

export default Location;