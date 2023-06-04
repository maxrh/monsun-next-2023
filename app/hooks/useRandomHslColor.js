const hueRanges = [
    [0, 30],    [30, 60],   [60, 90],   [90, 120], 
    [120, 150], [150, 180], [180, 210], [210, 240], 
    [240, 270], [270, 300], [300, 330], [330, 360]
];

const randomHueRange = hueRanges[Math.floor(Math.random() * hueRanges.length)];

const useRandomHslColor = () => {
    const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);
    const { hue, saturation, lightness } = {
        hue: getRandomNumber(...randomHueRange),
        saturation: getRandomNumber(0, 100),
        lightness: getRandomNumber(0, 100),
    };

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

export default useRandomHslColor;