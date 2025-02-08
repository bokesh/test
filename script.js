function applyFilters() {
    let city = document.getElementById("cityFilter").value;
    let type = document.getElementById("typeFilter").value;
    let profiles = document.querySelectorAll(".profile");

    profiles.forEach(profile => {
        let profileCity = profile.getAttribute("data-city");
        let profileType = profile.getAttribute("data-type");

        if ((city === "" || city === profileCity) && 
            (type === "" || type === profileType)) {
            profile.style.display = "block";
        } else {
            profile.style.display = "none";
        }
    });
}