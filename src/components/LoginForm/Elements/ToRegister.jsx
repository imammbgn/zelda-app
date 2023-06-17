import { Link } from "react-router-dom";

const ToRegister = () => {
    return (
        <p className="text-sm text-zinc-800 mb-2">Dont Have An Account? <Link to="/register" className="text-blue-600">Register</Link></p>
    );
  };
  
  export default ToRegister;