const { UserModel } = require("../models/user");

async function register(req, res) {
    const {name, email, password , phone_number} = req.body;
    try {
        const newUser = new UserModel({
            name,
            email,
            password,
            phone_number
        });
        await newUser.save();
        res.status(201).json({
            message: "User created",
            status: 1
        })
    }
    catch (error) {
        console.log("Failed to save:", error);
        return res
            .status(500)
            .json({ message: "Failed to save user", error: error });
    }
}

async function login(req, res) {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email: email });
        if (!user) {
            return res.status(401).json({ error: "User not found", status: 0 });
        }
        const isPasswordValid = password === user.password;
        if (!isPasswordValid) {
            return res.status(401).json({ error: "Invalid credentials", status: 0 });
        }
        return res.status(200).json({
            message: "Login succed",
            status: 1
        })
    } catch (error) {
        console.log("login failed", error)
        res.status(500).json({
            message: "Login failed, server error",
            error: error,
            status: 0
        })
    }
}

async function isUserAlreadyExist(req, res) {
    const { email } = req.body;
    const user = await UserModel.findOne({ email: email });
    if (!user) {
        const response = await sendWhatsAppMessage();
        if(response.status==1){
            return res.status(200).json({ error: "User not found, wp message sent", status: 1 });
        }else{
            return res.status(400).json({ error: "User not found, failed to send wp messsage", status: 0 });
        }
    }
    else {
        return res.status(200).json({ error: "User already exist", status: 1 });
    }
}




async function sendWhatsAppMessage(phone_number) {
    const response = await fetch("https://z31jp6.api.infobip.com/whatsapp/1/message/template", {
        'method': 'POST',
        'hostname': 'z31jp6.api.infobip.com',
        'path': '/whatsapp/1/message/template',
        'headers': {
            'Authorization': 'App 2305ce70eb6dbef674c78b4309d801eb-72ad0119-fbf4-45b6-bcbf-14d8c54f95e1',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        'maxRedirects': 20,
        body:JSON.stringify({
            "messages": [
                {
                    "from": "447860099299",
                    "to": `917980578917`,
                    "messageId": "3365aca1-b6da-4165-b79f-2c11f7018063",
                    "content": {
                        "templateName": "message_test",
                        "templateData": {
                            "body": {
                                "placeholders": ["Rahul"]
                            }
                        },
                        "language": "en"
                    }
                }
            ]
        })
    });
    if (response.ok) {
        return ({
            msg: "Message sent",
            status: 1
        })
    } else {
        return ({
            msg: "Message cant sent",
            status: 0
        })
    }
}


module.exports = { login, register, isUserAlreadyExist }