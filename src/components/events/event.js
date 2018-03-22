import React, { Component } from 'react';
import styled, {css} from 'react-emotion';
import iconHeartSrc from './assets/heart-button.png'
import iconHeartHoverSrc from './assets/heart-button-hover.png'
import iconTokenSrc from './assets/token.png'

const EventItem = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.429em;
    height: 19.143em;
    box-sizing: border-box;
    background-color: var(--text-dark-grey);
    background: ${props =>
        props.img ? 'url('+ props.img+')' : null};
    background-size: cover;
    border-radius: 0.714em;
    transition: box-shadow .3s;
    &:hover {
        box-shadow: 0 0 2.143em 0 #aabece;
    }
`

const TagsWrapper = styled.div`
    display: flex;
    font-size: 16px;
    font-weight: 400;
`

const TagStyle = css`
    padding-right: 0.875em;
`

const Content = styled.div`
    color: #fff;
    display: flex;
    flex-direction: column;
    flex: 1 0;
`

const Title = styled.h2`
    margin: 0;
    font-size: 18px;
    font-weight: 700;
`
const Header = styled.header`
    display: flex;
    justify-content: space-between;
    color: #fff;
    font-weight: 600;
`

const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
`

const IconHeart = styled.span`
    cursor: pointer;
    width: 14px;
    height: 12px;
    padding: 4px;
    background: url(${iconHeartSrc}) center no-repeat;
    &:hover {
        background-image: url(${iconHeartHoverSrc});
    }
`

const Free = styled.span`
    cursor: pointer;
    color: #fff;
    background: #43e690;
    border-radius: 0.714em;
    padding: 0px 0.857em;
    margin-left: 1.143em;
`

const TokenIcon = styled.span`
    cursor: pointer;
    width: 19px;
    height: 19px;
    background: #f9cc55 url(${iconTokenSrc}) center no-repeat;
    border-radius: 50%;
    display: block;
    position: relative;
    &:hover {
        &:before, &:after {
            display: block;
        }
    }
    &:before {
        display: none;
        color: var(--text-light-grey);
        box-sizing: border-box;
        padding: 12px;
        position: absolute;
        background-color: #ffffff;
        top: 31px;
        border-radius: 4px;
        left: -24px;
        content: 'Visit this event and earn KCY tokens!';
        font-size: 12px;
        font-weight: normal;
        width: 160px;
        height: 56px;
    }
    &:after {
        display: none;
        position: absolute;
        content: '';
        width: 0;
        height: 0;
        top: 23px;
        left: 0;
        border-style: solid;
        border-width: 0 9px 8px 9px;
        border-color: transparent transparent #fff transparent;
    }
`

const TopRightStyle = css`
    display: flex;
`

class Event extends Component {
    render () {
        const Tags = this.props.tags ? 
            this.props.tags.map((tag) =>
                <span key={tag} className={TagStyle}>{tag}</span>) 
            : null

        return(
            <EventItem large={this.props.large} img={this.props.img}>
                <Header>
                    <span>{this.props.date}</span>
                    <div className = {TopRightStyle}>
                        {this.props.token ? <TokenIcon/> : null}
                        {this.props.free ? <Free>Free</Free> : null}   
                    </div>
                </Header>
                <Footer>
                    <Content>
                        <div>
                            <Title>{this.props.title}</Title>
                            <TagsWrapper>
                                {Tags}
                            </TagsWrapper>
                        </div>
                    </Content>
                    {this.props.like ? <IconHeart/> : null}
                </Footer>
            </EventItem>
        )
    }
}

export default Event