import nodemailer from 'nodemailer'

const emailRegistro = async (datos) => {
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const { nombre, email, token } = datos;

    // Enviar el email mediante nodemailer con las credenciales de mailtrap.
    await transport.sendMail({
        from: 'BienesRaices.com',
        to: email,
        subject: 'Confirma tu cuenta en BienesRaices.com',
        text: 'Confirma tu cuenta en BienesRaices.com',
        html: `
            <p>Hola ${nombre}, comprueba tu cuenta en BienesRaices.com</p>

            <p>
                Tu cuenta está lista, solo debes confirmarla en el siguiente enlace:
                <a href="">Confirmar Cuenta</a>
            </p>

            <p>Si no creaste esta cuenta, puedes ignorar el mensaje</p>
        `
    })
}

export {
    emailRegistro
}