import { useEffect, useState } from "react";
import FireBaseFireStoreService from "../service/fireBaseFireStoreService";
import TableGrid from "./table";

var Contribution = ({existingUser}) => {
    const [contribution, setContribution] = useState(null);

    useEffect( () => {
        FireBaseFireStoreService.getUserData(existingUser.uid).then((contributions) => {
             setContribution(contributions);
         }).catch ( (err) => {
             console.log(" unable to find contribution made - ", err);
         });
    }, [])

    return (
        <>
            <h1> Contribution Page </h1>
            <br/>
            { contribution && <TableGrid contributions = {contribution}></TableGrid>}
        </>
    )
}

export default Contribution;