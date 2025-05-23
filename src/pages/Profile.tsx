import Back from "../components/shared/Back.tsx";
import CustomInput from "../components/shared/CustomInput.tsx";
import CustomButton from "../components/shared/CustomButton.tsx";
import Navbar from "../components/navbar/Navbar.tsx";
import Logout from "../components/shared/Logout.tsx";
import UserProfile from "../assets/images/user-profile.png"

const Profile = () => {
    return (
        <div className="relative flex flex-col px-[25px] w-full h-full items-center">
            <Back cn="absolute top-15 left-10"/>
            <Logout cn="absolute top-15 right-10" />
            <h1 className="text-[22px] text-['Poppins'] font-medium mt-[63px]">Profile</h1>
            <div className="flex flex-col items-center mt-[44px]">
                <img src={UserProfile} alt="" className="h-[112px] w-[105px]"/>
                <div className="font-semibold text-[27px] mt-3 leading-5">Chan User</div>
                <p className="h-fit font-medium text-[14px] text-[#323142]">chanuser+user@gmail.com</p>
            </div>
            <div className="mt-[35px] gap-4 flex flex-col w-full">
                <CustomInput value="Chan User" placeholder="Full Name"/>
                <CustomInput value="chanuser+user@gmail.com" placeholder="Email"/>
                <CustomInput value="************" type="password" placeholder="Password"/>
            </div>
            <CustomButton text="Save Changes" variant="black" cn="mt-5"/>
            <Navbar/>
        </div>
    );
};

export default Profile;
