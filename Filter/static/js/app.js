// Import data from data.js
var tableData = data;

// Create object with the new UFO sighting
var new_event = { datetime: "1/28/1996",
                city: "dallas",
                state: "tx",
                country: "us",
                shape: "star",
                durationMinutes: "5 mins.",
                comments: "Cowboys win a superbowl, that's alien!."
            }

// Add new ufo sighting as the third object in tableDate array
tableData.splice(2, 0, new_event);

// Make Selection
var tbody = d3.select("tbody");
var btnClear = d3.select("#clear-btn");
var btnFilterDate = d3.select("#filter-btn-date");
var btnFilterCity = d3.select("#filter-btn-city");
var btnFilterState = d3.select("#filter-btn-state");
var btnFilterCountry = d3.select("#filter-btn-country");
var btnFilterShape = d3.select("#filter-btn-shape");


// Function to display table
function populateTable(events) {
    events.forEach(function(event) {
        var row = tbody.append("tr");
        Object.entries(event).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
        });
  });
};

// Populate full data on refresh
tbody.text("");
populateTable(tableData);

// ======================================================================
// ------------------------HANDLE BUTTONS--------------------------------
// ======================================================================

// Clear all filters.
btnClear.on("click", function(){
    d3.event.preventDefault();
    tbody = tbody.text("");
    populateTable(tableData);
    
});

// Filter data by date.
btnFilterDate.on("click", function() {
    // Prevent refresh
    d3.event.preventDefault();
    // Variances declaration
    var inputDate = d3.select("#datetime").property("value");
    // Filter and Display
    var filteredData = tableData.filter(sight => sight.datetime === inputDate);
    tbody.text("");
    populateTable(filteredData);
});

// Filter data by city.
btnFilterCity.on("click", function() {
    // Prevent refresh
    d3.event.preventDefault();
    // Variances declaration
    var inputCity = d3.select("#city").property("value");
    // Filter and Display
    var filteredData = tableData.filter(sight => sight.city === inputCity);
    tbody.text("");
    populateTable(filteredData);
});

// Filter data by state.
btnFilterState.on("click", function() {
    // Prevent refresh
    d3.event.preventDefault();
    // Variances declaration
    var inputState = d3.select("#state").property("value");
    // Filter and Display
    var filteredData = tableData.filter(sight => sight.state === inputState);
    tbody.text("");
    populateTable(filteredData);
});

// Filter data by country.
btnFilterCountry.on("click", function() {
    // Prevent refresh
    d3.event.preventDefault();
    // Variances declaration
    var inputCountry = d3.select("#country").property("value");
    // Filter and Display
    var filteredData = tableData.filter(sight => sight.country === inputCountry);
    tbody.text("");
    populateTable(filteredData);
});

// Filter data by shape.
btnFilterShape.on("click", function() {
    // Prevent refresh
    d3.event.preventDefault();
    // Variances declaration
    var inputShape = d3.select("#shape").property("value");
    // Filter and Display
    var filteredData = tableData.filter(sight => sight.shape === inputShape);
    tbody.text("");
    populateTable(filteredData);
});