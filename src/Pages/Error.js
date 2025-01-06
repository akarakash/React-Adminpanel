import React from "react";
import { BiSolidError } from "react-icons/bi";
import { Link } from "react-router-dom";
function Error() {
  return (
    <div className="d-flex justify-content-center flex-column text-center">
      <div>
      <h3>Error</h3>
      <h1>
        <BiSolidError /> 
      </h1>
      <h5 className="text-danger">Looking for something?</h5>
      <h5>We're sorry. The Web address you entered is not a functioning page on our site.</h5>
      <h5>Go to the <Link to={'/'}> Home</Link>page</h5>
      </div>
    </div>
  );
}

export default Error; 
