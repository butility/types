
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
type FormValue = string | string[] | boolean | null;

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

export { Serialize as default };
