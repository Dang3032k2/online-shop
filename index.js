document
        .getElementById('navbar-menu')
        .addEventListener('click', function () {
          var drawer = document.getElementById('drawer');
          var overlay = document.getElementById('overlay');
          drawer.style.display = 'block';
          overlay.style.display = 'block';
          document.body.style.overflowY = 'hidden';
        });
      document
        .getElementById('close-drawer')
        .addEventListener('click', function () {
          var drawer = document.getElementById('drawer');
          var overlay = document.getElementById('overlay');
          drawer.style.display = 'none';
          overlay.style.display = 'none';
          document.body.style.overflowY = 'unset';
        });
      document
        .getElementById('close-icon')
        .addEventListener('click', function () {
          var orderMessage = document.getElementById('order-success');
          orderMessage.style.display = 'none';
        });
      function openSearch(searchBtn) {
        var searchInpElement = searchBtn.previousElementSibling;
        var closeSearchInpElement = searchBtn.nextElementSibling;
        var navbarSearchElement = searchBtn.parentNode;
        var flagElement = navbarSearchElement.previousElementSibling;
        var cartElement = navbarSearchElement.nextElementSibling;
        searchBtn.style.display = 'none';
        closeSearchInpElement.style.display = 'unset';
        flagElement.style.display = 'none';
        cartElement.style.display = 'none';
        searchInpElement.style.width = '80%';
        searchInpElement.style.border = '1px solid #99a9b5';
      }
      function closeSearch(closeSearchBtn) {
        var openSearchInpElement = closeSearchBtn.previousElementSibling;
        var searchInpElement = openSearchInpElement.previousElementSibling;
        var navbarSearchElement = closeSearchBtn.parentNode;
        var flagElement = navbarSearchElement.previousElementSibling;
        var cartElement = navbarSearchElement.nextElementSibling;
        closeSearchBtn.style.display = 'none';
        openSearchInpElement.style.display = 'unset';
        flagElement.style.display = 'unset';
        cartElement.style.display = 'flex';
        searchInpElement.style.width = '0';
        searchInpElement.style.border = 'none';
        searchInpElement.value = '';
      }