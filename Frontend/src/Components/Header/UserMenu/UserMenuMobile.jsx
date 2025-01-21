import UserMenu from "./UserMenu";

const UserMenuMobile = ({ user, onLoginClick }) => {
    return (
        <div>
            <UserMenu user={user} onLoginClick={onLoginClick} />
        </div>
    );
};

export default UserMenuMobile;
