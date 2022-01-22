window.addEventListener('scroll', function() {

  var mainHeight = document.getElementById("main-section").getBoundingClientRect().top;
  var portfolioHeight = document.getElementById("title-projects").getBoundingClientRect().top;
  var aboutHeight = document.getElementById("about-section").getBoundingClientRect().top;
  var contactHeight = document.getElementById("contact-section").getBoundingClientRect().top;
  var clientHeight = document.body.scrollTop;

  if(clientHeight > (contactHeight - 500)) {
    $('#homeNav').removeClass("active");
    $('#portfolioNav').removeClass("active");
    $('#aboutNav').removeClass("active");
    $('#contactNav').addClass("active");
  } else if (clientHeight > (aboutHeight - 100)) {
      $('#homeNav').removeClass("active");
      $('#portfolioNav').removeClass("active");
      $('#aboutNav').addClass("active");
      $('#contactNav').removeClass("active");
  } else if (clientHeight > (portfolioHeight - 200)) {
      $('#homeNav').removeClass("active");
      $('#portfolioNav').addClass("active");
      $('#aboutNav').removeClass("active");
      $('#contactNav').removeClass("active");
  } else {
      $('#homeNav').addClass("active");
      $('#portfolioNav').removeClass("active");
      $('#aboutNav').removeClass("active");
      $('#contactNav').removeClass("active");
  }
});

