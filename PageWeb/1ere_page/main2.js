document.addEventListener('DOMContentLoaded', function() {
    console.log('Script chargé');//??

    
    const toggleDarkModeButton = document.getElementById('toggleDarkMode');
    console.log('Bouton sélectionné:', toggleDarkModeButton); 

    
    toggleDarkModeButton.addEventListener('click', function() {
        console.log('Clic détecté'); //  clic détecté?

        
        const body = document.body;

        
        body.classList.toggle('dark-mode');

        //stockage local (localStorage)
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }

        console.log('Mode sombre activé:', body.classList.contains('dark-mode'));
    });

   
    const darkMode = localStorage.getItem('darkMode');
    console.log('Mode sombre stocké:', darkMode); 

    const body = document.body;

    
    if (darkMode === 'enabled') {
        body.classList.add('dark-mode');
    }
});