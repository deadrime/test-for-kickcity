import React, { Component } from 'react';
import styled from 'react-emotion'
import { LeftMenuLink }  from './index'


export const DropdownMenu = styled.div`
    position: absolute;
    top: 100%;
    display: ${props =>
        props.visible ? 'flex' : 'none'};
    left: -32px;
    padding: 20px 0;
    white-space: nowrap;
    z-index: 2;
    background: #fcfefd;
    box-shadow: 0px 4px 9px 0px rgba(207,222,234,0.45), inset 0px 8px 8px -8px rgba(207,222,234,0.45);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
`

export const LinksColumn = styled.div`
    display: flex;
    flex-direction: column;
    & > span {
        color: var(--text-light-grey);
        font-weight: normal;
        padding: 8px 32px;
        &:hover {
            color: var(--text-dark-grey);
        }
    }
`
class Categories extends Component {
    state = {
        isActive: false
    }
    
    show = () => {
        this.setState({isActive: true})
    }

    hide = () => {
        this.setState({isActive: false})
    }

    render () {
        return (
            <LeftMenuLink onMouseOut={this.hide} onMouseOver={this.show} title="Categories" >
                Categories
                <DropdownMenu visible={this.state.isActive}>
                    <LinksColumn>
                        <span>Concerts</span>
                        <span>Art</span>
                        <span>Festivals</span>
                        <span>Theatre</span>
                        <span>Nightlife</span>
                        <span>Business</span>
                    </LinksColumn>

                    <LinksColumn>
                        <span>Party</span>
                        <span>Games</span>
                        <span>Education</span>
                        <span>Fashion</span>
                        <span>Sport</span>
                        <span>Meetups</span>
                    </LinksColumn>
                </DropdownMenu>
            </LeftMenuLink>
        )
    }
}

export default Categories;