import "./styles.css";

let detail = {
  length: 350,
  width: 250,
  lt: { radius: 0 },
  lb: { radius: 0 },
  rt: { radius: 50 },
  rb: { radius: 0 },
};

{
  const app = document.getElementById("app");
  const heightInput = document.getElementById("heightInput");
  const widthInput = document.getElementById("widthInput");
  const leftAngleInput = document.getElementById("leftAngleInput");
  const rotateZ = document.getElementById("rotateZ");
  const draw = document.getElementById("draw");

  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = 400;
  canvas.height = 400;

  function drawDetail() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (
      heightInput.value === "" ||
      widthInput.value === "" ||
      rightAngleInput.value === ""
    ) {
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, detail.width);
      ctx.lineTo(detail.length, detail.width);
      ctx.arcTo(detail.length, 0, 0, 0, detail.rt.radius);
      ctx.lineTo(0, 0);
      ctx.stroke();
      ctx.closePath();
    } else {
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, widthInput.value);
      ctx.lineTo(heightInput.value, widthInput.value);
      ctx.arcTo(heightInput.value, 0, 0, 0, rightAngleInput.value);
      ctx.lineTo(0, 0);
      ctx.stroke();
      ctx.closePath();
    }

    drawDetail();

    draw.addEventListener("click", drawDetail);
  }
}
