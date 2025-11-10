document.addEventListener("DOMContentLoaded", () => {
  const joinBtn = document.getElementById("btn-primary");
  const formSection = document.getElementById("join-form-section");
  const joinForm = document.getElementById("joinForm");

  if (!joinBtn || !formSection) return; // stop if form doesn't exist on page

  joinBtn.addEventListener("click", () => {
    // toggle visibility
    if (formSection.style.display === "none" || formSection.style.display === "") {
      formSection.style.display = "block";
      formSection.scrollIntoView({ behavior: "smooth" });
    } else {
      formSection.style.display = "none";
    }
  });

  // Optional: handle submit
  if (joinForm) {
    joinForm.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("🎉 Thank you for joining!");
      joinForm.reset();
      formSection.style.display = "none";
    });
  }
});

// Photo preview functionality
const photoInput = document.getElementById("photo");
const photoPreview = document.getElementById("photoPreview");

if (photoInput && photoPreview) {
  photoInput.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        photoPreview.src = e.target.result;
      };
      reader.readAsDataURL(file);
    } else {
      photoPreview.src = ""; // reset if no file
    }
  });
}

