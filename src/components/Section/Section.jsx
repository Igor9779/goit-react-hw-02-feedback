import { StyledSection, StyledTitle } from "./Section.styled"

export const Section = ({ title, children }) => {
    return (
        <StyledSection>
            <StyledTitle>{title}</StyledTitle>
            {children}
        </StyledSection>
    )
}