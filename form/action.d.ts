
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

export { FormAction as default };
