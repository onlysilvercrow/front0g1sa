import React from "react";
import { faInfinity } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
function Infinity(){
    return(
        <div class="flex max-w-xs max-h-xs text-teal-500">
            <FontAwesomeIcon icon={faInfinity} />
        </div>
    )
}
export default Infinity