import React, { Component } from 'react'
import styled, { css } from 'react-emotion'
import LogoImgSrc from './assets/logo.png'
import Location from './location'
import Categories from './categories'
import Search from './search'
import UserMenu from './usermenu'

const HeaderStyle = css`
    background: #fcfefe;
    box-shadow: 0px 0px 9px 0px rgba(207, 222, 234, 0.45);
    display: flex;
    position: relative;
    z-index: 1;
`

const LogoImg = styled.img`
    padding: 1.5em 2.857em 1.5em 0;
`

const Navigation = styled.nav`
    display: flex;
    flex: 1 0;
    align-items: center;
    box-shadow: -1px 0 0 #f1f6f9;
`

export const LeftMenuLink = styled.a`
    position: relative;
    cursor: pointer;
    text-decoration: none;
    padding: 0 0.714em;
    margin: 0 1.143em;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--text-light-grey);
    letter-spacing: 0.03em;
    &:hover {
        color: var(--text-dark-grey);
        font-weight: 600;
        box-shadow: inset 0 -2px 0 0 var(--primary-blue);
    }
    &:after {
        display: block;
        content: attr(title);
        font-weight: bold;
        height: 0;
        overflow: hidden;
        visibility: hidden;
    }
`

const NavWrapper = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    max-width: 1280px;
    padding: 0 20px;
`

class Header extends Component {
    state = {
        isSearching: false
    }

    toggleSearching = () => {
        this.setState({
            isSearching: !this.state.isSearching
        })
    }

    render () {
        return (
            <header className={HeaderStyle}>
                <NavWrapper>
                    <a href="/">
                        <LogoImg src={LogoImgSrc} />
                    </a>
                    <Navigation>
                        <Location/>
                        {!this.state.isSearching ? <Categories/> : null}
                        {!this.state.isSearching ? <LeftMenuLink href="#" title="Explore">Explore</LeftMenuLink> : null}
                        <Search onToggle={this.toggleSearching}/>
                    </Navigation>
                    <UserMenu/>
                </NavWrapper>
            </header>
        );
    }
}

export default Header;