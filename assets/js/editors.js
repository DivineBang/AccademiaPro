function changeContent(event, circleNumber) {
    const leftImg = document.querySelector('.editors__left_img');
    const editorsName = document.getElementById('editorsName');
    const editorsColumnText = document.getElementById('editorsColumnText');
    
    

    // Имитация данных для изменения
    let imgSrc, name, columnText;

    switch (circleNumber) {
        case 1:
            imgSrc = 'assets/img/migliori_2.png';
            name = 'Francesca Russo';
            columnText = "Francesca Russo è la nostra esperta dedicata alla stesura di corsi accademici. Con una laurea in Scienze della Comunicazione e una passione per la didattica, Francesca combina creatività e precisione nelle sue creazioni accademiche.La sua combinazione di creatività, approccio interattivo e competenza tematica la rende ideale per coloro che cercano assistenza nella stesura di corsi coinvolgenti.";
           
            
            break;
        case 2:
            imgSrc = 'assets/img/migliori_3.png';
            name = 'Giulia Conti';
            columnText = "Giulia Conti è la nostra esperta dedicata alla stesura di dissertazioni triennali. Con un background accademico solido in Scienze Sociali e Filosofia, Giulia possiede una profonda conoscenza delle metodologie di ricerca e una passione per l'analisi approfondita. ";
            
          
            break;
        case 3:
            imgSrc = 'assets/img/migliori_4.png';
            name = 'Elena Marini';
            columnText = "Elena Marini è la nostra esperta dedicata alla stesura di tesi di laurea. Con una laurea in Lettere Moderne e una vasta esperienza nel campo dell'editoria accademica, Elena possiede una profonda comprensione delle aspettative accademiche e una passione per la ricerca avanzata.";
           
          
            break;
        case 4:
            imgSrc = 'assets/img/migliori_5.png';
            name = 'Chiara Morelli';
            columnText = "Chiara Morelli è la nostra esperta dedicata alla stesura di tesi di laurea magistrale. Con una laurea in Filosofia e un master in Scienze Sociali, Chiara possiede una vasta conoscenza e un'esperienza approfondita nel campo della ricerca accademica avanzata. La sua dedizione alla ricerca avanzata, la raffinatezza analitica e la gestione aggiornata delle fonti la rendono una guida autorevole per gli studenti impegnati nella stesura di dissertazioni di alto livello.";
           
          
            break;
        case 5:
            imgSrc = 'assets/img/migliori_6.png';
            name = 'Marco Ferero';
            columnText = "Marco Ferero è il nostro esperto dedicato alla stesura di tesi di dottorato. Con un background accademico in Fisica Teorica e una vasta esperienza nella ricerca avanzata, Marco è un punto di riferimento per coloro che perseguono l'eccellenza accademica a livello dottorale.";
           
          
            break;
        case 6:
            imgSrc = 'assets/img/migliori_7.png';
            name = 'Gabriele Lombardi';
            columnText = "Gabriele Lombardi è il nostro consulente di fiducia per la stesura di lavori scientifici. La sua esperienza nella ricerca, l'approccio sperimentale e il contributo alla comunità scientifica fanno di lui un professionista altamente qualificato per progetti accademici che richiedono una base solida di competenze scientifiche.";
           
          
            break;
        default:
            break;
    }

    // Применение изменений
    leftImg.src = imgSrc;
    editorsName.textContent = name;
    editorsColumnText.textContent = columnText;
   

    // Удаление класса editors__circle_active у всех элементов
    document.querySelectorAll('.editors__circle').forEach(circle => {
        circle.classList.remove('editors__circle_active');
    });

    // Добавление класса editors__circle_active к выбранному элементу
    const selectedCircle = event.currentTarget;
    selectedCircle.classList.add('editors__circle_active');
}
