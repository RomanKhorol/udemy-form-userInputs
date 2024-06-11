import Input from "./Input";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation";
import { useInput } from "../hooks/useInput";

export default function Login() {
  const {
    value: emailValue,
    hadleChange: handleEmailChange,
    handleBlur: handleEmailBlur,
    hasError: emailError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    hadleChange: hanldePasswordChange,
    handleBlur: handlePasswordBlur,
    hasError: passwordError,
  } = useInput("", (value) => hasMinLength(value, 6) && isNotEmpty(value));

  function handleSubmit(event) {
    event.preventDefault();
    if (emailError || passwordError) {
      return;
    }
    console.log(emailValue, passwordValue);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
          error={emailError && "Please enter a valid email!"}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={handlePasswordBlur}
          onChange={hanldePasswordChange}
          value={passwordValue}
          error={passwordError && "Please enter a valid password!"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