var arrLang = {
  'en': {
    'home' : 'Home',
    'portfolio' : 'Portfolio',
    'about' : 'About',
    'contact' : 'Contact',

    'contactForm' : '<form class="row contact_form" action="contact_process.php" method="post" id="contactForm"><div class="col-md-6"><div class="form-group"><input type="text" class="form-control" id="name" name="name" placeholder="Enter your name" maxlenght="30" pattern="^[A-Za-z \'-]+$" required></div><div class="form-group"><input type="email" class="form-control" id="email" name="email" placeholder="Enter email address" required></div><div class="form-group"><input type="text" class="form-control" id="subject" name="subject" placeholder="Enter Subject" maxlenght="40" required> </div> </div> <div class="col-md-6"> <div class="form-group"> <textarea class="form-control" name="message" id="message" rows="1" placeholder="Enter Message" maxlenght="3000" required></textarea></div></div><div class="col-md-12 text-right"><button type="submit" value="submit" class="primary_btn"><span>Send Message</span></button></div><input type="hidden" name="recaptcha_response" id="recaptchaResponse"></form>',

    'title1': '3RD ENGINEER SCHOOL',
    'title2': 'FULL STACK JUNIOR DEVELOPER',
    'projects': 'Projects',

    'WI2T': 'Web Internship #2',
    'WI2TD': 'Web Development & Design in a Marketplace',

    'WIT': 'Web Internship #1',
    'WID': 'Development of a web application about Quality Indicators',

    'CPT': 'Car Project',
    'CPD': 'Pathfinding robot',

    'WPT': 'Website Project',
    'WPD': 'School Web Site Project',

    'GPT': 'Game Project',
    'GPD': 'Java Development Game Project : Lorann',

    'NPT': 'Network Project',
    'NPD': 'Virtual Network School Project',

    'UMPT': 'Ulchero Music Project',
    'UMPD': 'My music producer alias',

    'AboutTitle' : 'About Me',
    'AboutSection1' : 'Hello, I\’m a 20-year-old student from France. I am looking for a web design internship position. I\’m currently in 3rd year IT engineering school at CESI in Saint-Nazaire, France. This semester, my learning was mainly focused in web development and networking. My first 2 years were mostly focused on mathematics and physics.',
    'AboutSection2' : 'I already made 3 internships in web design and development at different companies. I love to create special web applications with specific needs and communicate with clients.',

    'ContactPhone' : 'French phone number',

    'Destok' : '<b>Thirds Internship at <a class="stopblue" href="http://destockage-habitat.com" target="_blank">Destockage Habitat</a> : </b> <br><br>Learning Docker Software and JS Libraries in an e-commerce web project.',
    'Spi' : '<b> My first two internships at <a class="stopblue" href="https://www.spi-groupe.com/fr/" target="_blank">SPI Groupe</a> : </b> <br>[Project Management] Creation of a Web application for quality indicators. Understanding of a customer request (IT Solution).',
    'Car' : 'As part of my school projects, we made a Pathfinding robot. The car had to be equipped with sensor to follow a line.<br>The car should be able to park itself. Finally, a pathfinding algorithm has been implemented to establish the shortest path between two coordinates on a map.',
    'Website' : '<b> First Website Development </b> <br><br>We had to recreate a website for our school (an online store, user accounts, administrators, ...).This project required skills in HTML5, CSS, PHP, SQL, and Javascript.',
    'Lorann' : '<b>Small Java Game Development : </b> <br><br> Here is the Lorann project, it was a group project (Group of 4) where the objective was to recreate a video game in Java (based on Lorann, a 1985 video game). This project ensured that we all had a perfect understanding of Object programming and that we had enough knowledge to create a small AI. It was necessary to integrate a database too.',
    'Network' : '<b>Virtual Network Project : </b> <br><br> I worked on a virtualization project. This project consisted of configuring different servers to host a website in a network. Bash scripts were requested in order to maintain our websites.',
    'Ulchero' : '<b>Music Producer Poject <a class="stopblue" href="https://soundcloud.com/ulchero" target="_blank">Ulchero</a> </b> <br> Networking management. Collaboration with people from all over the world.',

    'mailMessage' : 'Thanks for your time. I\'ll check your message as soon as possible.',
    'buttons' : '<a class="primary_btn" href="rcs/resume.pdf" target="_blank"><span>Resume</span></a><a class="primary_btn" href="rcs/cover-letter.pdf" target="_blank"><span >Cover Letter</span></a>'
  },


  'fr': {
    'home' : 'Accueil',
    'portfolio' : 'Portfolio',
    'about' : 'à propos de moi',
    'contact' : 'Contact',

    'contactForm' : '<form class="row contact_form" action="contact_process.php" method="post" id="contactForm"><div class="col-md-6"><div class="form-group"><input type="text" class="form-control" id="name" name="name" placeholder="Nom" maxlenght="30" pattern="^[A-Za-z \'-]+$" required></div><div class="form-group"><input type="email" class="form-control" id="email" name="email" placeholder="Email" required></div><div class="form-group"><input type="text" class="form-control" id="subject" name="subject" placeholder="Sujet" maxlenght="40" required> </div> </div> <div class="col-md-6"> <div class="form-group"> <textarea class="form-control" name="message" id="message" rows="1" placeholder="Message" maxlenght="3000" required></textarea></div></div><div class="col-md-12 text-right"><button type="submit" value="submit" class="primary_btn"><span>Envoyer</span></button></div><input type="hidden" name="recaptcha_response" id="recaptchaResponse"></form>',

    'title1': 'INGÉNIEUR INFORMATIQUE EN 3èME ANNÉE',
    'title2': 'FULL STACK DÉVELOPPEUR WEB',
    'projects': 'Projets',

    'WI2T': 'Stage Web #2',
    'WI2TD': 'Développement web dans une entreprise de marketplace',

    'WIT': 'Stage Web #1',
    'WID': 'Développement d\'une application web à propos d\'indicateurs qualités',

    'CPT': 'Projet Voiture',
    'CPD': 'Robot voiture avec Pathfinding',

    'WPT': 'Projet Site Web',
    'WPD': 'Projet scolaire de développement web',

    'GPT': 'Projet de jeu',
    'GPD': 'Développement d\'un jeu en java : Lorann',

    'NPT': 'Projet Réseau',
    'NPD': 'Projet scolaire de réseau virtuel',

    'UMPT': 'Projet de musique Ulchero',
    'UMPD': 'Producteur de musique électronique/pop',

    'AboutTitle' : 'à propos de moi',
    'AboutSection1' : 'Bonjour, je suis un étudiant de 20 ans à la recherche d’un stage dans le domaine du développement web. Je suis actuellement en 3ème année d\'école d\'ingénieur informatique au CESI à Saint-Nazaire, France. Ce semestre, mon apprentissage s\'est principalement concentré sur le développement web et le réseautage. Mes 2 premières années d’étude ont été axées sur les mathématiques et la physique.',
    'AboutSection2' : 'J\'ai déjà effectué 3 stages en conception et développement d’applications web. J\'aime créer des sites internet avec des besoins spécifiques et communiquer avec les clients pour comprendre leurs besoins.',

    'ContactPhone' : '',

    'Destok' : '<b>Troisième stage chez <a class="stopblue" href="http://destockage-habitat.com" target="_blank">Destockage Habitat</a> : </b> <br><br>Apprentissage du logiciel Docker ainsi que de plusieurs librairies JavaScript dans l’univers de développement d’une société de e-commerce.',
    'Spi' : '<b> Mes deux premiers stages chez <a class="stopblue" href="https://www.spi-groupe.com/fr/" target="_blank">SPI Groupe</a> : </b> <br>[Management de projet] Création d’une application web afin d\'agglomérer des données d\'indacteurs qualités. Compréhension d’une demande client (solution informatique).',
    'Car' : 'Lors d\'un projet scolaire en équipe de 4, nous avons créé une voiture robot implémentant un Pathfinding. La voiture était équipé de différents capteurs. Elle devait être capable de se garer lorsqu\'elle trouvait une place de parking libre.<br> D\'autre part, un algrorithme de pathfinding a été développé afin de permettre au robot de pouvoir se déplacer en trouvant le plus court chemin sur une carte donnée.',
    'Website' : '<b> Premier Développement d\'un site web </b> <br><br>En équipe de 4, nous devions créer un site web pour le BDE de notre école (boutique, gestion d\'utilisateurs, administration, ...). Ce projet m\'a fait décrouvir des languages comme HTML5, CSS, PHP, SQL, and Javascript.',
    'Lorann' : '<b>Développement d\'un petit jeu vidéo en java : </b> <br><br> Nous devions recréer un jeu vidéo en Java (basé sur Lorann, un jeu de 1985).',
    'Network' : '<b> Projet Réseau : </b> <br><br> J\'ai eu la chance de travailler sur un projet scolaire de réseau virtuel. Ce projet consistait à configurer différents serveurs afin d\'héberger un site web (Virtualisation).',
    'Ulchero' : '<b> Projet producteur de musique <a class="stopblue" href="https://soundcloud.com/ulchero" target="_blank">Ulchero</a> </b> <br> Management d\'un Network. Collaboration et contact avec des gens du monde entier.',

    'mailMessage' : 'Merci. Je vous contacterai dès que possible.',
    'buttons' : '<a class="primary_btn" href="rcs/resume-french.pdf" target="_blank"><span>CV</span></a><a class="primary_btn" href="rcs/cover-letter-french.pdf" target="_blank"><span >Lettre de motivation</span></a>'
  },


  'jp': {
    'home' : 'ホーム',
    'portfolio' : 'ポートフォリオ',
    'about' : '私について',
    'contact' : 'コンタック',

    'contactForm' : '<form class="row contact_form" action="contact_process.php" method="post" id="contactForm"><div class="col-md-6"><div class="form-group"><input type="text" class="form-control" id="name" name="name" placeholder="名前" maxlenght="30" pattern="^[A-Za-z \'-]+$" required></div><div class="form-group"><input type="email" class="form-control" id="email" name="email" placeholder="Eメール" required></div><div class="form-group"><input type="text" class="form-control" id="subject" name="subject" placeholder="件名" maxlenght="40" required> </div> </div> <div class="col-md-6"> <div class="form-group"> <textarea class="form-control" name="message" id="message" rows="1" placeholder="メッセージ" maxlenght="3000" required></textarea></div></div><div class="col-md-12 text-right"><button type="submit" value="submit" class="primary_btn"><span>参加する</span></button></div><input type="hidden" name="recaptcha_response" id="recaptchaResponse"></form>',

    'title1': '3年目のITエンジニア',
    'title2': 'フルスタックのウェブ開発者',
    'projects': 'プロジェクト',

    'WI2T': 'Webのステージ #2',
    'WI2TD': '市場企業でのWeb開発',

    'WIT': 'Webのステージ #1',
    'WID': '品質指標に関するウェブアプリケーションの開発',

    'CPT': '自動車プロジェクト',
    'CPD': 'パスファインディング付きロボットカー',

    'WPT': '自動車プロジェクトプロジェクト',
    'WPD': '学校ウェブ開発プロジェクト',

    'GPT': 'ゲームプロジェクト',
    'GPD': 'Javaゲームの開発：Lorann',

    'NPT': 'ネットワークプロジェクト',
    'NPD': '仮想ネットワーク学校プロジェクト',

    'UMPT': '音楽プロジェクト Ulchero',
    'UMPD': '電子音楽プロデューサー',

    'AboutTitle' : '私について',
    'AboutSection1' : 'こんにちは、私は20歳の学生で、ウェブ開発のインターンシップを探しています。 私は現在、フランスのサンナゼールにあるCESIのコンピュータエンジニアリングスクールの3年生です。 今学期、私の学習は主にWeb開発とネットワーキングに焦点を当てました。 私の最初の2年間の研究は数学と物理学に焦点を合わせました。',
    'AboutSection2' : '私はすでにWebアプリケーションの設計と開発の3つのインターンシップを完了しています。 特定のニーズを備えたウェブサイトを作成し、クライアントとコミュニケーションを取り、彼らのニーズを理解するのが好きです。',

    'ContactPhone' : 'フランスの電話番号',

    'Destok' : '<b>Troisième stage chez <a class="stopblue" href="http://destockage-habitat.com" target="_blank">Destockage Habitat</a> : </b> <br><br>Apprentissage du logiciel Docker ainsi que de plusieurs librairies JavaScript dans l’univers de développement d’une société de e-commerce.',
    'Spi' : '<b> Mes deux premiers stages chez <a class="stopblue" href="https://www.spi-groupe.com/fr/" target="_blank">SPI Groupe</a> : </b> <br>[Management de projet] Création d’une application web afin d\'agglomérer des données d\'indacteurs qualités. Compréhension d’une demande client (solution informatique).',
    'Car' : 'Lors d\'un projet scolaire en équipe de 4, nous avons créé une voiture robot implémentant un Pathfinding. La voiture était équipé de différents capteurs. Elle devait être capable de se garer lorsqu\'elle trouvait une place de parking libre.<br> D\'autre part, un algrorithme de pathfinding a été développé afin de permettre au robot de pouvoir se déplacer en trouvant le plus court chemin sur une carte donnée.',
    'Website' : '<b> Premier Développement d\'un site web </b> <br><br>En équipe de 4, nous devions créer un site web pour le BDE de notre école (boutique, gestion d\'utilisateurs, administration, ...). Ce projet m\'a fait décrouvir des languages comme HTML5, CSS, PHP, SQL, and Javascript.',
    'Lorann' : '<b>Développement d\'un petit jeu vidéo en java : </b> <br><br> Nous devions recréer un jeu vidéo en Java (basé sur Lorann, un jeu de 1985).',
    'Network' : '<b> Projet Réseau : </b> <br><br> J\'ai eu la chance de travailler sur un projet scolaire de réseau virtuel. Ce projet consistait à configurer différents serveurs afin d\'héberger un site web (Virtualisation).',
    'Ulchero' : '<b> Projet producteur de musique <a class="stopblue" href="https://soundcloud.com/ulchero" target="_blank">Ulchero</a> </b> <br> Management d\'un Network. Collaboration et contact avec des gens du monde entier.',

      'mailMessage' : 'ありがとうございました。 できるだけ早くご連絡いたします。',
    'buttons' : '<a class="primary_btn" href="rcs/resume.pdf" target="_blank"><span>履歴書</span></a><a class="primary_btn" href="rcs/cover-letter.pdf" target="_blank"><span >カバーレター</span></a>'
  }
};

