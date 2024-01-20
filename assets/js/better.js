function changeContent(event, circleNumber) {
    const leftImg = document.querySelector('.better__left_img');
    const betterName = document.getElementById('betterName');
    const betterColumnText = document.getElementById('betterColumnText');
    const betterColumnText2 = document.getElementById('betterColumnText2');
    const betterColumnText3 = document.getElementById('betterColumnText3');
    

    // Имитация данных для изменения
    let imgSrc, name, columnText, columnText2, columnText3;

    switch (circleNumber) {
        case 1:
            imgSrc = 'assets/img/migliori_1.png';
            name = 'Marta Rossi';
            columnText = 'Profondità Accademica: Marta Rossi, laureata con lode in Letteratura Comparata, è la nostra risorsa più preziosa per progetti accademici. La sua vasta conoscenza e la sua capacità di analisi critica sono strumenti fondamentali per garantire la qualità dei lavori.';
            columnText2 = 'Precisione e Attento Controllo di Qualità: Marta è rinomata per la sua attenzione ai dettagli. Ogni suo intervento è caratterizzato da un controllo di qualità meticoloso, assicurando che ogni lavoro soddisfi gli standard più elevati e le aspettative del cliente.';
            columnText3 = 'Empatia e Supporto Personalizzato: Marta non è solo una redattrice straordinaria ma anche una guida premurosa. La sua capacità di instaurare un rapporto empatico con gli studenti le consente di offrire un supporto personalizzato, comprendendo appieno le esigenze di ciascun cliente e garantendo la massima soddisfazione.';
            
            break;
        case 2:
            imgSrc = 'assets/img/migliori_8.png';
            name = 'Antonio Bianchi';
            columnText = "Eccellenza nella Ricerca: Antonio Bianchi, laureato con dottorato in Scienze Sociali, porta una vasta esperienza nella ricerca accademica. La sua abilità nel trovare fonti autorevoli e nel sintetizzare informazioni complesse contribuisce in modo significativo all'originalità e alla profondità dei progetti accademici.";
            columnText2 = 'Creatività e Originalità: Antonio è noto per la sua creatività e originalità nel pensiero. Ogni suo contributo aggiunge un tocco unico e innovativo ai progetti, garantendo che il lavoro si distingua per la sua freschezza e unicità.';
            columnText3 = 'Tempestività e Adattabilità: Antonio è un professionista altamente tempestivo ed efficiente. La sua capacità di adattarsi a diverse discipline e di rispondere rapidamente alle esigenze dei clienti fa di lui una risorsa chiave per progetti accademici con scadenze serrate.';
          
            break;
        case 3:
            imgSrc = 'assets/img/migliori_9.png';
            name = 'Marco De Luca';
            columnText = "Maestria Tecnica e Informatica: Marco De Luca, esperto nella gestione delle tecnologie informatiche, è un pilastro nella nostra squadra. La sua maestria tecnica assicura che ogni progetto sia supportato da soluzioni tecnologiche all'avanguardia, migliorando l'efficienza e la qualità complessiva del lavoro.";
            columnText2 = 'Efficienza Operativa e Gestione del Tempo: Marco è noto per la sua efficienza operativa e la gestione impeccabile del tempo. La sua capacità di mantenere gli standard di qualità elevati anche nelle situazioni più impegnative è una risorsa inestimabile per il completamento tempestivo dei progetti.';
            columnText3 = "Collaborazione Interdisciplinare: Marco eccelle nella collaborazione interdisciplinare. La sua capacità di lavorare in sinergia con diverse competenze all'interno del team consente di integrare armoniosamente aspetti tecnologici nei progetti accademici, offrendo un approccio olistico.";
          
            break;
        default:
            break;
    }

    // Применение изменений
    leftImg.src = imgSrc;
    betterName.textContent = name;
    betterColumnText.textContent = columnText;
    betterColumnText2.textContent = columnText2;
    betterColumnText3.textContent = columnText3;
    

    // Удаление класса better__circle_active у всех элементов
    document.querySelectorAll('.better__circle').forEach(circle => {
        circle.classList.remove('better__circle_active');
    });

    // Добавление класса better__circle_active к выбранному элементу
    const selectedCircle = event.currentTarget;
    selectedCircle.classList.add('better__circle_active');
}
