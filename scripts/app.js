const handleSave = (e) => {
  e.preventDefault();
  html2canvas(document.getElementById("badge")).then((canvas) => {
    canvas.toBlob(function(blob) {
      saveAs(blob, "hackerbadge.png");
    });
  });
};

document.getElementById("save").addEventListener("click", handleSave);

const handleName = (event) => {
  document.getElementById("name").innerText = event.target.value;
};

document.getElementById("name-input").addEventListener("input", handleName);

const handleRole = (event) => {
  console.log(event.target.checked);
  const roles = document.getElementById("roles");
  const images = document.querySelectorAll("form .role-img");
  images.forEach((img) => {
    if (img.dataset.role === event.target.id) {
      if (event.target.checked) {
        const newImage = document.createElement("img");
        newImage.src = img.src;
        newImage.className = "role-img";
        newImage.dataset.role = img.dataset.role;
        roles.appendChild(newImage);
      } else {
        const image = roles.querySelector(
          `.role-img[data-role="${img.dataset.role}"]`
        );
        image.remove();
      }
    }
  });
};

document.querySelectorAll("input[name='role']").forEach((checkbox) => {
  checkbox.addEventListener("change", handleRole);
});

const handleProf = () => {
  const profImg = document.getElementById("prof-img");
  const imgInp = document.getElementById("prof-input");

  const [file] = imgInp.files;
  if (file) {
    profImg.src = URL.createObjectURL(file);
  }
};

document.getElementById("prof-input").addEventListener("input", handleProf);
