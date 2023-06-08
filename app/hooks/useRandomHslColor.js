const useRandomHslColor = (selectedHueRange) => {
    const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);
    const { hue, saturation, lightness } = {
        hue: getRandomNumber(...selectedHueRange),
        saturation: getRandomNumber(0, 100),
        lightness: getRandomNumber(0, 90),
    };

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

export default useRandomHslColor;