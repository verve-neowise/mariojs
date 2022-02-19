export default (src, width, height) => {
    const image = new Image(width, height);
    image.src = src;
    return image;
};
