import { FriendListItem } from "./FriendListItem";
import css from './FriendList.module.css';
import PropTypes from "prop-types";

function FriendList ({friends}) {
    return (
        <ul className={css.friendList}>
            {friends.map (friend => (
                    <FriendListItem
                        key={friend.id}
                        avatar = {friend.avatar}
                        name = {friend.name}
                        isOnline = {friend.isOnline}
                    />
        ))}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf (
        PropTypes.shape({
          id: PropTypes.number.isRequired,
        }),
    ),
}

export default FriendList;