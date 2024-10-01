export { Ripple as default };

/**
 * Defines the options available for configuring the ripple effect.
 */
export interface RippleOptions {
    /**
     * The color of the ripple effect. Accepts any valid CSS color value.
     * 
     * @default 'rgba(0, 0, 0, 0.3)'
     */
    rippleColor?: string;

    /**
     * The duration of the ripple effect animation, in milliseconds.
     * 
     * @default 600
     */
    rippleDuration?: number;

    /**
     * The CSS easing function for the ripple animation.
     * 
     * @default 'ease-out'
     */
    rippleEasing?: string;

    /**
     * If true, sets the overflow property of the element to 'hidden' to prevent ripple overflow.
     * 
     * @default true
     */
    overflowHidden?: boolean;

    /**
     * Optional custom radius for the ripple effect. If null, the ripple will auto-scale.
     * 
     * @default null
     */
    rippleRadius?: number | null;

    /**
     * Additional CSS class to be applied to the ripple element.
     */
    customClass?: string;

    /**
     * If true, applies damping to the ripple scale. Use this to slow down the ripple growth.
     * 
     * @default true
     */
    enableDamping?: boolean;

    /**
     * A factor that controls the damping effect. Smaller values make the ripple slower.
     * 
     * @default 0.8
     */
    dampingFactor?: number;
}

/**
 * Represents the core Ripple class that handles adding ripple effects to DOM elements.
 */
declare class Ripple {
    /**
     * Constructs a new Ripple instance for the given element.
     * 
     * @param element - The DOM element to which the ripple effect will be applied.
     * @param options - Optional configuration object to customize the ripple effect.
     * 
     * @example
     * ```js
     * const button = document.getElementById('myButton');
     * const ripple = new Ripple(button, { rippleColor: 'blue', rippleDuration: 800 });
     * ```
     */
    constructor(element: HTMLElement, options?: RippleOptions);

    /**
     * Updates the ripple options dynamically after initialization.
     * 
     * @param newOptions - A partial object containing new ripple options to merge with existing options.
     * 
     * @example
     * ```js
     * ripple.updateOptions({ rippleColor: 'green', rippleDuration: 400 });
     * ```
     */
    updateOptions(newOptions: Partial<RippleOptions>): void;

    /**
     * Removes the ripple event listeners and restores the element to its original state.
     * 
     * @example
     * ```js
     * ripple.destroy();
     * ```
     */
    destroy(): void;
}

/**
 * Applies a light-themed ripple effect to the specified element.
 * 
 * @param element - The DOM element to which the ripple effect will be applied.
 * 
 * @example
 * ```js
 * const button = document.getElementById('lightButton');
 * lightRipple(button);
 * ```
 */
export function lightRipple(element: HTMLElement): Ripple;

/**
 * Applies a dark-themed ripple effect to the specified element.
 * 
 * @param element - The DOM element to which the ripple effect will be applied.
 * 
 * @example
 * ```js
 * const button = document.getElementById('darkButton');
 * darkRipple(button);
 * ```
 */
export function darkRipple(element: HTMLElement): Ripple;

/**
 * Applies a fully customizable ripple effect to the specified element.
 * 
 * @param element - The DOM element to which the ripple effect will be applied.
 * @param options - The configuration object to customize the ripple effect.
 * 
 * @example
 * ```js
 * const button = document.getElementById('customButton');
 * customRipple(button, { rippleColor: 'purple', rippleDuration: 1000, enableDamping: false });
 * ```
 */
export function customRipple(element: HTMLElement, options: RippleOptions): Ripple;
