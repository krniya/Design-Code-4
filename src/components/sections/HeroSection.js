import React from 'react'
import styled from 'styled-components'
import { H1, MediumText } from '../styles/TextStyles'
import { themes } from '../styles/ColorStyles'
import PurchaseButton from '../buttons/PurchaseButton'

const Wrapper = styled.div`
    background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
`
const ContentWraper = styled.div`
    max-width: 1234px;
    margin: 0 auto;
    padding: 200px 30px;

`
const TextWrappper = styled.div`
    max-width: 360px;
    display: grid;
    gap: 30px;

`
const Title = styled(H1)`
    color: ${themes.dark.text1};
`
const Description = styled(MediumText)`
`


function HeroSection() {
    return (
        <Wrapper>
            <ContentWraper>
                <TextWrappper>
                    <Title>Design <br /> And code React apps</Title>
                    <Description>Don’t skip design. Learn design and code, by building real apps with React and Swift. Complete courses about the best tools.</Description>
                    <PurchaseButton title="Start learning" subtitle="120+ hours of video" />
                </TextWrappper>
            </ContentWraper>
        </Wrapper>
    )
}

export default HeroSection;

