import styled from '@emotion/styled';

export const ContactListWrapper = styled.ul`
    padding-left:20px;
    padding-right:20px;
    margin-top: 40px;
    margin-bottom:40px;
    /* outline: 2px solid tomato; */
    display: flex;
    flex-direction: column;
`;

export const ContactListEl = styled.li`
    margin-bottom: 10px;
`;

export const ContactListBtn = styled.button`
    margin-left: 10px;
    border-radius: 8px;
    border: none;
    height: 30px;
    cursor: pointer;
    :hover {
        background-color: grey;
        color: white;
    }
`;