import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { BookCard } from '../../components/bookCard';
import { Marginer } from '../../components/marginer';
import { Navbar } from '../../components/navBar';
import { AboutUs } from './aboutUs';
import { BookingSteps } from './bookingSteps';
import { TopSection } from './top-section';
import { TopCars } from './topCars';


const PageContainer = styled.div`
${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
`}`;

export function HomePage() {
    return <PageContainer>
                <Navbar></Navbar>
                <TopSection></TopSection>
                <Marginer direction ="vertical" margin = "4em"></Marginer>
                <BookCard></BookCard>
                <Marginer direction ="vertical" margin = "8em"></Marginer>
                <BookingSteps></BookingSteps>
                <Marginer direction='vertical' margin="5em"></Marginer>
                <AboutUs></AboutUs>
                <Marginer direction='vertical' margin="5em"></Marginer>
                <TopCars></TopCars>
           </PageContainer>
    
}