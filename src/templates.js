import { row, col } from './utils'

function title(block) {
    const { tag, styles } = block.options
    return row(col(`<${tag}>${block.value}</${tag}>`), styles)
}
function text(block) {
    return row(col(
        `<p>${block.value}</p>`
        ), block.options.styles)
}
function textColumns(block) {
    const html = block.value.map((item) => {
        return col(`<p>${item}</p>`)
    })
    return row(html.join(''), block.options.styles)
}

export const templates = { title, text, textColumns }