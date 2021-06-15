import React from "react";

const countries = ["Ukraine", "Russia", "Germany", "France"];

const Countries = React.forwardRef((props, ref) => (
  <select {...props}>
    <option value="" />
    {countries.map((item, i) => (
      <option value={item} key={i}>
        {item}
      </option>
    ))}
  </select>
));

export default Countries;
