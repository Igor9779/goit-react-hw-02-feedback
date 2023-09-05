import styled from 'styled-components';

export const ButtonContainer = styled.div`
    display: flex;
    margin-top: 20px;
`;

export const FeedbackButton = styled.button`
    padding: 10px 20px;
    margin: 5px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;