loadAll(accessCookie('lang'));

// Process translation
$(function() {
  $('.translate').on('touchstart click', function() {
    var lang = $(this).attr('id');
    document.cookie = "lang=" + lang;
    loadAll(lang);
  });
});

function loadAll(lang) {
  $('.lang').each(function(index, item) {
    $(this).html(arrLang[lang][$(this).attr('key')]);
  });
  if(lang == "fr") {
    $('#frLang').addClass("activeLang");
    $('#enLang').removeClass("activeLang");
    $('#jpLang').removeClass("activeLang");
  } else if(lang == "jp") {
    $('#frLang').removeClass("activeLang");
    $('#enLang').removeClass("activeLang");
    $('#jpLang').addClass("activeLang");
  } else {
    $('#frLang').removeClass("activeLang");
    $('#enLang').addClass("activeLang");
    $('#jpLang').removeClass("activeLang");
  }
}

function deleteCookie() {
  document.cookie = "alert_email= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
  document.cookie = "error_email= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
}

function moveToTop() {
  var element = document.getElementById("main-section");
  moveTo(element);
}

function moveToPortofolio() {
  var element = document.getElementById("title-projects");
  moveTo(element);
}

function moveToAbout() {
  var element = document.getElementById("about-section");
  moveTo(element);
}

