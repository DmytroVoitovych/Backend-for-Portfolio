const { Info } = require('../../models/contact');
const sendEmail = require('../../utils/funcSendEmail');
const validMessage = require('../../validation/dataValidationMessage');
const {MAIL_TO} = process.env;

const funcPostRefetchEmail = async (req, res) => {
    
    const { name, jober, message } = await req.body;
    const { error } = await validMessage(req.body);
    
    console.log(name);

    if (error) {
        const err = new Error(error.message);
        err.status = 400;
        throw err;
    }
    else {
        
        await Info.create({...req.body});
        const letter = {
            to: MAIL_TO,
            subject: 'фидбек потенциального работодателя',
            text: `test ${name}, ${jober}, ${message}`,
            html: `<p style="color: #153643; font-family: Arial, sans-serif; font-size: 24px;">
            <b>Имя рекрутера: </b>${name}<br/>
            <b>Название организации: </b> ${jober}<br/>
            <b>Инфо: </b>${message}
            </p>` 
        };
        
        await sendEmail(letter);
       
        res.json({ message: "feedback sent" });
        
    }
};  
 
module.exports = funcPostRefetchEmail;