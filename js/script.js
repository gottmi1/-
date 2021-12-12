window.addEventListener('load', () => {
  const $sec = document.querySelectorAll('section');
  const $fullLogo = document.querySelector('#full-logo');

  const $blue = document.querySelector('#bluebox');
  const $celes = document.querySelector('#celestia');
  const $celH2 = document.querySelector('#middle h2');
  const $celP = document.querySelector('#middle P');
  

  const $red = document.querySelector('#redbox');
  const $alarose = document.querySelector('#alarose');
  const $alaH2 = document.querySelector('#base h2');
  const $alaP = document.querySelector('#base P');

  const $gold = document.querySelector('#goldline');
  const $genfl = document.querySelector('#genfl');
  const $setumei = document.querySelector('#setumei');

  const $gentTxt = document.querySelector('#gent-text');
  const $gentBox = document.querySelectorAll('#gent-box>div');
  console.log($gentBox);

  const $imgs = document.querySelectorAll('#img>div');


  $fullLogo.classList.replace('opa-0', 'opa-1')
  window.addEventListener('scroll' , () => {

    // console.log($sec[3].getBoundingClientRect());
    console.log(scrollY);
    console.log(document.body.getClientRects());

    if (scrollY >= 100) {
    $fullLogo.classList.replace('opa-1', 'opa-0')
  } else {
    $fullLogo.classList.replace('opa-0', 'opa-1')
  }

  if (scrollY >= 400) {
    $blue.classList.replace('wid0','wid47');
    setInterval(() => {
      $celes.classList.replace('opa-0','opa-1');
      $celes.style.transform = "scale(1.1)";
    }, 500);
    setInterval(() => {
      $celH2.style.opacity = 1;
      $celP.style.opacity = 1;
    }, 1000);
  }

  if (scrollY >= 1100) {
    $red.classList.replace('hei0','hei80');
    setInterval(() => {
      $alarose.classList.replace('opa-0','opa-1');
      $alarose.style.transform = "scale(1.1)";
    }, 500);
    setInterval(() => {
      $alaH2.style.opacity = 1;
      $alaP.style.opacity = 1;
    }, 1000);
  }

  if (scrollY >= 2200) {
    $gold.classList.replace('wid0','wid100');
    setInterval(() => {
      $genfl.classList.replace('opa-0','opa-1');
      $genfl.classList.add('bo-rad35');
      $gentTxt.classList.replace('opa-0','opa-1');
      for(let i = 0; i<$gentBox.length; i++) {
        setInterval(() => {
          $gentBox[i].classList.replace('opa-0','opa-1');
        }, (500) * (i+1));
      }
      }, 800);
      
  }

  if (scrollY >= 2900) {
    $setumei.classList.replace('opa-0','opa-1');
    $setumei.style.top = "50vh";
  }

  if (scrollY >= 3000) {
    for(let i = 0; i < $imgs.length; i++) {
      setInterval(() => {
        $imgs[i].classList.replace('opa-0','opa-1');
        $imgs[i].style.top = "-50vh";
      }, (500) * (i+1));
    }
  }

  })


})