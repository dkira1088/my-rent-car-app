import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ICar } from "../../../typings/car";
import { Car } from "../../components/car";
import { Title } from "../../components/common-components/commonComponents";
import Carousel,  {Dots, slidesToShowPlugin} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const TopCarsContainer = styled.div`
    ${tw`
        max-w-screen-lg
        w-full
        flex
        flex-col
        items-center
        justify-center
        pr-4
        pl-4
        md:pl-0
        md:pr-0
        mb-10
    `};
`;

const CarsContainer = styled.div`
    ${tw`
        w-full
        flex
        flex-wrap
        justify-center
        mt-7
        md:mt-10
    `};
`;


export function  TopCars() {
    const [current, setCurrent] =  useState(0);
    
    const testCar1: ICar = {
        name: "Audi S3 Car",
        mileage: "10k",
        thumbnailSrc:"https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
        dailyPrice:70,
        monthlyPrice:1600,
        gearType:"Auto",
        gas:"Petrol"
    }

    const cars =[<Car {...testCar1}/>, 
    <Car {...testCar1}/>,
    <Car {...testCar1}/>,
    <Car {...testCar1}/>];

    return <TopCarsContainer>
        <Title Text="Explore Our Top Deals"></Title>
        <CarsContainer>
            <Carousel value= {current} 
            onChange ={setCurrent} 
            slides={cars}
           
            breakpoints={{
                640:{
                    plugins:[{
                        resolve:slidesToShowPlugin,
                        options:{
                            numberOfSlides:1
                        }
                    }] 
                },
                900:{
                    plugins:[{
                        resolve:slidesToShowPlugin,
                        options:{
                            numberOfSlides:2
                        }
                    }] 
                }
            }}
            />
            <Dots value={current} onChange = {setCurrent} number= {cars.length}/>
        </CarsContainer>
    </TopCarsContainer>
};