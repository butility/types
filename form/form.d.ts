
declare namespace Form {
    export { scrollToError };
    export { showErrorMessage };
    export { hideErrorMessage };
    export { enableForm };
    export { enableInput };
    export { disableForm };
    export { disableInput };
    export { toggleInputValidity };
    export { generatePassword };
    export { generateRandomDate };
    export { generateRandomString };
    export { generateUUID };
    export { serializeFormData };
    export { serializeUrlEncoded };
    export { deserializeFormData };
    export { deserializeUrlEncoded };
    export { isValidEmail };
    export { isValidPhone };
    export { validateForm };
    export { validateFormData };
    export { validateJWT };
    export { validatePasswordStrength };
    export { validatePattern };
}

/**
 * Namespace for form-related actions and utilities.
 * 
 * This namespace contains functions for enabling and disabling forms and inputs,
 * as well as managing error messages and input validity.
 * 
 * @namespace FormAction
 */
declare namespace FormAction {
    export { scrollToError };
    export { showErrorMessage };
    export { hideErrorMessage };
    export { enableForm };
    export { enableInput };
    export { disableForm };
    export { disableInput };
    export { toggleInputValidity };
}

/**
 * Namespace for generating various types of data, such as passwords, dates, strings, and UUIDs.
 * 
 * This namespace provides functions for generating secure passwords, random dates,
 * random strings, and universally unique identifiers (UUIDs).
 * 
 * @namespace Generate
 */
declare namespace Generate {
    export { generatePassword as password };
    export { generateRandomDate as date };
    export { generateRandomString as string };
    export { generateUUID as UUID };
}

/**
 * Namespace for serializing and deserializing form data and URL-encoded data.
 * 
 * This namespace provides functions to convert form data to serialized formats and
 * to deserialize serialized data back into usable objects.
 * 
 * @namespace Serialize
 */
declare namespace Serialize {
    export { serializeFormData };
    export { serializeUrlEncoded };
    export { deserializeFormData };
    export { deserializeUrlEncoded };
}

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
 * Options for displaying error messages.
 * 
 * @interface ErrorMessageOptions
 */
interface ErrorMessageOptions {
    /**
     * Whether to scroll to the error element.
     * When set to true, the page will automatically scroll to the location of the error.
     */
    scrollToError?: boolean;

    /**
     * Whether to focus on the error element.
     * When true, the focus will be moved to the input field with the error.
     */
    focusOnError?: boolean;

    /**
     * CSS class to apply to the error element.
     * This allows custom styling of error messages.
     */
    errorClass?: string;
}

/**
 * Options for enabling or disabling forms and inputs.
 * 
 * @interface FormToggleOptions
 */
interface FormToggleOptions {
    /**
     * Callback to execute after toggling.
     * This function is called once the form or input toggle action is complete.
     */
    callback?: () => void;

    /**
     * Fields to exclude from toggling.
     * An array of field names that should not be disabled or enabled during the toggle process.
     */
    excludeFields?: string[];
}

/**
 * Options for toggling input validity.
 * 
 * @interface ToggleInputValidityOptions
 */
interface ToggleInputValidityOptions {
    /**
     * Message to show when input is invalid.
     * This message will be displayed to the user when the input fails validation.
     */
    invalidMessage?: string;

    /**
     * Message to show when input is valid.
     * This message will be displayed when the input meets validation criteria.
     */
    validMessage?: string;
}
/**
 * Options for generating a password.
 * 
 * @interface GeneratePasswordOptions
 */
interface GeneratePasswordOptions {
    /**
     * Custom character sets to use.
     * An array of custom-defined character sets to include in the password generation.
     */
    customCharsets?: string[];

    /**
     * Whether to include symbols in the password.
     * If true, the password will include special characters like `!@#$%^&*`.
     */
    includeSymbols?: boolean;

    /**
     * Whether to include numbers in the password.
     * If true, the password will contain numeric characters (0-9).
     */
    includeNumbers?: boolean;

    /**
     * Whether to include uppercase letters.
     * If true, the password will include uppercase alphabetic characters (A-Z).
     */
    includeUppercase?: boolean;

    /**
     * Whether to include lowercase letters.
     * If true, the password will include lowercase alphabetic characters (a-z).
     */
    includeLowercase?: boolean;

    /**
     * Whether to avoid repeating characters.
     * When set to true, no characters in the password will repeat.
     */
    avoidRepeats?: boolean;

    /**
     * Whether to use a cryptographically secure random generator.
     * If true, the password will be generated using a secure random generator for added security.
     */
    useCryptoRandom?: boolean;

    /**
     * Minimum entropy level for the generated password.
     * Specifies the minimum level of randomness (entropy) required for the password.
     */
    minEntropy?: number;

    /**
     * Characters to exclude from the password.
     * An array of characters that should not be included in the generated password.
     */
    exclude?: string[];

    /**
     * Callback function triggered on character selection.
     * A function that is called each time a character is selected during password generation.
     */
    onCharacterSelected?: Function;
}

/**
 * Options for generating a random date.
 * 
 * @interface GenerateRandomDateOptions
 */
interface GenerateRandomDateOptions {
    /**
     * Whether to include time in the generated date.
     * If true, the generated date will also include the time component (hours, minutes, seconds).
     */
    includeTime?: boolean;

    /**
     * Format of the generated date.
     * Determines the format in which the date will be output, with options being:
     * - 'ISO' (e.g., `2023-08-15T15:23:30Z`)
     * - 'UTC' (Coordinated Universal Time format)
     * - 'Locale' (Date formatted according to the user's locale settings).
     */
    format?: 'ISO' | 'UTC' | 'Locale';
}

