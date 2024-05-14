const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client();

const CLIENT_ID_ios = '660157685907-762r5opjq1rhllm23sfb78n8e8k0heoo.apps.googleusercontent.com';
const CLIENT_ID_android = '660157685907-6i91caggp0j9a9nrfosah8d6l6f2h574.apps.googleusercontent.com';
const CLIENT_ID = '660157685907-nmfnerk0ltvt1ihuv471b4neuu2i41uc.apps.googleusercontent.com';

const validarGoogleIdToken = async (token) => {
    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: [
                CLIENT_ID_ios,
                CLIENT_ID_android,
                CLIENT_ID,
            ],
        });
        const payload = ticket.getPayload();
        const userid = payload['sub'];
        return {
            name: payload['name'],
            picture: payload['picture'],
            email: payload['email'],
        }
    } catch (error) {
        return false;
    }
}

module.exports = {
    validarGoogleIdToken
}