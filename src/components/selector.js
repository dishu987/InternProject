import { useState } from "react";
import { components } from "react-select";
import AsyncSelect from "react-select/async";
import { colors } from "./data";

const CustomSelect = (props) => {
  const loadOptions = (input, callback) => {
    const query = input?.toLowerCase();
    const apiGetOptions = () =>
      Promise.resolve(colors.filter((c) => c.value.includes(query)));

    apiGetOptions(query).then((results) => {
      console.log(`${results.length} results returned for input '${query}'`);
      callback(results);
    });
  };

  return (
    <>
      <AsyncSelect
        isMulti
        loadOptions={loadOptions}
        styles={{
          multiValue: (styles) => ({
            ...styles,
            backgroundColor: "#ff7675",
            color: "#2d3436",
          }),
          option: (base) => ({
            ...base,
            color: "#d63031",
          }),
        }}
      />
    </>
  );
};

export default CustomSelect;
