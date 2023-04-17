const translations = {
    en: {
      home: "Home",
      services: "Services",
      subsidiaries: "Subsidiaries",
      contact: "Contact",
      welcome: "Welcome to UFO Epic Solutions",
      intro: "We are a parent company specializing in technology and IT services.",
      ufoStore: "Ufo Store",
      ufoStoreDesc: "Sales of notebooks, PCs, and technical service for retailers.",
      ufoNetwork: "UFO Network & IT Services",
      ufoNetworkDesc: "Network installation services and IT services provider.",
      ufoSoftware: "UFO Software Solutions",
      ufoSoftwareDesc: "Application development, websites, and provision of programmers by the hour.",
      currentYear: "2023",
    },
    es: {
      home: "Inicio",
      services: "Servicios",
      subsidiaries: "Subsidiarias",
      contact: "Contacto",
      welcome: "Bienvenido a UFO Epic Solutions",
      intro: "Somos una empresa matriz que se especializa en tecnología y servicios de TI.",
      ufoStore: "Ufo Store",
      ufoStoreDesc: "Venta de notebooks, PC y servicio técnico a minoristas.",
      ufoNetwork: "UFO Network & IT Services",
      ufoNetworkDesc: "Proveedor de servicios de instalación de redes y servicios de IT.",
      ufoSoftware: "UFO Software Solutions",
      ufoSoftwareDesc: "Desarrollo de aplicaciones, sitios web y provisión de programadores por hora.",
      currentYear: "2023",
    },
  };
  
  function changeLanguage(lang) {
    const elements = document.querySelectorAll("[data-i18n]");
  
    elements.forEach((element) => {
      const key = element.getAttribute("data-i18n");
      const translation = translations[lang][key];
  
      if (translation) {
        element.textContent = translation;
      }
    });
  }
  
  // Establecer el idioma predeterminado al cargar la página
  changeLanguage("es");
  
  // Escuchar eventos de cambio de idioma
  const languageSelect = document.getElementById("languageSelect");
  if (languageSelect) {
    languageSelect.addEventListener("change", (event) => {
      changeLanguage(event.target.value);
    });
  }
  