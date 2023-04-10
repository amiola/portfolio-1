export const contactData = [
    {
        name: 'name',
        type: 'text',
        class: 'field',
        requirements:{
            required: true,
            maxLength: 20
        }
    },
    {
        name: 'email',
        type: 'email',
        class: 'field',
        requirements:{
            required: true
        }
    },
    {
        name: 'message',
        type: 'textarea',
        class: 'field contact-message',
        requirements:{
            required: true,
            minLength: 1
        }
    }
];