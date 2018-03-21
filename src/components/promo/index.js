import React, { Component } from 'react';
import styled from 'react-emotion'
import bgSrc from './assets/bg.png'

const Wrapper = styled.div`
    display: flex;
    height: 670px;
    box-sizing: border-box;
    background: url(${bgSrc}) 100% -60px no-repeat;
`

const Content = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding-left: 8.3%;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 1px 0 0 #e0ebf3;
    padding-bottom: 80px;
`

const Title = styled.h1`
    font-weight: 700;
    font-size: 36px;
    color: var(--text-dark-grey);
    margin: 0;
    line-height: 1.2em;
`

const Subtitle = styled.p`
    margin: 20px 0 0 0;
    color: var(--text-light-grey);
    padding-bottom: 42px;
`

const PromoBtn = styled.button`
    cursor: pointer;
    outline: none;
    background: var(--primary-blue);
    border: none;
    color: #fff;
    width: 134px;
    height: 50px;
    border-radius: 26px;
    letter-spacing: 0.03em;
    font-size: 14px;
    &:hover {
        background: #0086bb;
    }
}
`

class Promo extends Component {
    render () {
        return(
            <Wrapper>
                <Content>
                    <Title>Get rewarded<br/>for enjoying life!</Title>
                    <Subtitle>Earn crypto tokens by having fun with friends</Subtitle>
                    <PromoBtn>Get Started</PromoBtn>
                </Content>
            </Wrapper>
        )
    }
}

export default Promo;