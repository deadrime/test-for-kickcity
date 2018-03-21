import React, { Component } from 'react';
import styled, { css } from 'react-emotion'
import BellIconSrc from './assets/alarm-bell.png'
import BellIconHoverSrc from './assets/alarm-bell-hover.png'
import { DropdownMenu, LinksColumn } from './categories'

const Wrapper = styled.div`
    display: flex;
    cursor: pointer;
`

const NewEvents = styled.button`
    cursor: pointer;
    width: 60px;
    padding: 0;
    margin-right: 1em;
    border: none;
    background: url(${BellIconSrc}) center no-repeat;
    position: relative;
    &:hover {
        background-image: url(${BellIconHoverSrc})
    }
    &:before {
        opacity: ${props =>
		    props.notification ? '1' : '0'};
        content: '';
        position: absolute;
        top: calc(50% - 16px);
        right: calc(50% - 16px);
        border-radius: 50%;
        background-color: rgb(0, 154, 214);
        width: 6px;
        height: 6px;
    }
`

const CreateEventBtn = styled.button`
    cursor: pointer;
    outline: none;
    border: none;
    display: flex;
    background: none;
    font-family: var(--main-font);
    color: var(--text-light-grey);
    font-size: 14px;
    font-weight: 600;
    padding: 0 2.429em;
    box-shadow: -1px 0 0 #f1f6f9, 1px 0 0 #f1f6f9;
    letter-spacing: 0.03em;
    &:hover {
        background: var(--primary-blue);
        color: #fff;
    }
`

const UserInfo = styled.div`
    position: relative;
    display: flex;
    padding-left: 1.429em;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: var(--text-light-grey);
    & > span {
        letter-spacing: 0.05em;
    }
`

const UserAvatar = styled.img`
    width: 42px;
    height: 42px;
    border-radius: 50%;
    margin-left: 1.286em;
    background-color: var(--text-light-grey);
    background-image: url(${props => 
        props.avatar});
`

const tokens = css`
    color: var(--primary-blue);
    font-weight: 600;
`
const DropdownMenuStyle = css`
    left: -10px;
`

const LinksColumnStyle = css`
    & > span:last-child {
        position: relative;
        padding: 12px 32px;
        &:before {
            content: '';
            position: absolute;
            left: 32px;
            height: 1px;
            top: 2px;
            width: 60%;
            background: #e6f0f2;
        }
    }
`

class Search extends Component {
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
        return(
            <Wrapper>
                <NewEvents notification/>
                <CreateEventBtn>Create Event</CreateEventBtn>
                <UserInfo onMouseOut={this.hide} onMouseOver={this.show}>
                    <span className = {tokens}>{'0.0027'}</span>
                    <span>&nbsp;KCY</span>
                    <UserAvatar avatar="avatar.png"/>
                    <DropdownMenu className={DropdownMenuStyle} visible={this.state.isActive}>
                        <LinksColumn className={LinksColumnStyle}>
                            <span>My profile</span>
                            <span>Organizer panel</span>
                            <span>Buy KCY tokens</span>
                            <span>Settings</span>
                            <span>Log Out</span>
                        </LinksColumn>
                    </DropdownMenu>
                </UserInfo>
            </Wrapper>
        )
    }
}

export default Search;