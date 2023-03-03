import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface TitleProps {
    Text:string
};

const TitleParagraph = styled.h2`
    ${tw`
        text-3xl
        lg:text-4xl
        text-black
        font-extrabold
    `};
`;

export const Title = (props:TitleProps) => <TitleParagraph>{props.Text}</TitleParagraph>;