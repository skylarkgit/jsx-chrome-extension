import * as React from "jsx-dom"
import { styled } from "jsx-dom";

export interface BannerProps {
    message: string
    subtext?: string
}

const BannerDiv = styled.div`
    border: 5px solid red;
    display: flex;
    align-items: center;
    text-align: center;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    padding: 50px;
    font-size: 2em;
    flex-direction: column;
`

const BannerSubtitle = styled.div`
    font-size: 16px;
`

export function Banner(props: BannerProps) {
    return (
        <BannerDiv>
            <div>{props.message}</div>
            {
                props.subtext ? (
                    <BannerSubtitle>
                        {props.subtext}
                    </BannerSubtitle>
                ): null
            }
        </BannerDiv>
    );
}