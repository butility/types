/**
 * Namespace for scroll-related utilities and animations.
 * Provides methods to handle smooth scrolling, element visibility checks, and animations like height, opacity, and sliding.
 */
declare namespace Scroll {
    export { animateHeight };
    export { animateOpacity };
    export { disableScroll };
    export { easeInOutQuad };
    export { enableScroll };
    export { fadeIn };
    export { fadeOut };
    export { getDocumentScrollLeft };
    export { getDocumentScrollTop };
    export { getFullHeight };
    export { getScrollPosition };
    export { getViewportScrollLeft };
    export { getViewportScrollTop };
    export { isElementVisible };
    export { scrollToBottom };
    export { scrollToElement };
    export { scrollToPosition };
    export { scrollToTop };
    export { slideDown };
    export { slideToggle };
    export { slideUp };
    export { smoothScrollToElement };
    export { smoothScrollToPosition };
    export { smoothScrollToTop };
    export { toggleClassOnScroll };
}

export default Scroll;

/**
 * Animates the height of an element over a specified duration.
 * 
 * @param element - The HTML element to animate.
 * @param startHeight - The starting height in pixels.
 * @param endHeight - The ending height in pixels.
 * @param duration - Duration of the animation in milliseconds.
 * @param callback - A function to call once the animation completes.
 */
export function animateHeight(
  element: HTMLElement, 
  startHeight: number, 
  endHeight: number, 
  duration: number, 
  callback: Function
): void;

/**
 * Animates the opacity of an element over a specified duration.
 * 
 * @param element - The HTML element to animate.
 * @param startOpacity - The initial opacity value (0 to 1).
 * @param endOpacity - The final opacity value (0 to 1).
 * @param duration - Duration of the animation in milliseconds.
 * @param callback - A function to call once the animation completes.
 */
export function animateOpacity(
  element: HTMLElement, 
  startOpacity: number, 
  endOpacity: number, 
  duration: number, 
  callback: Function
): void;

/**
 * Disables scrolling on the document.
 */
export function disableScroll(): void;

/**
 * Easing function for smooth animations, representing ease-in-out quadratic.
 * 
 * @param t - Current time (or position) in the animation.
 * @param b - Start value.
 * @param c - Change in value.
 * @param d - Duration of animation.
 * @returns The computed value at the current time `t`.
 */
export function easeInOutQuad(t: number, b: number, c: number, d: number): number;

/**
 * Enables scrolling on the document after it has been disabled.
 */
export function enableScroll(): void;

/**
 * Fades in an element over a specified duration.
 * 
 * @param element - The HTML element to fade in.
 * @param duration - Duration of the fade in milliseconds.
 * @param callback - A function to call once the fade completes.
 */
export function fadeIn(element: HTMLElement, duration: number, callback: Function): void;

/**
 * Fades out an element over a specified duration.
 * 
 * @param element - The HTML element to fade out.
 * @param duration - Duration of the fade in milliseconds.
 * @param callback - A function to call once the fade completes.
 */
export function fadeOut(element: HTMLElement, duration: number, callback: Function): void;

/**
 * Gets the horizontal scroll position of the document.
 * 
 * @returns The scroll position from the left of the document.
 */
export function getDocumentScrollLeft(): number;

/**
 * Gets the vertical scroll position of the document.
 * 
 * @returns The scroll position from the top of the document.
 */
export function getDocumentScrollTop(): number;

/**
 * Gets the full height of an element, including content that is not visible due to overflow.
 * 
 * @param element - The HTML element to measure.
 * @returns The full height of the element in pixels.
 */
export function getFullHeight(element: HTMLElement): number;

/**
 * Gets the current scroll position of an element.
 * 
 * @param element - The HTML element to check.
 * @returns The scroll position from the top of the element.
 */
export function getScrollPosition(element: HTMLElement): number;

/**
 * Gets the horizontal scroll position of the viewport.
 * 
 * @returns The scroll position from the left of the viewport.
 */
export function getViewportScrollLeft(): number;

/**
 * Gets the vertical scroll position of the viewport.
 * 
 * @returns The scroll position from the top of the viewport.
 */
export function getViewportScrollTop(): number;

/**
 * Checks if an element is currently visible in the viewport.
 * 
 * @param element - The HTML element to check.
 * @returns `true` if the element is visible, otherwise `false`.
 */
export function isElementVisible(element: HTMLElement): boolean;

/**
 * Scrolls the document to the bottom over a specified duration.
 * 
 * @param duration - Duration of the scroll animation in milliseconds.
 */
export function scrollToBottom(duration: number): void;

/**
 * Scrolls the document to the specified element.
 * 
 * @param element - The HTML element to scroll to.
 */
export function scrollToElement(element: HTMLElement): void;

/**
 * Scrolls an element to a specific position.
 * 
 * @param element - The HTML element to scroll.
 * @param position - The vertical position to scroll to (in pixels).
 */
export function scrollToPosition(element: HTMLElement, position: number): void;

/**
 * Scrolls the document to the top over a specified duration.
 * 
 * @param duration - Duration of the scroll animation in milliseconds.
 */
export function scrollToTop(duration: number): void;

/**
 * Slides down an element over a specified duration, showing hidden content.
 * 
 * @param element - The HTML element to slide down.
 * @param duration - Duration of the slide animation in milliseconds.
 * @param callback - A function to call once the slide completes.
 */
export function slideDown(element: HTMLElement, duration: number, callback: Function): void;

/**
 * Toggles the sliding of an element between up and down.
 * 
 * @param element - The HTML element to toggle.
 * @param duration - Duration of the slide animation in milliseconds.
 * @param callback - A function to call once the toggle completes.
 */
export function slideToggle(element: HTMLElement, duration: number, callback: Function): void;

/**
 * Slides up an element over a specified duration, hiding the content.
 * 
 * @param element - The HTML element to slide up.
 * @param duration - Duration of the slide animation in milliseconds.
 * @param callback - A function to call once the slide completes.
 */
export function slideUp(element: HTMLElement, duration: number, callback: Function): void;

/**
 * Smoothly scrolls the document to a specified element over a given duration.
 * 
 * @param element - The HTML element to scroll to.
 * @param duration - Duration of the scroll animation in milliseconds.
 */
export function smoothScrollToElement(element: HTMLElement, duration: number): void;

/**
 * Smoothly scrolls the document to a specific position over a given duration.
 * 
 * @param targetPosition - The target vertical position to scroll to (in pixels).
 * @param duration - Duration of the scroll animation in milliseconds.
 */
export function smoothScrollToPosition(targetPosition: number, duration: number): void;

/**
 * Smoothly scrolls the document to the top over a given duration.
 * 
 * @param duration - Duration of the scroll animation in milliseconds.
 */
export function smoothScrollToTop(duration: number): void;

/**
 * Toggles a class on an element when the page is scrolled to a specified offset.
 * 
 * @param element - The HTML element to toggle the class on.
 * @param className - The class to toggle.
 * @param offset - The vertical scroll offset at which the class should be toggled.
 */
export function toggleClassOnScroll(element: HTMLElement, className: string, offset: number): void;
