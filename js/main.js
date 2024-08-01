const canvas = document.getElementById('resultCanvas');

const ctx1 = canvas.getContext('2d');
const ctx2 = canvas.getContext('2d');
const ctx3 = canvas.getContext('2d');

ctx1.fillStyle = '#faa';
ctx1.fillRect(75, 600 -480, 50, 480);
ctx2.fillStyle = '#afa';
ctx2.fillRect(275, 600 -360, 50, 360);
ctx3.fillStyle = '#aaf';
ctx3.fillRect(475, 600 -240, 50, 240);