class TrainSchedule {
    constructor() {
        this.trains = [];
    }

    addTrain(trainNumber, arrivalTime, departureTime) {
        const train = { trainNumber, arrivalTime, departureTime };
        this.trains.push(train);
        this.displayTrains();
    }

    displayTrains() {
        const scheduleList = document.getElementById('scheduleList');
        scheduleList.innerHTML = ''; // Clear the list before displaying

        this.trains.forEach(train => {
            const listItem = document.createElement('li');
            listItem.textContent = `Train: ${train.trainNumber}, Arrival: ${train.arrivalTime}, Departure: ${train.departureTime}`;
            scheduleList.appendChild(listItem);
        });
    }
}

const schedule = new TrainSchedule();

document.getElementById('trainForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const trainNumber = document.getElementById('trainNumber').value;
    const arrivalTime = document.getElementById('arrivalTime').value;
    const departureTime = document.getElementById('departureTime').value;

    schedule.addTrain(trainNumber, arrivalTime, departureTime);

    // Clear the input fields after submission
    this.reset();
});
