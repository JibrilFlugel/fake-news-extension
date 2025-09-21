(function() {
  console.log('Content script loaded');

  let title = document.title || "";
  let articleText = "";
  let url = window.location.href;

  if (url.includes("facebook.com")) {
    const fbSelectors = [
      'div[data-testid="post_message"]',
      '[data-ad-preview="message"]',
      '.userContent'
    ];
    
    for (const selector of fbSelectors) {
      const elements = document.querySelectorAll(selector);
      if (elements.length > 0) {
        elements.forEach(el => {
          articleText += el.innerText + "\n";
        });
        break;
      }
    }
  } else {
    document.querySelectorAll("p").forEach(p => {
      articleText += p.innerText + "\n";
    });
  }

  let description = document.querySelector('meta[name="description"]')?.content || "";

  let extractedData = {
    title,
    description,
    articleText: articleText.trim(),
    url
  };

  console.log("Extracted News:", extractedData);
})();
