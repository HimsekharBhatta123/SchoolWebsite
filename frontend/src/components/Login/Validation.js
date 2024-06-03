function Validation(values) {
    let errors = {};
  
    // Email pattern regex
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // This pattern checks for:
    // ^ (start of string)
    // [^\s@]+ (one or more characters that are not whitespace or @)
    // @ (literal @ symbol)
    // [^\s@]+ (one or more characters that are not whitespace or @)
    // \. (literal dot character)
    // [^\s@]+ (one or more characters that are not whitespace or @)
    // $ (end of string)
  
    // Password pattern regex
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
    // This pattern checks for:
    // ^ (start of string)
    // (?=.*\d) (positive lookahead to ensure at least one digit)
    // (?=.*[a-z]) (positive lookahead to ensure at least one lowercase letter)
    // (?=.*[A-Z]) (positive lookahead to ensure at least one uppercase letter)
    // [a-zA-Z0-9]{8,} (at least 8 characters from the set of alphanumeric characters)
    // $ (end of string)
  
    if (values.email === "") {
      errors.email = "Email should not be empty";
    } else if (!email_pattern.test(values.email)) {
      errors.email = "Invalid email format";
    } else {
      errors.email = "";
    }
  
    if (values.password === "") {
      errors.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
      errors.password = "Password must be at least 8 characters long, contain at least one digit, one lowercase letter, and one uppercase letter";
    } else {
      errors.password = "";
    }
  
    return errors;
  }
  
  export default Validation;