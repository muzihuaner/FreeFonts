document.addEventListener('DOMContentLoaded', () => {
    fetch('fonts.json')
      .then(response => response.json())
      .then(data => {
        const fontsList = document.getElementById('fonts-list');
        data.forEach(font => {
          const listItem = document.createElement('li');
          listItem.className = 'list-group-item';
          
          const card = document.createElement('div');
          card.className = 'card card-custom';
          
          const cardBody = document.createElement('div');
          cardBody.className = 'card-body';
          
          const fontName = document.createElement('h5');
          fontName.className = 'card-title';
          fontName.textContent = font.name;
          
          const fontLink = document.createElement('a');
          fontLink.className = 'btn';
          fontLink.href = font.url;
          fontLink.textContent = '下载字体';
          fontLink.target = '_blank';
          
          const fontLicense = document.createElement('p');
          fontLicense.className = 'card-text';
          fontLicense.textContent = `${font.license}`;
          
          cardBody.appendChild(fontName);
          cardBody.appendChild(fontLink);
          cardBody.appendChild(fontLicense);
          
          card.appendChild(cardBody);
          listItem.appendChild(card);
          fontsList.appendChild(listItem);
        });
      })
      .catch(error => console.error('Error fetching fonts:', error));
  });
  