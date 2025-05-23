import {ComponentProps} from "react";

type TCustomButton = ComponentProps<'button'> & {
    text: string;
    variant: "black" | "white";
    cn: string;
}

const CustomButton = ({text, variant, cn, ...props}: TCustomButton) => {
    const black_variant = `bg-[#141718] text-[#F3F5F6]`;
    const white_variant = `bg-[#E3E3E3] text-[#B1B1B1]`;
    return (
        <button
            className={`cursor-pointer h-[63px] w-full rounded-lg font-semibold shadow ${variant === "black" ? black_variant : white_variant} ${cn}`} {...props}>{text}</button>

    )
}

export default CustomButton