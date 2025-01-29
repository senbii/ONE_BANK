function convertCurrency(conversionType) {
  const usdInput = document.getElementById('usd');
  const berriesInput = document.getElementById('berries');
  let usd, berries;

  if (conversionType === 'usdToBerries') {
    usd = usdInput.value;
    berries = usd * 17;
    berriesInput.value = berries;
  } else if (conversionType === 'berriesToUsd') {
    berries = berriesInput.value;
    usd = berries / 17;
    usdInput.value = usd.toFixed(2);
  }
}

document.getElementById('usd').addEventListener('input', () => convertCurrency('usdToBerries'));
document.getElementById('berries').addEventListener('input', () => convertCurrency('berriesToUsd'));

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