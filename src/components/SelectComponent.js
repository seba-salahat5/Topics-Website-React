import * as React from 'react';
import styled from 'styled-components';


const Dropdown = styled.div`
padding: 5px 10px 5px 10px;
margin-right: 2px;
color: #333333;
background-color: #FFFFFF;
width: 100%;
border: 0px;
font-size: 13px;
font-weight: bolder;
`;

const Select = styled.select`
color: #333333;
background-color: #FFFFFF;
width: 100%;
border: 0px;
font-size: 17px;
`;

export default function SelectComponent({ type, options }) {
    const id = `${type}Options`;
    return (
        <Dropdown>
            <label htmlFor={id}>{type} By:</label>
            <Select id={id}>
                {options.map((option) => (
                    <option key={options.indexOf(option)}  value={option}>
                        {option}
                    </option>
                ))}
            </Select>
        </Dropdown>
    );
}