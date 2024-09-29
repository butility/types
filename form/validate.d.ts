/**
 * Namespace for validation utilities.
 * 
 * This namespace provides functions for validating emails, phone numbers, forms,
 * JWTs, password strength, and patterns, as well as defining validation rules.
 * 
 * @namespace Validate
 */
declare namespace Validate {
    export { isValidEmail as email };
    export { isValidPhone as phone };
    export { validateForm as form };
    export { validateFormData as formData };
    export { validateJWT as JWT };
    export { validatePasswordStrength as passwordStrength };
    export { validatePattern as pattern };
}

/**
 * Result of password validation.
 * 
 * @interface PasswordValidationResult
 */
interface PasswordValidationResult { 
    /**
     * A message describing the validation result.
     * This message provides details about why the password passed or failed validation.
     */
    msg: string;

    /**
     * The strength score of the password, if applicable.
     * This can be a numerical value representing how strong the password is, or null if not calculated.
     */
    strength: number | null;

    /**
     * Indicates if the password is considered strong.
     * A boolean flag indicating whether the password meets the criteria for strength.
     */
    isStrong: boolean;
}

/**
 * Result of JWT validation.
 * 
 * @interface JWTValidationResult
 */
interface JWTValidationResult { 
    /**
     * Indicates if the validation was successful.
     * A boolean that is true if the JWT was valid, and false otherwise.
     */
    success: boolean;

    /**
     * The payload extracted from the JWT, if valid.
     * This is the decoded payload of the JWT if validation succeeds; otherwise, it's null.
     */
    payload: string | null;

    /**
     * A message describing the validation result.
     * Provides additional information about the JWT validation process, such as success or failure reasons.
     */
    msg: string;
}

/**
 * Result of pattern validation.
 * 
 * @interface PatternValidationResult
 */
interface PatternValidationResult {
    /**
     * Indicates if the value matches the pattern.
     * A boolean indicating whether the input value conforms to the given pattern.
     */
    isValid: boolean;

    /**
     * An optional message describing the validation result.
     * This message may contain feedback on why the validation passed or failed.
     */
    msg?: string;

    /**
     * The value that matched the pattern, if applicable.
     * If the validation succeeded, this field contains the value that was validated.
     */
    matchedValue?: string;

    /**
     * The input value that was validated.
     * The original input value that was checked against the pattern.
     */
    input?: string;

    /**
     * The pattern used for validation.
     * A string representation of the regex pattern that was applied during validation.
     */
    pattern?: string;
}

/**
 * Options for pattern validation.
 * 
 * @interface ValidatePatternOptions
 */
interface ValidatePatternOptions { 
    /**
     * Whether to trim whitespace from the input value before validation.
     * If true, leading and trailing whitespace will be removed before validation.
     */
    trimWhitespace?: boolean; 

    /**
     * Whether the validation should be case-sensitive.
     * If true, the pattern matching will distinguish between uppercase and lowercase characters.
     */
    caseSensitive?: boolean; 

    /**
     * Whether to allow empty strings as valid.
     * If true, empty strings will be considered valid inputs during validation.
     */
    allowEmptyString?: boolean; 
}

/**
 * Represents a set of validation rules for a field.
 * 
 * @interface ValidationRule
 */
interface ValidationRule {
    /**
     * Indicates if the field is required.
     * A boolean specifying whether the field must have a value to pass validation.
     */
    required?: boolean;

    /**
     * The regex pattern to validate the field against.
     * A regular expression that the field's value must match to be considered valid.
     */
    pattern?: RegExp;

    /**
     * Minimum length of the field value.
     * Specifies the minimum number of characters the field must contain.
     */
    minLength?: number;

    /**
     * Maximum length of the field value.
     * Specifies the maximum number of characters the field is allowed to contain.
     */
    maxLength?: number;

    /**
     * A custom validation function.
     * A user-defined function that receives the field value and returns a boolean indicating validity.
     */
    customValidator?: (value: string) => boolean;

    /**
     * An optional custom error message.
     * If provided, this message will be shown when the field validation fails.
     */
    errorMessage?: string;
}

/**
 * Result of field validation.
 * 
 * @interface FieldValidationResult
 */
interface FieldValidationResult {
    /**
     * The name of the field that was validated.
     * Specifies the field that was checked during the validation process.
     */
    field: string;

    /**
     * The validation error message, if applicable.
     * A message describing the reason for validation failure, if the field did not pass validation.
     */
    message: string;
}

/**
 * Result of form validation.
 * 
 * @interface FormValidationResult
 */
interface FormValidationResult {
    /**
     * Indicates if the form is valid.
     * A boolean that is true if all fields in the form passed validation.
     */
    valid: boolean;
    
    /**
     * List of validation errors, if any.
     * An array of field validation results containing errors for fields that did not pass validation.
     */
    errors: FieldValidationResult[];
}

/**
 * Validates if the given email address is in a valid format.
 * 
 * @param email - The email address to validate.
 * @returns `true` if the email is valid, `false` otherwise.
 */
export function isValidEmail(email: string): boolean;

/**
 * Validates if the given phone number is in a valid format.
 * 
 * @param phoneNumber - The phone number to validate.
 * @returns `true` if the phone number is valid, `false` otherwise.
 */
export function isValidPhone(phoneNumber: string): boolean;

/**
 * Validates a form against defined validation rules.
 * 
 * @param form - The form element to validate.
 * @param validationRules - An object containing validation rules for each field.
 * @param options - Optional settings for validation behavior.
 * @returns An object representing the validation result.
 */
export function validateForm(form: HTMLFormElement, validationRules: { [fieldName: string]: ValidationRule }, options?: { stopOnFirstError?: boolean }): FormValidationResult;

/**
 * Validates the form data, returning a boolean indicating validity.
 * 
 * @param formElement - The form element to validate.
 * @returns `true` if the form data is valid, `false` otherwise.
 */
export function validateFormData(formElement: HTMLFormElement): boolean;

/**
 * Validates a JSON Web Token (JWT) against a secret key.
 * 
 * @param userToken - The JWT to validate.
 * @param secretKey - The secret key used for validation.
 * @returns An object representing the result of the validation.
 */
export function validateJWT(userToken: string, secretKey: string): JWTValidationResult;

/**
 * Validates the strength of a password.
 * 
 * @param password - The password to validate.
 * @returns An object containing the result of the password strength validation.
 */
export function validatePasswordStrength(password: string): PasswordValidationResult;

/**
 * Validates a field's value against a specified pattern.
 * 
 * @param fieldValue - The value to validate.
 * @param pattern - The regex pattern to validate against.
 * @param options - Optional settings for pattern validation.
 * @returns An object representing the result of the pattern validation.
 */
export function validatePattern(fieldValue: string, pattern: RegExp, options?: ValidatePatternOptions): PatternValidationResult;

export { Validate as default };
