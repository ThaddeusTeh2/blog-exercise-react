import { Link } from "react-router-dom";

function AccountQuery() {
  return (
    <div className="mt-4 d-flex justify-content-center gap-3">
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
}

export default AccountQuery;