/**
 * Options for generating a random string.
 * 
 * @interface GenerateRandomStringOptions
 */
interface GenerateRandomStringOptions {
    /**
     * The length of the random string.
     * Specifies how many characters the generated string should contain.
     */
    length: number;

    /**
     * The character set to use for generating the string.
     * If provided, the random string will be generated using this specific character set.
     */
    charset?: string;

    /**
     * Whether to include symbols in the string.
     * If true, the random string will include special characters like `!@#$%^&*`.
     */
    includeSymbols?: boolean;

    /**
     * Whether to include uppercase letters.
     * If true, the string will contain uppercase alphabetic characters (A-Z).
     */
    includeUppercase?: boolean;

    /**
     * Whether to include lowercase letters.
     * If true, the string will contain lowercase alphabetic characters (a-z).
     */
    includeLowercase?: boolean;

    /**
     * Whether to include numbers in the string.
     * If true, the random string will contain numeric characters (0-9).
     */
    includeNumbers?: boolean;
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
 * Options for serialization and deserialization.
 * 
 * @type SerializeOptions
 * @property {'urlencoded' | 'json'} [format] - The format to use for serialization.
 */
type SerializeOptions = { format?: 'urlencoded' | 'json' };

/**
 * Represents possible values for form fields.
 * 
 * @type FormValue
 * @property {string} | {string[]} | {boolean} | {null} - The possible types for form values.
 */
type FormValue = string | string[] | boolean | null

/**
 * Scrolls the page to the first error in the form.
 * 
 * @param formElement - The form element to scroll to.
 * @param errorClass - Optional class name to identify error elements.
 */
export function scrollToError(formElement: HTMLFormElement, errorClass?: string): void;

/**
 * Displays an error message on a specified element.
 * 
 * @param element - The element to display the error message on.
 * @param message - The error message to display.
 * @param options - Options for displaying the error message.
 */
export function showErrorMessage(element: HTMLElement, message: string, options?: ErrorMessageOptions): void;

/**
 * Hides the error message from a specified element.
 * 
 * @param element - The element to hide the error message from.
 * @param errorClass - Optional class name to identify the error message.
 */
export function hideErrorMessage(element: HTMLElement, errorClass?: string): void;

/**
 * Enables the specified form element.
 * 
 * @param formElement - The form element to enable.
 * @param options - Options for enabling the form.
 */
export function enableForm(formElement: HTMLFormElement, options?: FormToggleOptions): void;

/**
 * Enables the specified input element and executes a callback on enabling.
 * 
 * @param inputElement - The input element to enable.
 * @param onEnable - Callback to execute once the input is enabled.
 */
export function enableInput(inputElement: HTMLInputElement, onEnable: () => void): void;

/**
 * Disables the specified form element.
 * 
 * @param formElement - The form element to disable.
 * @param options - Options for disabling the form.
 */
export function disableForm(formElement: HTMLFormElement, options?: FormToggleOptions): void;

/**
 * Disables the specified input element and executes a callback on disabling.
 * 
 * @param inputElement - The input element to disable.
 * @param onDisable - Callback to execute once the input is disabled.
 */
export function disableInput(inputElement: HTMLInputElement, onDisable: () => void): void;

/**
 * Toggles the validity state of an input element.
 * 
 * @param inputElement - The input element to toggle validity for.
 * @param isValid - Boolean indicating the validity state.
 * @param options - Options for the toggle validity action.
 */
export function toggleInputValidity(inputElement: HTMLInputElement, isValid: boolean, options?: ToggleInputValidityOptions): void;


/**
 * Generates a secure password based on specified criteria.
 * 
 * @param length - The desired length of the password.
 * @param options - Options for generating the password.
 * @returns The generated password as a string.
 */
export function generatePassword(length: number, options?: GeneratePasswordOptions): string;

/**
 * Generates a random date between two specified dates.
 * 
 * @param start - The start date.
 * @param end - The end date.
 * @param options - Options for generating the random date.
 * @returns The generated random date.
 */
export function generateRandomDate(start: Date, end: Date, options?: GenerateRandomDateOptions): Date;

/**
 * Generates a random string based on specified criteria.
 * 
 * @param options - Options for generating the random string.
 * @returns The generated random string.
 */
export function generateRandomString(options: GenerateRandomStringOptions): string;

/**
 * Generates a universally unique identifier (UUID).
 * 
 * @returns The generated UUID as a string.
 */
export function generateUUID(): string;


/**
 * Serializes the form data into a specified format.
 * 
 * @param formElement - The form element to serialize.
 * @param options - Options for serialization, including the format.
 * @returns The serialized form data as a string or an array of strings.
 */
export function serializeFormData(formElement: HTMLFormElement, options: SerializeOptions): string | string[];

/**
 * Serializes an object into a URL-encoded string.
 * 
 * @param formData - The data to serialize, represented as an object.
 * @returns The serialized URL-encoded string.
 */
export function serializeUrlEncoded(formData: Record<string, FormValue>): string;

/**
 * Deserializes URL-encoded data into an object.
 * 
 * @param data - The URL-encoded string to deserialize.
 * @returns The deserialized data as an object.
 */
export function deserializeUrlEncoded(data: string): Record<string, FormValue>;

/**
 * Deserializes form data from a form element.
 * 
 * @param formElement - The form element from which to deserialize data.
 * @param data - The serialized data to deserialize.
 * @param options - Options for deserialization.
 */
export function deserializeFormData(formElement: HTMLFormElement, data: string, options: SerializeOptions): void;


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

export { FormAction, Generate, Serialize, Validate, Form as default };
