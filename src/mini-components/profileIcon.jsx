import userIcon from "../Assets/Icons/userIcon.png";
import { useSelector } from "react-redux";

function ProfileIcon({username}) {
  const loginState= useSelector(state=> state.loggedIn.username);
  // console.log(loginState);
  const user= loginState;
  let extracted;
  if (loginState.length > 7) {
    extracted= user.slice(0,4) + '...'
  }
  const lengthchecker= loginState.length > 7 ? true: false;
  return (
    <div className="hidden min-[350px]:flex flex-row gap-[9px] w-[82px] min-w-fit max-w-fit">
      <img
        className="w-[24px] h-[25px] object-cover"
        src={userIcon}
        alt="user Icon"
      />
      <div className="flex flex-col">
        <p className="inline-block max-w-fit text-[9px] font-montserrat font-extrabold text-buttondark ">Hello,</p>
        <p className="inline-block max-w-fit text-[11px] font-montserrat font-bold mt-[-3px] text-buttondark ">{ lengthchecker? extracted:loginState}</p>
      </div>
    </div>
  );
}

export default ProfileIcon;
