(function () {
  let title = document.querySelector("title")?.innerText || "";
  let articleText = "";
  let url = window.location.href;

  // TODO: Extraction logic for X and Facebook

  let paragraphs = document.querySelectorAll("p");
  paragraphs.forEach((p) => {
    articleText += p.innerText + "\n";
  });

  let description =
    document.querySelector('meta[name="description"]')?.content ||
    document.querySelector('meta[property="og:description"]')?.content ||
    "";

  // Package result
  let extractedData = {
    title,
    description,
    articleText,
    url,
  };

  console.log("Extracted News:", extractedData);

  // TODO: send to backend later
})();
