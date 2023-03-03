import { faCalendarAlt, faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from 'react';
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { Button } from "../button";
import { Marginer } from "../marginer";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { SCREENS } from "../responsive";

const CardContainer = styled.div`
    min-height: 4.3em;
    box-shadow: 0 1.3px 12px -3px rgba(0,0,0,0.4);
    ${tw`
        flex
        justify-center
        items-center
        rounded-md
        bg-white
        pt-1
        pb-1
        pr-2
        pl-2
        md:pt-2
        md:pb-2
        md:pl-9
        md:pr-9
    `}
`;

const ItemContainer = styled.div`
    ${tw`
        flex
        relative
    `}
`;

const Icon = styled.span`
    ${tw`
        text-red-500
        fill-current
        text-xs
        md:text-base
        mr-1
        md:mr-3
    `}
`;

const SmallIcon = styled.span`
    ${tw`
        text-gray-700
        fill-current
        text-xs
        md:text-base
        ml-1
    `}
`;

const Name = styled.span`
    ${tw`
        text-gray-600
        text-xs
        md:text-sm
        cursor-pointer
        select-none
    `}
`;

const LineSeparator = styled.span`
    width:2px;
    height: 45%;
    ${tw`
        bg-gray-300
        mr-2
        ml-2
        md:mr-5
        md:ml-5
    `}
`;

const DateCalendar = styled(Calendar)<{offset:boolean}>`
    position: absolute;
    max-width: none !important;
    user-user-select:none;
    top: 3.5em;
    left: -2em;

    ${({offset})=> offset && css`
        left:-6em;
        top:3.5em;
    `}
    
    @media(min-width: ${SCREENS.md}){
        top:3.5em;
        left: 1em;
    }
`;

export function BookCard(){
    const [startDate, setStartDate]= useState<Date>(new Date());
    const [isStartCalendarOpen, setIsStartCalendarOpen] = useState(false);
    const [returnDate, setReturnDate]= useState<Date>(new Date());
    const [isReturnCalendarOpen, setIsReturnCalendarOpen] = useState(false);

    const toggleStartDateCalendar = ()=> {
        setIsStartCalendarOpen(!isStartCalendarOpen);
        if(!isStartCalendarOpen) setIsReturnCalendarOpen(false);
    }
    const toggleReturnDateCalendar = () =>{
        setIsReturnCalendarOpen(!isReturnCalendarOpen);
        if(!isReturnCalendarOpen) setIsStartCalendarOpen(false);
    }

    return <CardContainer>
        <ItemContainer>
            <Icon>
                <FontAwesomeIcon icon={faCalendarAlt}></FontAwesomeIcon>
            </Icon>
            <Name onClick={toggleStartDateCalendar}>Pick Up Date</Name>
            <SmallIcon>
                <FontAwesomeIcon icon ={ isStartCalendarOpen? faCaretUp : faCaretDown}/>
            </SmallIcon>
            {isStartCalendarOpen && <DateCalendar offset = {false} value={startDate} onChange = {setStartDate}></DateCalendar>}
        </ItemContainer>
        <LineSeparator></LineSeparator>
        <ItemContainer>
            <Icon>
                <FontAwesomeIcon icon={faCalendarAlt}></FontAwesomeIcon>
            </Icon>
            <Name onClick = {toggleReturnDateCalendar}>Return Name</Name>
            <SmallIcon>
                <FontAwesomeIcon icon ={ isReturnCalendarOpen? faCaretUp : faCaretDown}/>
            </SmallIcon>
            {isReturnCalendarOpen && <DateCalendar offset = {true} value={returnDate} onChange = {setReturnDate}></DateCalendar>}
        </ItemContainer>
        <Marginer margin="2em" direction="horizontal"></Marginer>
        <Button theme="filled" text="Book Your Ride"></Button>
    </CardContainer>
}