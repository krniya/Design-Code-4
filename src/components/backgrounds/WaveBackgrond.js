import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    position: relative;

`

const Wave = styled.img`
    position: absolute;
    z-index: -1;
`
const BackGround = styled.div`
    background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
    position: absolute;
    width: 100%;
    height: 800px;
    z-index: -1;
`


export default function WaveBackgrond() {
    return (
        <Wrapper>
            <BackGround />
            <Wave src="/images/waves/hero-wave1.svg" style={{ top: "100px", filter: "blur(60px)", width: "100%" }} />
            <Wave src="/images/waves/hero-wave2.svg" style={{ top: "350px", width: "100%" }} />
            <Wave src="/images/waves/hero-wave3.svg" style={{ top: "550px", width: "100%" }} />
        </Wrapper>
    )
}
