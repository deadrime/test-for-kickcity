import React, { Component } from 'react';
import styled, {css} from 'react-emotion';
import FireIconSrc from './assets/fire.png'
import ArrowIconSrc from './assets/arrow.png'
import ArrowIconHoverSrc from './assets/arrow-hover.png'
import Event from './event'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 1.429em 7.143em 1.429em;
`

const EventsHeader = styled.header`
    padding-top: 5.429em;
    padding-bottom: 3.286em;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Title = css`
    font-weight: 700;
    display: block;
    position: relative;
    margin: 0;
    font-size: 1.714em;
    color: var(--text-dark-grey);
    &::before {
        content: '';
        position: absolute;
        right: -30px;
        bottom: 8px;
        height: 27px;
        width: 21px;
        background: url(${FireIconSrc}) center no-repeat;
    }
`

const EventWrapper = css`
    display: grid;
    grid-gap: 1.143em;
    min-height: 39.286em;
    padding: 0;
    grid-template-columns: repeat(1, 1fr);
    grid-template-areas:
      "small1"
      "small2"
      "large1"
      "small3"
      "large2"
      "small4"
  }

  & > article:nth-child(1)  { grid-area: small1; }
  & > article:nth-child(2)  { grid-area: small2; }
  & > article:nth-child(3)  { grid-area: large1; }
  & > article:nth-child(4)  { grid-area: small3; }
  & > article:nth-child(5)  { grid-area: large2; }
  & > article:nth-child(6)  { grid-area: small4; }

  @media screen and (min-width: 750px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: auto;
      grid-template-areas:
        "large1 large1"
        "small1 small2"
        "large2 large2"
        "small3 small4";
  }
  @media screen and (min-width: 1280px) {
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: auto;
      grid-template-areas:
      "small1 small2 large1 large1"
      "small3 large2 large2 small4";
  }
`

const ArrowIcon = styled.span`
    display: inline-block;
    margin-left: 1em;
    width: 22px;
    height: 7px;
    background: url(${ArrowIconSrc});
`

const MoreBtn = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
    font-size: inherit;
    color: var(--text-light-grey);
    &:hover {
        color: var(--text-dark-grey);
        & ${ArrowIcon} {
            background: url(${ArrowIconHoverSrc});
        }
    }
`

class Events extends Component {
    render () {
        return(
            <Wrapper>
                <EventsHeader> 
                    <h1 className={Title}>Trending еvents</h1>
                    <MoreBtn>More <ArrowIcon/></MoreBtn>
                </EventsHeader>
                <div className={EventWrapper}>
                    <Event
                        date="Mar, 21"
                        title="New Politics @ House of Blues"
                        img="/events/event-1.png"/>
                    <Event
                        date="Feb, 13"
                        title="Grand Budapest Hotel"
                        img="/events/event-2.png"
                        token
                        free/>
                    <Event
                        date="Apr, 24"
                        title="Romeo and Juliet"
                        img="/events/event-3.png"/>
                    <Event
                        date="Mar, 21"
                        title="A$AP ROCKY"
                        tags={['Party', 'Concert']}
                        like
                        img="/events/event-4.png"/>
                    <Event
                        date="Apr, 07"
                        title="Dieter Rams: Less is Better"
                        img="/events/event-5.png"
                        token/>
                    <Event
                        date="Mar, 13—25"
                        title="Carel Fabritius"
                        img="/events/event-6.png"/>
                </div>
            </Wrapper>
        )
    }
}

export default Events;