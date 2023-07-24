import styled from '@emotion/styled'
import React from 'react'

interface Props {
    type: "button" | "submit" | "reset",
    text: string,
    action?: () => void
}

const StyledButton = styled.button`
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.linearGradient};
    width: 100%;
`

export default function Button({ type, text, action }: Props) {
    const handleAction = () => {
        action && action();
    }

    return (
        <StyledButton type={type} onClick={handleAction}>
            {text || "Text"}
        </StyledButton>
    )
}