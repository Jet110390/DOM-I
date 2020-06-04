const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const ctaImg=document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

const middleImg=document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const nav1=document.getElementsByTagName('a')[0];
nav1.textContent= siteContent.nav['nav-item-1'];

const nav2=document.getElementsByTagName('a')[1];
nav2.textContent= siteContent.nav['nav-item-2'];

const nav3=document.getElementsByTagName('a')[2];
nav3.textContent= siteContent.nav['nav-item-3'];

const nav4=document.getElementsByTagName('a')[3];
nav4.textContent= siteContent.nav['nav-item-4'];

const nav5=document.getElementsByTagName('a')[4];
nav5.textContent= siteContent.nav['nav-item-5'];

const nav6=document.getElementsByTagName('a')[5];
nav6.textContent= siteContent.nav['nav-item-6'];

const ctaH1=document.querySelector('h1');
ctaH1.textContent=siteContent.cta['h1'];

const button=document.querySelector('button');
button.textContent=siteContent.cta['button'];

const h4_feat=document.getElementsByTagName('h4')[0];
h4_feat.textContent=siteContent["main-content"]["features-h4"];

const p_F=document.getElementsByTagName('p')[0];
p_F.textContent=siteContent["main-content"]["features-content"];

const h4_about=document.getElementsByTagName('h4')[1];
h4_about.textContent=siteContent["main-content"]["about-h4"];

const p_A=document.getElementsByTagName('p')[1];
p_A.textContent=siteContent["main-content"]["about-content"];

const h4_services=document.getElementsByTagName('h4')[2];
h4_services.textContent=siteContent["main-content"]["services-h4"];

const p_S=document.getElementsByTagName('p')[2];
p_S.textContent=siteContent["main-content"]["services-content"];

const h4_product=document.getElementsByTagName('h4')[3];
h4_product.textContent=siteContent["main-content"]["product-h4"];

const p_P=document.getElementsByTagName('p')[3];
p_P.textContent=siteContent["main-content"]["product-content"];

const h4_vision=document.getElementsByTagName('h4')[4];
h4_vision.textContent=siteContent["main-content"]["vision-h4"];

const p_V=document.getElementsByTagName('p')[4];
p_V.textContent=siteContent["main-content"]["vision-content"];

const h4_contact=document.getElementsByTagName('h4')[5];
h4_contact.textContent=siteContent['contact']['contact-h4'];

const p_1=document.getElementsByTagName('p')[5];
p_1.textContent=siteContent["contact"]["address"];

const p_2=document.getElementsByTagName('p')[6];
p_2.textContent=siteContent["contact"]["phone"];

const p_3=document.getElementsByTagName('p')[7];
p_3.textContent=siteContent["contact"]["email"];

const p_CopyR=document.getElementsByTagName('p')[8];
p_CopyR.textContent=siteContent["footer"]["copyright"];


nav1.style.color="green";
nav2.style.color="green";
nav3.style.color="green";
nav4.style.color="green";
nav5.style.color="green";
nav6.style.color="green";





