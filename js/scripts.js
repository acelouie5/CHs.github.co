/*!
* Start Bootstrap - Agency v7.0.10 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', _event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});



document.addEventListener('DOMContentLoaded', () => {
  const chatInput = document.querySelector(".chat-input textarea");
  const sendChatBtn = document.querySelector(".chat-input span");
  const chatbox = document.querySelector(".chatbox");
  const chatbotToggler = document.querySelector(".chatbot-toggler")
  const chatbotCloseBtn = document.querySelector(".close-btn")
  let userMessage;

  const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p></p>` : ` <img src="assets/img/team/balats.jpg" alt=""><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi;
  }

  const generateResponse = (incomingChatLi) => {
    const messageElement = incomingChatLi.querySelector("p");
    const message = userMessage.toLowerCase();

    if (message.includes("malware")) {
      messageElement.textContent = "Malware is a general term for any malicious software or program that can harm your computer or network.";
    } else if (message.includes("virus")) {
      messageElement.textContent = "A virus is a type of malware that can replicate itself and infect other files, programs, or systems.";
    } else if (message.includes("worm")) {
      messageElement.textContent ='A worm is a standalone malware program that replicates itself to spread across networks or systems, often causing harm by consuming system resources or slowing down networks.';
    } else if (message.includes("trojan horse")) {
      messageElement.textContent='A Trojan horse is a type of malware disguised as legitimate software. It tricks users into installing or executing it, allowing unauthorized access to their systems.';
    } else if (message.includes("adware")) {
      messageElement.textContent='Adware is a type of malware that displays unwanted advertisements on a user\'s device. It is often bundled with free software and can collect user data without consent.';
    } else if (message.includes("spyware")) {
      messageElement.textContent = 'Spyware is a type of malware that secretly gathers user information and activities without their knowledge. It can monitor keystrokes, capture screenshots, and collect personal data.';
    
    } else {
      messageElement.textContent = "I'm sorry, I don't have information about that. Can I assist you with something else?";
    }

    chatbox.scrollTo(0, chatbox.scrollHeight);
  }

  const handleChat = () => {
    userMessage = chatInput.value.trim();
    if (!userMessage) return;
    chatInput.value = "";

    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    setTimeout(() => {
      const incomingChatLi = createChatLi("Thinking...", "incoming");
      chatbox.appendChild(incomingChatLi);
      chatbox.scrollTo(0, chatbox.scrollHeight);
      generateResponse(incomingChatLi);
    }, 600);
  }

  sendChatBtn.addEventListener("click", handleChat);
  chatbotToggler.addEventListener("click",() => document.body.classList.toggle("show-chatbot"));
chatbotCloseBtn.addEventListener("click",() => document.body.classList.remove("show-chatbot"));
});






