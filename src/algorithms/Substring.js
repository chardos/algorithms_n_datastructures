const substring = (text, smallText, currentIndex = 0) => {
    const slice = text.slice(currentIndex, currentIndex + smallText.length);
    
    if (slice === smallText) {
        return currentIndex;
    } else if (currentIndex < text.length) {
        return substring(text, smallText, currentIndex + 1);
    }
    return - 1;
}


const index = substring('how are you mate', 'mat')
console.log(index)
