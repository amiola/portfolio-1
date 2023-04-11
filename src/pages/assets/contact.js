export const contactData = [
    {   title: ['Name','Nome','Nombre'],
        name: 'name',
        type: 'text',
        class: 'field',
        requirements:{
            required: true,
            maxLength: 20
        }
    },
    {   title: ['Email','Email','Email'],
        name: 'email',
        type: 'email',
        class: 'field',
        requirements:{
            required: true
        }
    },
    {   title: ['Message','Mensagem','Mensaje'],
        name: 'message',
        type: 'textarea',
        class: 'field contact-message',
        requirements:{
            required: true,
            minLength: 1
        }
    }
];

export const contactValues = [
    {
        contact: 'contact',
        message: 'Thank you for taking the time to explore my portfolio! If you have any questions or want to be in touch, please feel free to reach out.',
        submit: 'Submit'
    },
    {
        contact: 'contato',
        message: 'Obrigado por reservar um tempo para explorar meu portfólio! Se você tiver alguma dúvida ou quiser entrar em contato, sinta-se à vontade para entrar em contato.',
        submit: 'Enviar'
    },
    {
        contact: 'contacto',
        message: '¡Gracias por tomarse el tiempo para explorar mi cartera! Si tiene alguna pregunta o desea estar en contacto, no dude en comunicarse.',
        submit: 'Enviar'
    }
]