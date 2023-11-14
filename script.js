
function createFAQSection(post, index) {
    const accordion = document.querySelector('.accordion');
    
    
    const title = document.createElement('div');
    title.className = 'title';
    title.textContent = post.title; 
  
    
    const description = document.createElement('div');
    description.className = 'description';
    description.innerHTML = `<p>${post.body}</p>`;
    description.style.display = 'none';
  
    
    title.addEventListener('click', function() {
      const currentlyActive = title.classList.contains('active');
      
      document.querySelectorAll('.title').forEach(function(el) {
        el.classList.remove('active');
      });
      document.querySelectorAll('.description').forEach(function(el) {
        el.style.display = 'none';
      });
      
      if (!currentlyActive) {
        title.classList.add('active');
        description.style.display = 'block';
      } else {
        title.classList.remove('active');
      }
    });
  
    
    accordion.appendChild(title);
    accordion.appendChild(description);
  }
  
  
  function fetchDataAndBuildFAQ() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        
        data.forEach(createFAQSection);
      })
      .catch(error => console.error('Error fetching data:', error));
  }
  
  
  document.addEventListener('DOMContentLoaded', fetchDataAndBuildFAQ);