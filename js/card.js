const similarListAds = document.querySelector('#map-canvas');
const similarListAds = document.querySelector('#map-canvas');
const similarAdsTemplate = document.querySelector('#card').content.querySelector('.popup');
const similarAds = createAdsArray();
const HousingType = {
  'flat': 'Квартира',
  'bungalow': 'Бунгало',
  'house': 'Дом',
  'palace': 'Дворец',
  'hotel': 'Отель',
};

similarAds.forEach((ads) => {
  const adsElement = similarAdsTemplate.cloneNode(true);
  const avatarElement = adsElement.querySelector('.popup__avatar');
  const photoListElement = popupElement.querySelector('.popup__photos');
  const featureListElement = popupElement.querySelector('.popup__features');
  const descriptionElement = popupElement.querySelector('.popup__description');
  const photoListElementFragment = document.createDocumentFragment();

  adsElement.querySelector('.popup__title').textContent = ads.offer.title;
  adsElement.querySelector('.popup__text--address').textContent = ads.offer.address;
  adsElement.querySelector('.popup__text--price').textContent = ${ads.offer.price} ₽/ночь;
  adsElement.querySelector('.popup__type').textContent = HousingType[ads.offer.type];
  adsElement.querySelector('.popup__text--capacity').textContent = ${ads.offer.room} комнаты для  ${ads.offer.guests} гостей;
  adsElement.querySelector('.popup__text--time').textContent = Заезд после ${ads.offer.checkin} , выезд до  ${ads.offer.checkout};
  adsElement.querySelector('.popup__description').textContent = ads.offer.description;
  adsElement.querySelector('img').src = ads.author.avatar;

  featureListElement.textContent = '';
  offer.features.forEach((item) => {
    const feature = document.createElement('li');
    const featureClass = `popup__feature--${item}`;
    feature.classList.add('popup__feature', featureClass);
    featureListElement.appendChild(feature);
  });

  offer.photos.forEach((photo) => {
    const photoElement =  photoListElement.querySelector('.popup__photo').cloneNode(true);
    photoElement.src = photo;
    photoListElementFragment.appendChild(photoElement);
  });
  photoListElement.textContent = '';
  photoListElement.appendChild(photoListElementFragment);

  const checkDataAvailable = (content, element) => {
    if (!content.length) {
      element.classList.add('hidden');
    }
  };

  checkDataAvailable(offer.features, featureListElement);
  checkDataAvailable(offer.photos, photoListElement);
  checkDataAvailable(offer.description, descriptionElement);

  similarListAds.appendChild(adsElement);
};
