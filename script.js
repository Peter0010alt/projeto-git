document.querySelector('.buttonCalculate').addEventListener('click', function() {
    const distance = document.getElementById('distancia').value;
    const hours = document.querySelector('input[name="hoursTime"]').value;
    const minutes = document.querySelector('input[name="minutesTime"]').value;
    const seconds = document.querySelector('input[name="secondsTime"]').value;

    const totalSeconds = (hours * 3600) + (minutes * 60) + parseInt(seconds);
    const pace = totalSeconds / distance;

    const paceMinutes = Math.floor(pace / 60);
    const paceSeconds = Math.floor(pace % 60);

    alert(`Your pace is ${paceMinutes}:${paceSeconds} per kilometer.`);
});
