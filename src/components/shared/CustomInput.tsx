import {ComponentProps} from "react";

type TCustomInput = ComponentProps<'input'> & {}

const CustomInput = ({...props}: TCustomInput) => {
    return (
        <input type="text"
               className="px-[21px] active:text-[#ACADB9]  w-full border border-[#C2C3CB] outline-[#ACADB9] active:border-[#ACADB9] text-[#C2C3CB] h-[65px] rounded-lg" {...props} />
    )
}

export default CustomInput