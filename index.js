let servient = new Wot.Core.Servient()
servient.addClientFactory(new Wot.Http.HttpClientFactory())
let helpers = new Wot.Core.Helpers(servient)
// Start servient
servient.start()
    .then(async (thingFactory) => {

        document.getElementById('thing-1-consume').addEventListener('click', function (e) {
            e.preventDefault()
            let tdAddr = document.getElementById('thing-1-address').value
            tdAddr = "http://localhost:8080/temperaturecontroller"

            helpers.fetch(tdAddr)
                .then(async (td) => {
                    console.log(td.description)
                    console.log(td.properties[Object.keys(td.properties)[0]])
                    document.getElementById('thing-1-description').innerText = td.description
                    document.getElementById('thing-1-first-property').innerText = Object.keys(td.properties)[0]
                    document.getElementById('thing-1-first-action').innerText = Object.keys(td.actions)[0]

                    return thingFactory.consume(td)
                })
                .then(async (thing) => {
                    console.log("Thing Description:", thing.getThingDescription())
                    thing.observeProperty(Object.keys(thing.getThingDescription().properties)[0], (data) => {
                        data.value().then((value) => {
                            console.log("Temperature:", value)
                            document.getElementById('thing-1-first-property-value').innerText = value
                        })
                    })
                    thing.subscribeEvent("overheat", async (data) => {
                        console.log("overheat event:", await data.value())
                    });

                    document.getElementById('thing-1-first-action-button').addEventListener('click', function (e) {
                        e.preventDefault()
                        let value = document.getElementById('thing-1-first-action-input').value
                        console.log("Action value:", value)
                        thing.invokeAction(Object.keys(thing.getThingDescription().actions)[0], parseInt(value))
                            .then((res) => {
                                console.log("Action result:", res)
                            })
                    })
                });
        })

    });