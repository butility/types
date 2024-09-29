
declare namespace Color {
    export { calculateLuminance }
    export { colorBrightness }
    export { colorContrast }
    export { darkenColor }
    export { generateColorGradient }
    export { generateRandomColor }
    export { hexToRgb }
    export { hueToRgb }
    export { invertColor }
    export { lightenColor }
    export { mixColors }
    export { rgbToHex }
    export { rgbToHsl }
    export { hexToRgba }
    export { hslToRgb }
    export { rgbaToHex }
}

export function calculateLuminance(color: string): number;
export function colorBrightness(color: string): number;
export function colorContrast(color1: string, color2: string): number;
export function darkenColor(color: string, percentage: number): string;
export function generateColorGradient(startColor: string, endColor: string, steps: number): string[];
export function generateRandomColor(): string;
export function hexToRgb(hex: string): {
    r: number;
    g: number;
    b: number;
};
export function hexToRgba(hex: string, a: number): string | null;
export function hslToRgb(hue: number, saturation: number, lightness: number): {
    r: number;
    g: number;
    b: number;
};
export function hueToRgb(p: number, q: number, t: number): number;
export function invertColor(color: string): string;
export function lightenColor(color: string, percentage: number): string;
export function mixColors(color1: string, color2: string, weight: number): string;
export function rgbToHex(r: number, g: number, b: number): string;
export function rgbToHsl(red: number, green: number, blue: number): {
    h: number;
    s: number;
    l: number;
};
export function rgbaToHex(r: number, g: number, b: number, a: number): string;
export { Color as default };
