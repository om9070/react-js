import React from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';

// const User = ({ match }) => {
//     return (
//         <>
//             <h1>this is user page {match.params.name}</h1>
//         </>
//     )
// }

const User = () => {
    const { fname, lname } = useParams();
    const location = useLocation();
    // console.log(location);
    const history = useHistory();
    console.log(history);
    return (
        <>
            <h1>this is user page {fname}{lname}</h1>
            <p>my corrent location{location.pathname}</p>
            {
                location.pathname === `/user/op` ? <button onClick={() => history.push("/")}>click me</button> : null
            }
        </>
    )
}
export default User;