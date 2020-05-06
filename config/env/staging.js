module.exports = {
    filesToLoad:{
        algorithmConfigFile: "resources/alg_config.json",
        simulatorConfigFile: "resources/sim_config.json",
        stationsFile: "resources/berlin_45_stations_3_depots.json",
        travelTimeFile: "resources/berlin_travel_times_68_stations_3_depots.json",
        parcelsFile: "resources/parcels_9000_v1.json",
        initialTruckRoutes: "resources/initial_truck_routes.json",
        initialVanRoutes: "resources/initial_van_routes.json",
        additionalRoutes: "resources/additional_routes.json",

    },
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
        uri: 'mongodb+srv://appuser:9Mp0WO1eRu2B84xt@cluster0-7yozu.gcp.mongodb.net/staging?retryWrites=true&w=majority',
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
