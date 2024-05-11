import Select from "react-select";
import "./CustomSelect.scss";
import { SelectProps, sortOption } from "../../../types/other";

export default function CustomSelect({ options }: SelectProps) {
  console.log();

  const colourStyles = {
    // control: styles => ({ ...styles, backgroundColor: 'white' }),
    option: (styles: any, { data, isDisabled, isFocused, isSelected }: any) => {
      return {
        ...styles,
        backgroundColor: isSelected ? "rgba(255, 231, 135, 1)" : "#fff",
        color: "#000",
        cursor: isDisabled ? "not-allowed" : "default",
      };
    },
  };

  return (
    <div className="custom_select">
      <Select
        options={options}
        defaultMenuIsOpen={false}
        classNamePrefix="react_select"
        className="react_select"
        styles={colourStyles}
      />
    </div>
  );
}
