import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import React, { useState } from 'react'

import styled from 'styled-components';

export default function Dropdown({items}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelecteditem] = useState(null);

    const handleMouseEnter = () => {
        setIsOpen(true);
    }

    const handleMouseLeave = () => {
        setIsOpen(false);
    }

    const handleSelect = (item) => {
        setSelecteditem(item);
        setIsOpen(false);
    }

    return (
        <>
            <DropdownElement
                onMouseEnter = {handleMouseEnter}
                onMouseLeave = {handleMouseLeave}
            >
                {/* Dropdown Element */}
                <DropdownAnchor>
                  { selectedItem || 'Select' }
                  { isOpen ? <BsChevronUp /> : <BsChevronDown /> }
                </DropdownAnchor>
                {
                    isOpen &&
                    <DropdownList>
                        {
                            items.map((item, index) => (
                                <li data-id={index} onClick={() => handleSelect(item)}>
                                    <a href="javascript:">{item}</a>
                                </li>
                            ))
                        }
                    </DropdownList>
                }
            </DropdownElement>
        </>
    )
}


const DropdownElement = styled.div`
    width: 100%;
    position: relative;
    box-sizing: border-box;
`;

const DropdownAnchor = styled.a`
    padding: 12px;
    background: white;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    display: block;
    cursor: pointer;
    font-size: 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const DropdownList = styled.ul`
    list-style: none;
    text-align: left;
    margin: 0;
    padding: 0;
    background: white;
    border-radius: 0 0 12px 12px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    position: absolute;
    bottom: 0;
    transform: translateY(100%);
    width: 100%;
    box-sizing: border-box;

    li{
        padding: 4px 12px;
    }

    li:first-child{
        padding: 8px 12px 4px
    }

    li:last-child{
        padding: 4px 12px 8px
    }

    li:hover{
        background: #f1f2f2;
    }
    
    a{
        text-decoration: none;
        color: #000000;
        padding: 4px 12px;
        display: block;
    }
`;