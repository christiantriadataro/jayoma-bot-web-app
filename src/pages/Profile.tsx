import Back from "../components/shared/Back.tsx";
import CustomInput from "../components/shared/CustomInput.tsx";
import CustomButton from "../components/shared/CustomButton.tsx";
import Navbar from "../components/navbar/Navbar.tsx";

const Profile = () => {
    return (
        <div className="relative flex flex-col px-[25px] w-full h-full items-center">
            <Back cn="absolute top-15 left-10"/>
            <h1 className="text-[24px] font-bold mt-5">Profile</h1>
            <div className="mt-50 gap-4 flex flex-col w-full">
                <CustomInput placeholder="Full Name"/>
                <CustomInput placeholder="Email"/>
                <CustomInput type="password" placeholder="Password"/>
            </div>
            <CustomButton text="Save Changes" variant="black" cn="mt-5"/>
            <Navbar/>
        </div>
    );
};

export default Profile;
