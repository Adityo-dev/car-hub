export interface CustomButtonPropsType {
    title: string;
    containerStyles?: string;
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
    btnType?: "button" | "submit";
    handleClick?: () => void;
}