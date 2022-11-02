const express = require('express');
const {check} = require('../../utils/index');
const { ctrRefetchEmail } = require('../../controlers/login/index');

const router = express.Router();

router.post('/gmail',  check(ctrRefetchEmail)); // отправка письма мне на почту


module.exports = router;