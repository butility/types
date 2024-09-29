
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

export { Generate as default };
