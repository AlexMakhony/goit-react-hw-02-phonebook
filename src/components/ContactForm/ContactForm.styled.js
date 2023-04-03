import styled from '@emotion/styled';

export const FormWrapper = styled.form`
    margin-top: 40px;
    width: 200px;
    /* outline: 2px solid greenyellow; */
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 20px;
    font-weight: 500;
`;

export const FormInput = styled.input`
    text-align: center;
    border-radius:5px;
    border: 1px solid grey;
    height: 20px;
    width: 120px;
    margin-left: 5px;
`;

export const FormButton = styled.button`
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    width: 100px;
    border-radius: 8px;
    border: none;
    height: 30px;
    cursor: pointer;
    :hover {
        background-color: grey;
        color: white;
    }
`;