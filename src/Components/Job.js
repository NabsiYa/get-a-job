import { useState } from "react";

function Job({ id, organization, profession, task, address, link }) {

    const [state, setState] = useState(false);

    const changeState = () => {
        setState(!state);
    }

    return (
        <tr style={ state ? {textDecoration: "line-through"} : {} }>
            <td><a style={{ textDecoration: 'none' }} href={link}>{id}</a></td>
            <td>{organization}</td>
            <td>{profession}</td>
            <td>{task}</td>
            <td>{address}</td>
            <td><input type="checkbox" onChange={changeState}/></td>
        </tr>
    );
}

export default Job;
