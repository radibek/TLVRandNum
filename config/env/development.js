module.exports = {
    pubsub:{
        publisher:{
            topicName: "fa-utils-dev",
            projectId: "fantasyadvantage-utilsserver"
        },
        subscriber:{
            topicName: "fa-utils-dev",
            projectId: "fantasyadvantage-utilsserver"
        }
    },
    db:{
          uri: 'mongodb+srv://db_wizedy:1w!zedyP@cluster1-wizedy-0jf8r.mongodb.net/staging?retryWrites=true&w=majority',
          options: {
            user: '',
            pass: '',
            keepAlive: 1200000,
            connectTimeoutMS: 1200000,
            poolSize: 1500,
            useNewUrlParser:  true,
            autoReconnect: true

          },
          // Enable mongoose debug mode
          debug: process.env.MONGODB_DEBUG || false
    },
    accessToken: 'hdbR2XUFTfVykMWSBrG3Qr7QB43vJJLaEeCBeJaU'
};
