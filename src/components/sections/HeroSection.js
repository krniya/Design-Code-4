import React from 'react'
import styled from 'styled-components'
import { H1, MediumText } from '../styles/TextStyles'

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
    color: white;
`
const Description = styled(MediumText)`
`


function HeroSection() {
    return (
        <Wrapper>
            <ContentWraper>
                <TextWrappper>
                    <Title>Design <br /> and Code React apps</Title>
                    <Description>Don’t skip design. Learn design and code, by building real apps with React and Swift. Complete courses about the best tools.</Description>
                </TextWrappper>
            </ContentWraper>
        </Wrapper>
    )
}

export default HeroSection;

