import image from './assets/javascript.png'
import { TitleBlock, ImageBlock, TextBlock, TextColumnsBlock } from './classes/blocks'
export const model = [
    new TitleBlock('test title', {
        tag: 'h2',
        styles: 'background: darkred; color: #fff'
    }),
    new ImageBlock(image, {
        imageStyles: 'width: 500px; height: auto',
        styles: 'padding: 2rem 0 ',
        alt: 'my image'
    }),
    new TextBlock('Какойто текст', {
        styles: 'background: darkblue; color: yellow'
    }),
    new TextColumnsBlock([
        '1 text',
        '2 text',
        '3 text'
    ], 
    {
        styles: 'background: darkblue; color: yellow'
    })
]