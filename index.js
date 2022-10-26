if ("serviceWorker" in navigator ) {
    navigator.serviceWorker.register("sprint-2.js").then(
        registration => {
            console.log("Sprint-2 Registered");
            console.log(registration);
        }
    ).catch(error=> {
        console.log("Sprint-2 Register Failed");
        console.log(error);
    });
}