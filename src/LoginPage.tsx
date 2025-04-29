import "./App.css";

function LoginPage() {
  return (
    <>
      <div className="container">
        <div className="box">
          <form>
            <h1>Login</h1>
            <div className="input-wrapper">
              <input type="text" className="input" placeholder="Email" />
            </div>
            <div className="input-wrapper">
              <input type="password" className="input" placeholder="Password" />
            </div>
            <div className="forgetPass">
              <a>Forget Password?</a>
            </div>
            <div className="btn-container">
              <button type="submit" className="btn">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