function moveToContact() {
  var element = document.getElementById("contact-section");
  moveTo(element);
}

function moveTo(element) {
  element.scrollIntoView({ behavior: 'smooth' });
  $('#navButtonBen').attr('aria-expanded','false');
  $('#navButtonBen').addClass("collapsed")
  $('#navbarSupportedContent').removeClass("show")
}

function showUlchero() {
  $("#button-close-project").css('display','block');
  $("#content_project").load("ulchero.html", function() {
    scrollIntoViewPortfolio();
    fillContent('Ulchero', 'UMPT');
  });
}

function showNetwork() {
  $("#button-close-project").css('display','block');
  $("#content_project").load("network.html", function() {
    scrollIntoViewPortfolio();
    fillContent('Network', 'NPT');
  });
}

function showLorann() {
  $("#button-close-project").css('display','block');
  $("#content_project").load("lorann.html", function() {
    scrollIntoViewPortfolio();
    fillContent('Lorann', 'GPT');
  });
}

function showWebsite() {
  $("#button-close-project").css('display','block');
  $("#content_project").load("website.html", function() {
    scrollIntoViewPortfolio();
    fillContent('Website', 'WPT');
  });
}

function showCar() {
  $("#button-close-project").css('display','block');
  $("#content_project").load("car.html", function() {
    scrollIntoViewPortfolio();
    fillContent('Car', 'CPT');
  });
}

