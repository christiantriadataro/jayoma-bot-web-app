import Back from "../components/single-components/Back.tsx";
import CustomInput from "../components/single-components/CustomInput.tsx";
import CustomButton from "../components/single-components/CustomButton.tsx";
import Navbar from "../components/single-components/Navbar.tsx";
const Profile = () => {

    
    
    return (
        <div className="relative flex flex-col px-[25px] w-full h-full items-center">
            <Back cn="absolute top-15 left-10" />
            
            <h1 className="text-[24px] font-bold mt-5">Profile</h1>
            
            <div className="mt-50 gap-4 flex flex-col w-full">
                <CustomInput placeholder="Full Name" />
                <CustomInput placeholder="Email" />
                <CustomInput type="password" placeholder="Password" />
            </div>
            <CustomButton text="Save Changes" variant="black" cn="mt-5" />
            <Navbar />
        </div>
    );
};

export default Profile;
