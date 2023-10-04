import React, { useState } from 'react'
import { MultiSelect } from "react-multi-select-component";

const options = [
    { label: "Monday", value: "Monday" },
    { label: "Tuesday", value: "Tuesday" },
    { label: "Wednesday", value: "Wednesday" },
    { label: "Thursday", value: "Thursday" },
    { label: "Friday", value: "Friday" },
    { label: "Saturday", value: "Saturday" },
    { label: "Sunday", value: "Sunday" },
];

const Example = () => {
    const [selected, setSelected] = useState([]);

    return (
        <div style={{ color: "White" }}>
            <h1>Select Working Days</h1>
            <pre>{JSON.stringify(selected)}</pre>
            <div style={{ color: "Black" }}>
                <MultiSelect
                    options={options}
                    value={selected}
                    onChange={setSelected}
                    labelledBy="Select"
                />
            </div>
        </div>
    );
};

const Barberregister2 = () => {
    return (
        <>
            <Example />
        </>
    )
}

export default Barberregister2