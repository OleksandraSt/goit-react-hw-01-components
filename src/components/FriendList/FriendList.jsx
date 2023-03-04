import PropTypes from 'prop-types';
import { FriendsItem, FriendsList, Status,Avatar, FriendName } from './FriendList.styled';

export const FriendList = ({friends}) => {
    return (
        <FriendsList>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <FriendsItem key={id}>
                 <Status style={{ backgroundColor: isOnline ? "green" : "red" }}>{isOnline}</Status>
                    <Avatar src={avatar} alt={name} width="48" />
                    <FriendName>{name} </FriendName>
                </FriendsItem>
            ))}
        </FriendsList>
    )
}


FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    })),
}