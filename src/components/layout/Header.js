import React, { useState } from 'react';
import styled from 'styled-components';
import { menuData } from '../../data/menuData';
import MenuButton from '../buttons/MenuButton';
import { Link } from 'gatsby';
import MenuTooltip from '../tooltips/MenuTooltip';

const Wrapper = styled.div`
    position: absolute;
    top: 60px;
    display: grid;
    grid-template-columns: 44px auto;
    width: 100%;
    justify-content: space-between;
    padding: 0 70px;
    align-items: center;
    
`

const MenuWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.count}, auto);
    gap: 30px;
`

export default function Header() {

    const [isOpen, setIsOpen] = useState(false)
    function handleClick(event) {
        setIsOpen(!isOpen)
        event.preventDefault()
    }
    return (
        <Wrapper>
            <Link to='/'>
                <img src="images/logos/logo.svg" alt="logo" />
            </Link>
            <MenuWrapper count={menuData.length}>
                {menuData.map((item, index) => item.link === "/account" ?
                    (<MenuButton item={item} key={index} onClick={(event) => handleClick(event)} />) :
                    (<MenuButton item={item} key={index} />)
                )}
            </MenuWrapper>
            <MenuTooltip isOpen={isOpen} />
        </Wrapper>
    )
}