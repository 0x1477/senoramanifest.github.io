function showGameList() {
  alert("Game List not implemented yet!");
}

function submitApp() {
  const appId = document.getElementById("appId").value;
  if (appId) {
    document.getElementById("output").innerText = `App ID Submitted: ${appId}`;
  } else {
    alert("Please enter an App ID or URL.");
  }
}
