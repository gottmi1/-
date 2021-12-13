window.addEventListener('load', () => {
  const $sec = document.querySelectorAll('section');
  console.log($sec);
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
  const $texts = document.querySelectorAll('#txt>div');
  console.log($texts)


  $fullLogo.classList.replace('opa-0', 'opa-1')
  
  setInterval(() => {
    if($sec[0].classList.contains('opa-1')) {
      $sec[0].classList.replace('opa-1','opa-0');
      $sec[1].classList.replace('opa-0','opa-1');
    } else {
      $sec[1].classList.replace('opa-1','opa-0');
      $sec[0].classList.replace('opa-0','opa-1');
    }
  }, 3000);


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
      $celH2.style.transform = "scale(1)";
      $celP.style.opacity = 1;
      $celP.style.transform = "scale(1)";
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
      $alaH2.style.transform = "scale(1)";
      $alaP.style.opacity = 1;
      $alaP.style.transform = "scale(1)";
    }, 1000);
  }

  if (scrollY >= 2200) {
    $gold.classList.replace('wid0','wid100');
    setInterval(() => {
      $genfl.classList.replace('opa-0','opa-1');
      $genfl.classList.add('bo-rad35');
      $gentTxt.classList.replace('opa-0','opa-1');
      $gentTxt.style.transform = "scale(1)";
      for(let i = 0; i<$gentBox.length; i++) {
        setInterval(() => {
          $gentBox[i].classList.replace('opa-0','opa-1');
          $gentBox[i].style.transform = "scale(1)";
        }, (700) * (i+1));
      }
      }, 800);
      
  }

  if (scrollY >= 2900) {
    $setumei.classList.replace('opa-0','opa-1');
    $setumei.style.top = "75vh";
  }

  if (scrollY >= 3100) {
    for(let i = 0; i < $imgs.length; i++) {
      setInterval(() => {
        $imgs[i].classList.replace('opa-0','opa-1');
        $texts[i].classList.replace('opa-0','opa-1');
      }, (500) * (i+1));
    }
  }

  })


})