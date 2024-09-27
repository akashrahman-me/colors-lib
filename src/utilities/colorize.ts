/* eslint-disable prefer-const */

export function rgbToHls(r: number, g: number, b: number): [number, number, number] {
   const max = Math.max(r, g, b);
   const min = Math.min(r, g, b);
   let h = 0,
      s = 0,
      // eslint-disable-next-line prefer-const
      l = (max + min) / 2;

   if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
         case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
         case g:
            h = (b - r) / d + 2;
            break;
         case b:
            h = (r - g) / d + 4;
            break;
      }
      h /= 6;
   }

   return [h, l, s];
}

// Convert RGB to HSL
export function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
   r /= 255;
   g /= 255;
   b /= 255;

   const max = Math.max(r, g, b);
   const min = Math.min(r, g, b);
   let h = 0,
      s = 0,
      l = (max + min) / 2;

   if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
         case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
         case g:
            h = (b - r) / d + 2;
            break;
         case b:
            h = (r - g) / d + 4;
            break;
      }

      h *= 60;
   }

   return [Math.round(h), Math.round(s * 100), Math.round(l * 100)];
}

// Convert HSL to RGB
export function hslToRgb(h: number, s: number, l: number): [number, number, number] {
   s /= 100;
   l /= 100;

   const c = (1 - Math.abs(2 * l - 1)) * s;
   const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
   const m = l - c / 2;
   let r = 0,
      g = 0,
      b = 0;

   if (h >= 0 && h < 60) {
      r = c;
      g = x;
      b = 0;
   } else if (h >= 60 && h < 120) {
      r = x;
      g = c;
      b = 0;
   } else if (h >= 120 && h < 180) {
      r = 0;
      g = c;
      b = x;
   } else if (h >= 180 && h < 240) {
      r = 0;
      g = x;
      b = c;
   } else if (h >= 240 && h < 300) {
      r = x;
      g = 0;
      b = c;
   } else if (h >= 300 && h < 360) {
      r = c;
      g = 0;
      b = x;
   }

   r = Math.round((r + m) * 255);
   g = Math.round((g + m) * 255);
   b = Math.round((b + m) * 255);

   return [r, g, b];
}

export function hlsToRgb(h: number, l: number, s: number): [number, number, number] {
   let r: number, g: number, b: number;

   if (s === 0) {
      r = g = b = l; // achromatic
   } else {
      const hueToRgb = (p: number, q: number, t: number) => {
         if (t < 0) t += 1;
         if (t > 1) t -= 1;
         if (t < 1 / 6) return p + (q - p) * 6 * t;
         if (t < 1 / 3) return q;
         if (t < 1 / 2) return p + (q - p) * (2 / 3 - t) * 6;
         return p;
      };

      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hueToRgb(p, q, h + 1 / 3);
      g = hueToRgb(p, q, h);
      b = hueToRgb(p, q, h - 1 / 3);
   }

   return [r, g, b];
}

export function hsbToRgb(h: number, s: number, b: number): [number, number, number] {
   s /= 100; // Normalize saturation to 0-1
   b /= 100; // Normalize brightness to 0-1

   const k = (n: number) => (n + h / 60) % 6;
   const f = (n: number) => b * (1 - s * Math.max(0, Math.min(k(n), 4 - k(n), 1)));

   const r = Math.round(f(5) * 255);
   const g = Math.round(f(3) * 255);
   const bVal = Math.round(f(1) * 255);

   return [r, g, bVal];
}

export function hexToRgb(hexColor: string): [number, number, number] {
   hexColor = hexColor.replace(/^#/, ""); // Remove '#' if present
   return [
      parseInt(hexColor.slice(0, 2), 16),
      parseInt(hexColor.slice(2, 4), 16),
      parseInt(hexColor.slice(4, 6), 16),
   ];
}

export function rgbToHex(rgbColor: [number, number, number]): string {
   return `#${((1 << 24) + (rgbColor[0] << 16) + (rgbColor[1] << 8) + rgbColor[2])
      .toString(16)
      .slice(1)}`;
}

export function rgbToHsb(r: number, g: number, b: number): [number, number, number] {
   r /= 255;
   g /= 255;
   b /= 255;

   const max = Math.max(r, g, b);
   const min = Math.min(r, g, b);
   const delta = max - min;

   let h = 0;
   let s = 0;
   const v = max; // Brightness

   if (max !== 0) {
      s = delta / max;
   }

   if (delta !== 0) {
      if (max === r) {
         h = ((g - b) / delta + (g < b ? 6 : 0)) * 60;
      } else if (max === g) {
         h = ((b - r) / delta + 2) * 60;
      } else {
         h = ((r - g) / delta + 4) * 60;
      }
   }

   return [Math.round(h), Math.round(s * 100), Math.round(v * 100)];
}

// function hexToHsb(hexColor: string): [number, number, number] {
//    const [r, g, b] = hexToRgb(hexColor);
//    return rgbToHsb(r, g, b);
// }

export function adjustLightness(hexColor: string, lightness: number): string {
   // Convert hex to RGB
   hexColor = hexColor.replace(/^#/, "");
   let [r, g, b] = [
      parseInt(hexColor.slice(0, 2), 16) / 255.0,
      parseInt(hexColor.slice(2, 4), 16) / 255.0,
      parseInt(hexColor.slice(4, 6), 16) / 255.0,
   ];

   // Convert RGB to HLS
   // eslint-disable-next-line prefer-const
   let [h, l, s] = rgbToHls(r, g, b);

   // Adjust the lightness
   l = Math.max(0, Math.min(1, lightness)); // Ensure lightness is between 0 and 1

   // Convert HLS back to RGB
   [r, g, b] = hlsToRgb(h, l, s);

   // Convert RGB back to hex
   return rgbToHex([Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)]);
}

export function relativeLuminance(rgb: [number, number, number]): number {
   let [r, g, b] = rgb.map((v) => v / 255.0);
   r = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
   g = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
   b = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);
   return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function contrastRatio(bgColor: string, fgColor: string): number {
   const bgRgb = hexToRgb(bgColor);
   const fgRgb = hexToRgb(fgColor);
   const lumBg = relativeLuminance(bgRgb);
   const lumFg = relativeLuminance(fgRgb);

   let contrast;
   if (lumBg > lumFg) {
      contrast = (lumBg + 0.05) / (lumFg + 0.05);
   } else {
      contrast = (lumFg + 0.05) / (lumBg + 0.05);
   }

   return Math.round(contrast * 100) / 100;
}

export function contrastToTex(
   bgColorHex: string,
   fgColorHex: string,
   targetContrast: number
): [string, number] {
   let lightnessColor = fgColorHex;
   let contrast = 1.0;

   for (let index = 0; index < 99; index++) {
      contrast = contrastRatio(bgColorHex, lightnessColor);
      if (Math.abs(contrast - Math.round(targetContrast * 100) / 100) < 0.05) {
         break;
      }
      lightnessColor = adjustLightness(fgColorHex, Math.round((index / 99) * 100) / 100);
   }

   return [lightnessColor, contrast];
}
