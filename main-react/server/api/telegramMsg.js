module.exports.sendMsg = (req, res) => {
    const config = require('../config/config.json')
    let http = require('request')
    let reqBody = req.body

    let fields = [
        '<b>Year</b>: ' + reqBody.year,
        '<b>Mark</b>: ' + reqBody.mark,
        '<b>Model</b>: ' + reqBody.model,
        '<b>SubModel</b>: ' + reqBody.submodel,
        '<b>Zip code</b>: ' + reqBody.zipcode,
        '<b>Phone</b>: ' + reqBody.phone,
    ]

    let message = ''
    fields.forEach((field) => {
        message += field + '\n'
    })

    message = encodeURI(message)

    http.post(
        `https://api.telegram.org/bot${config.telegram.token}/sendMessage?chat_id=${config.telegram.chat}&parse_mode=html&text=${message}`
    ),
        function (err, response, body) {
            console.log('error:', err),
                console.log('response:', response),
                console.log('body:', body)

            if (response.statusCode === 200) {
                res.status(200).json({
                    status: 'ok',
                    message: 'Successful send!',
                })
                if (response.statusCode !== 200) {
                    res.status(400).json({
                        status: 'error',
                        message: 'some error',
                    })
                }
            }
        }
}
