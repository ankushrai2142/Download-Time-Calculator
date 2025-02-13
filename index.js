document.getElementById("calculate").addEventListener("click", function () {
  const dwSpeed = Number(document.getElementById("input-speed").value);
  const fileSize = Number(document.getElementById("file-size").value);
  const speedUnit = document.getElementById("type").value;
  const sizeUnit = document.getElementById("unit").value;
  const display = document.querySelector(".result");
  let result;

  // Convert file size to megabytes
  let fileSizeInMB;
  if (sizeUnit === "gb") {
    fileSizeInMB = fileSize * 1024;
  } else {
    fileSizeInMB = fileSize;
  }

  // Convert download speed to megabits per second
  let speedInMbps;
  if (speedUnit === "mbps") {
    speedInMbps = dwSpeed;
  } else {
    speedInMbps = dwSpeed * 8;
  }

  // Calculate download time in seconds
  result = fileSizeInMB / (speedInMbps / 8);

  // Display download time in seconds, minutes, or hours
  let downloadTimeText;
  if (result < 60) {
    downloadTimeText = `${result.toFixed(1)} seconds`;
  } else if (result < 3600) {
    const minutes = Math.floor(result / 60);
    const seconds = result % 60;
    downloadTimeText = `${minutes} minutes ${seconds.toFixed(1)} seconds`;
  } else {
    const hours = Math.floor(result / 3600);
    const minutes = Math.floor((result % 3600) / 60);
    const seconds = result % 60;
    downloadTimeText = `${hours} hours, ${minutes} minutes, ${seconds.toFixed(
      1
    )} seconds`;
  }

  display.innerHTML = `Download time:<br />${downloadTimeText} `;
  display.style.display = "block";
});
