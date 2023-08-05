document.addEventListener("DOMContentLoaded", function () {
  const textInput = document.getElementById("text-input");
  const wordCount = document.getElementById("word-count");
  const letterCount = document.getElementById("letter-count");

  textInput.addEventListener("input", function () {
    const text = textInput.value;
    const words = text.split(/\s+/).filter((word) => word !== "");
    const wordCountValue = words.length;

    const letterCountValue = text.replace(/\s+/g, "").length;

    wordCount.textContent = `Word count: ${wordCountValue}`;
    letterCount.textContent = `Letter count: ${letterCountValue}`;
  });
});
