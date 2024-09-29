export { setStateBasedStyle as default };

type State = 'hover' | 'active' | 'focus' | 'click' | 'custom'; // Add more states as needed
type StateStyleConfig = {
    [key in State]: CSSStyleDeclaration | CustomEvent;
};

declare function setStateBasedStyle(element: HTMLElement, config: StateStyleConfig): void;
