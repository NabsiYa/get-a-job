import { useState } from "react";

function Job({ id, organization, title, work, link }) {

    const [state, setState] = useState(false);

    const changeState = () => {
        setState(!state);
    }

    return (
        <div>
            <ul key={id} style={ state ? {textDecoration: "line-through"} : {} }>
                <li>Organisaatio - {organization}</li>
                <li>Ala - {title}</li>
                <li>Työtehtävä - {work}</li>
                <li><a style={{ textDecoration: 'none' }} href={link}>Linkki</a></li>
                <li><input type="checkbox" onChange={changeState}/> Muista</li>
            </ul>
        </div>
    );
}

export default Job;