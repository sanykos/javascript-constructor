import {row, col} from '../utils'

class Block {
    constructor(value, options) {
        this.value = value;
        this.options = options;
    }

    toHTML() {
        throw new Error('Метод toHTML должен быть реализован')
    }
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        const { tag = 'h2', styles } = this.options
        return row(col(`<${tag}>${this.value}</${tag}>`), styles)
    }
}

export class ImageBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        const { alt, styles, imageStyles } = this.options
        const html = `<img src="${this.value}" alt="${alt}" style="${imageStyles}">`
        return row(html, styles)
    }
}

export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        const { styles } = this.options
        return row(col(
            `<p>${this.value}</p>`
            ), styles)
    }
}

export class TextColumnsBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        const { styles } = this.options
        const html = this.value.map((item) => {
            return col(`<p>${item}</p>`)
        })
        return row(html.join(''), styles)
    }
}
