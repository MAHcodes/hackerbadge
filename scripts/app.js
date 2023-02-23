const handleSave = () => {
  console.log("save");
  html2canvas(document.querySelector("#badge")).then((canvas) => {
    canvas.toBlob(function(blob) {
      saveAs(blob, "pretty image.png");
    });
  });
};

document.querySelector("#save").addEventListener("click", handleSave);
