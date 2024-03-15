import { useDispatch } from "react-redux";
import authService from "../.././appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutButton() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    })
  };

  return <div className=" bg-green-600">LogoutButton</div>;
}

export default LogoutButton;
