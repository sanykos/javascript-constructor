export const model = [
    {
        type: 'title',
        value: 'test Title',
        options: {
            tag: 'h2',
            styles: 'background: darkred; color: #fff'
        }
    },
    {
        type: 'text',
        value: 'Какой то текст',
        options: {
            styles: 'background: darkblue; color: yellow'
        }
    },
    {
        type: 'textColumns',
        value: [
            '1 text',
            '2 text',
            '3 text'
        ],
        options: {
            styles: 'padding: 1rem'
        }
    }
]