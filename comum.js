const getCSS = (variavel) => {
    return getComputedStyle(document.body).gatPropertyValue(variavel)
}

const tickConfig = {
    color: getCSS('--primary-color'),
    size: 16,
    family: getCSS('--font')
}

export{getCSS, tickConfig}