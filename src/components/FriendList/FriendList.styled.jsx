import styled from '@emotion/styled';

export const FriendsList = styled.ul`
  width: 500px;
  margin: 20px auto;
  border-radius: 5px;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 16%);
  padding: 20px;
`;

export const FriendsItem = styled.li`
display: flex;
padding: 0 120px;
:not(:last-child){
    margin-bottom: 15px;
}
`;

export const Status = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const Avatar = styled.img`
width: 48px;
height: 48px;
margin-right: 25px;
`;

export const FriendName = styled.p`
color: #000000;
`;