var expectArt = document.querySelector('.expect__Art'),
    expectContent = document.querySelector('.expect__Content');
    expectEvent = document.querySelector('.expect__Event');
    expectWorkshop = document.querySelector('.expect__Workshop');
    expectArtisan = document.querySelector('.expect__Artisan');
    expectFilm = document.querySelector('.expect__Film');
    expectHub = document.querySelector('.expect__Hub');

window.addEventListener("scroll", function(){
  if (window.pageYOffset > 3500){
  expectArt.classList.add('expect__ArtPop'),
  expectContent.classList.add('expect__ContentPop');
  expectEvent.classList.add('expect__EventPop');
  expectWorkshop.classList.add('expect__WorkshopPop');
  expectArtisan.classList.add('expect__ArtisanPop');
  expectFilm.classList.add('expect__FilmPop');
  expectHub.classList.add('expect__HubPop');
} else if (window.pageYOffset < 3500){
  expectArt.classList.remove('expect__ArtPop'),
  expectContent.classList.remove('expect__ContentPop');
  expectEvent.classList.remove('expect__EventPop');
  expectWorkshop.classList.remove('expect__WorkshopPop');
  expectArtisan.classList.remove('expect__ArtisanPop');
  expectFilm.classList.remove('expect__FilmPop');
  expectHub.classList.remove('expect__HubPop');
} 
})

window.addEventListener("scroll", function(){
if (window.pageYOffset > 4000){
  expectArt.classList.remove('expect__ArtPop'),
  expectContent.classList.remove('expect__ContentPop');
  expectEvent.classList.remove('expect__EventPop');
  expectWorkshop.classList.remove('expect__WorkshopPop');
  expectArtisan.classList.remove('expect__ArtisanPop');
  expectFilm.classList.remove('expect__FilmPop');
  expectHub.classList.remove('expect__HubPop');
}
})