function showSpi() {
  $("#button-close-project").css('display','block');
  $("#content_project").load("spi.html", function() {
    scrollIntoViewPortfolio();
    fillContent('Spi' , 'WIT');
  });
}

function showDestock() {
  $("#button-close-project").css('display','block');
  $("#content_project").load("destockagehabitat", function() {
    scrollIntoViewPortfolio();
    fillContent('Destok', 'WI2T');
  });
}

function fillContent(content, title){
  var lang = accessCookie('lang');
  $("#contentToFill").html(arrLang[lang][content]);
  $("#titleContent").html(arrLang[lang][title]);
}

function scrollIntoViewPortfolio() {
  var element = document.getElementById("portfolio-content");
  element.scrollIntoView({ behavior: 'smooth' });
}

function closeProject() {
  var element = document.getElementById("title-projects");
  element.scrollIntoView({ behavior: 'smooth' });
  setTimeout(resetDiv, 400)
}

function resetDiv() {
  $("#button-close-project").css('display','none');
  document.getElementById("content_project").innerHTML='';
}

function accessCookie(cookieName)
{
  var name = cookieName + "=";
  var allCookieArray = document.cookie.split(';');
  for(var i=0; i<allCookieArray.length; i++)
  {
    var temp = allCookieArray[i].trim();
    if (temp.indexOf(name)==0)
    return temp.substring(name.length,temp.length);
	}
	return "";
}
