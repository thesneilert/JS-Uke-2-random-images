function valgfrittNavn(color, width, height) {
    document.getElementById('mainDiv').innerHTML = `
        <div style="background-color: ${color}; width: ${width}%; height: ${height}px;"></div>
    `;
}