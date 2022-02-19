export default (src: string, width: number, height: number) => {
    const image = new Image(width, height)
    image.src = src
    return image
}