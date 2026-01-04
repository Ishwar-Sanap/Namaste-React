export const checkvalidData = (email, password) => {

    /*
        Regex check the patten in email:
        - Starts with alphanumeric characters (including ., _, %, +, -)
        - Contains an "@" symbol
        - Followed by a domain name with alphanumeric characters and hyphens
        - Ends with a top-level domain of at least two alphabetic characters


        The regular expression below cheks that a password:
            - Has minimum 6 characters in length. Adjust it by modifying {6,}
            - At least one uppercase English letter. You can remove this condition by removing (?=.*?[A-Z])
            - At least one lowercase English letter.  You can remove this condition by removing (?=.*?[a-z])
            - At least one digit. You can remove this condition by removing (?=.*?[0-9])
            - At least one special character,  You can remove this condition by removing (?=.*?[#?!@$%^&*-])

    */
    const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isValidPassword =  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/.test(password);


    if(!isValidEmail) return "Invalid email address";
    if(!isValidPassword) return "Weak password, create strong password";

    return null;
};
