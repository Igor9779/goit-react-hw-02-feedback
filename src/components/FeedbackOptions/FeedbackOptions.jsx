import { ButtonContainer, FeedbackButton } from "./FeedbackOptions.styled"

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const stateKeys = Object.keys(options)
    return (
        <ButtonContainer>
            {stateKeys.map(option => (
                <FeedbackButton
                    key={option}
                    type="button"
                    name={option}
                    onClick={()=>onLeaveFeedback(option)}
                >
                    {option}
                </FeedbackButton>
            ))}
        </ButtonContainer>
    )
}