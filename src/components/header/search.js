import React, { Component } from 'react';
import styled from 'react-emotion'
import SearchIconSrc from './assets/search.png'
import SearchIconHoverSrc from './assets/search-hover.png'


const Wrapper = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex: 1 0;
    margin-left: auto;
`
const SearchInput = styled.input`
    box-shadow: -1px 0 0 #f1f6f9;
    display: flex;
    flex: 1 0;
    min-width: 160px;
    height: 100%;
    padding: 0 7.233%;
    border: none;
    font-family: 'Open Sans';
    font-size: 14px;
    outline: none;
    &:placeholder {
        color: var(--text-dark-grey);
    }
    &:placeholder-shown {
        color: var(--text-light-grey);
    }
`
const SearchButton = styled.button`
    font-family: 'Open Sans';
    font-weight: 600;
    font-size: 14px;
    background: none;
    padding: 0 5.063%;
    border: none;
    color: var(--text-dark-grey);
    &:hover {
        color: var(--primary-blue)
    }
`

const SearchIcon = styled.button`
    cursor: pointer;
    margin-left: auto;
    height: 100%;
    width: 3.571em;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: ${props =>
        !props.active ? 'url('+SearchIconSrc+') center no-repeat' : 'none'};
    &:hover {
        background-image:${props =>
        !props.active ? 'url('+SearchIconHoverSrc+')' : 'none'};
    }
    & span {
        width: 2px;
        height: 16px;
        transform: rotate(45deg);
        position: relative;
        background: var(--primary-blue);
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 2px;
            height: 16px;
            transform: rotate(-90deg);
            background: var(--primary-blue);
        }
    }
`

class Search extends Component {
    state = {
        searchActive: false
    }
    toggleSearchActive = () => {
        this.setState({
            searchActive: !this.state.searchActive
        }, ()=> {
            if (this.state.searchActive) {
                this.inputField.focus();
            }
            this.props.onToggle()
        })
    }

    getInputRef = node => {
        this.inputField = node
    }

    render () {
        if (this.state.searchActive) {
            return(
                <Wrapper>
                    <SearchInput placeholder="Example: Cats exhibition" innerRef={this.getInputRef}/>
                    <SearchButton>Search</SearchButton>
                    <SearchIcon onClick={this.toggleSearchActive} active={this.state.searchActive}>
                        <span/>
                    </SearchIcon>
                    
                </Wrapper>
            )
        } else {
            return(
                <Wrapper>
                    <SearchIcon onClick={this.toggleSearchActive} active={this.state.searchActive}/>
                </Wrapper>
            )
        }
       
    }
}

export default Search;