function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("data", dataId);
        if (getNextData) {
            getNextData()
        }
    }, 2000);  
}

// callback hell (nested callback)
getData("Calling data 1", () => {
    getData("Calling data 2", () => {
        getData("Calling data 3")
    })
})

