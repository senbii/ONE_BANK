function convertCurrency(conversionType) {
  if (conversionType === 'usdToBerries') {
    const usd = document.getElementById('usd').value;
    const berries = usd * 17;
    document.getElementById('usd-result').innerText = `${usd} USD is equal to ${berries} Berries.`;
  } else if (conversionType === 'berriesToUsd') {
    const berries = document.getElementById('berries').value;
    const usd = berries / 17;
    document.getElementById('berries-result').innerText = `${berries} Berries is equal to ${usd.toFixed(2)} USD.`;
  }
}

window.onscroll = function() {
  const backToTopButton = document.getElementById('back-to-top');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
};

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}