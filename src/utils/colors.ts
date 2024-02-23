function hex(c: string): string {
	const s = '0123456789abcdef';
	const i = parseInt(c, 10);

	if (i === 0 || isNaN(i)) {
		return '00';
	}

	const roundedI = Math.round(Math.min(Math.max(0, i), 255));
	return s.charAt((roundedI - (roundedI % 16)) / 16) + s.charAt(roundedI % 16);
}

function convertToHex(rgb: number[]): string {
	return hex(rgb[0].toString()) + hex(rgb[1].toString()) + hex(rgb[2].toString());
}

function trim(s: string): string {
	return s.charAt(0) === '#' ? s.substring(1, 7) : s;
}

function convertToRGB(hex: string): number[] {
	const color: number[] = [];
	color[0] = parseInt(trim(hex).substring(0, 2), 16);
	color[1] = parseInt(trim(hex).substring(2, 4), 16);
	color[2] = parseInt(trim(hex).substring(4, 6), 16);
	return color;
}

export function generateColor(colorStart: string, colorEnd: string, colorCount: number): string[] {
	const start = convertToRGB(colorStart);
	const end = convertToRGB(colorEnd);
	const len = colorCount;
	let alpha = 0.0;
	const saida: string[] = [];

	for (let i = 0; i < len; i++) {
		const c: number[] = [];
		alpha += 1.0 / len;

		c[0] = start[0] * alpha + (1 - alpha) * end[0];
		c[1] = start[1] * alpha + (1 - alpha) * end[1];
		c[2] = start[2] * alpha + (1 - alpha) * end[2];

		saida.push(convertToHex(c));
	}

	return saida;
}
