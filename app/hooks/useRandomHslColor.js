const useRandomHslColor = (randomHueRange) => {
    const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);
    const { hue, saturation, lightness } = {
        hue: getRandomNumber(...randomHueRange),
        saturation: getRandomNumber(0, 100),
        lightness: getRandomNumber(0, 100),
    };

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

export default useRandomHslColor;