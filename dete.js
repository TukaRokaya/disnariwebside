// converter.js

document.getElementById('dateConverterForm').addEventListener('submit', function (e) {
    e.preventDefault(); // फर्म सबमिट हुन रोक्ने

    // प्रयोगकर्ताबाट मिति लिने
    const englishDateInput = document.getElementById('englishDate').value;
    if (!englishDateInput) {
        alert('कृपया मान्य मिति छान्नुहोस्।');
        return;
    }

    const englishDate = new Date(englishDateInput);

    // मिति रूपान्तरण (Basic Offset Method प्रयोग गरेर)
    let nepaliYear = englishDate.getFullYear() + 57; // ५७ वर्ष थप्ने
    let nepaliMonth = englishDate.getMonth() + 1 + 8; // ८ महिना थप्ने
    let nepaliDay = englishDate.getDate(); // दिनलाई जस्ताको त्यस्तै राख्ने

    // महिनाको overflow (१२ भन्दा बढी भए)
    if (nepaliMonth > 12) {
        nepaliMonth -= 12; // महिनालाई १२ घटाउने
        nepaliYear++; // वर्ष १ ले बढाउने
    }

    // नतिजा देखाउने
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = `नेपाली मिति: ${nepaliYear}/${nepaliMonth}/${nepaliDay}`;
});
