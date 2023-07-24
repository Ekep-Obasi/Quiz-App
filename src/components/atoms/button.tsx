import { css } from '@emotion/react';
import styled from '@emotion/styled'
import React from 'react'


interface OptionalProps { 
    light_gray?: boolean,
    sx?: {},
    btn_type?: "outlined" | "contained" | "rounded" | "complete",
}

interface Props extends OptionalProps {
    type: "button" | "submit" | "reset",
    text: string,
    action?: () => void,
}

const generate_type = ({ btn_type }: OptionalProps) => {
    switch (btn_type) {
        case "complete":
            return css`
             `
        case "outlined":
            return css`
                background: transparent;
                border: 1px solid;
                color: black;
            `
        case "rounded" :
            return css`
                border-radius: 50%;
                border: none;
            `
        default:
            return css`
            color: gold;
            border-radius: 5px;
        `
    }
}

const StyledButton = styled.button<OptionalProps>`
    color: ${(props: any) => props.theme.colors.white};
    background: ${(props: any) => props.theme.linearGradient};
    width: 100%;
    padding: 0.4rem 0.8rem;
    margin: 10px auto;
    ${generate_type}
    ${(props: any) => props.style}
`

export default function Button({ type, btn_type, text, action, light_gray, sx }: Props) {
    const handleAction = () => {
        action && action();
    }

    return (
        <StyledButton
            type={type}
            style={sx}
            onClick={handleAction}
            light_gray={light_gray}
            btn_type={btn_type}
        >
            {text || "Text"}
        </StyledButton>
    )
}