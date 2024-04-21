module.exports.sendMsg = (req, res) => {
    const config = require('../config/config.json')
    let http = require('request')
    let reqBody = req.body

    let fields = [
        `${reqBody.year?.length ? '<b>Year</b>: ' + reqBody.year : ''}`,
        `${reqBody.mark?.length ? '<b>Mark</b>: ' + reqBody.mark : ''}`,
        `${reqBody.model?.length ? '<b>Model</b>: ' + reqBody.model : ''}`,
        `${
            reqBody.submodel?.length
                ? '<b>Submodel</b>: ' + reqBody.submodel
                : ''
        }`,
        `${
            reqBody.zipcode?.length ? '<b>Zipcode</b>: ' + reqBody.zipcode : ''
        }`,
        `${reqBody.phone?.length ? '<b>Phone</b>: ' + reqBody.phone : ''}`,
        `${
            reqBody.feedBackName?.length
                ? '<b>FeedBackName</b>: ' + reqBody.feedBackName
                : ''
        }`,
        `${
            reqBody.feedBackPhone?.length
                ? '<b>FeedBackPhone</b>: ' + reqBody.feedBackPhone
                : ''
        }`,
    ]

    let message = ''
    fields.forEach((field) => {
        message += field + '\n'
    })

    message = encodeURI(message)

    http.post(
        `https://api.telegram.org/bot${config.telegram.token}/sendMessage?chat_id=${config.telegram.chat}&parse_mode=html&text=${message}`,
        function (err, response, body) {
            console.log('error:', err)
            console.log('response:', response)
            console.log('body:', body)

            if (response.statusCode >= 400) {
                res.status(400).json({
                    status: 'error',
                    message: 'some error',
                })
            } else {
                res.status(200).json({
                    status: 'ok',
                    message: 'Successful send!',
                })
            }
        }
    )

    return res
}
