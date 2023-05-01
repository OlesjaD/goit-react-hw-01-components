import { FriendListItem } from "./FriendListItem";
import css from './FriendList.module.css';
import PropTypes from "prop-types";

function FriendList ({friends}) {
    return (
        <ul className={css.friendList}>
            {friends.map (friend => (
                <li key={friend.id}>
                    <FriendListItem
                        avatar = {friend.avatar}
                        name = {friend.name}
                        isOnline = {friend.isOnline}
                    />
                </li>
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