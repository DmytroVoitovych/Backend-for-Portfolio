const  transporter = require("../mail/nodemailerConfig");
const {MAIL_FROM} = process.env;


const funcSendEmail = async (data) => {

    try {
            await transporter.sendMail({ ...data, from: MAIL_FROM })
            
        return true;
} catch (error) {
        throw error;
        
}
};

module.exports = funcSendEmail;