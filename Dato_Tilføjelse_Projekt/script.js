function copyHtmlToClipboard() {
  const htmlToCopy = document.getElementById("html-to-copy").innerHTML;
  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = htmlToCopy;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand("copy");
  document.body.removeChild(tempTextArea);
  
}
function showPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "flex";
}





const closePopupButton = document.getElementById('close-popup');
const popup = document.getElementById('popup');



closePopupButton.addEventListener('click', () => {
    popup.style.display = 'none';
});


        function add30Days() {
            const inputDate = document.getElementById('inputDate').value;
    
    // Tjek om inputtet er i det forventede format (DDMMYY).
    if (/^\d{6}$/.test(inputDate)) {
        // Udtræk dag, måned og år fra det indtastede format.
        const day = parseInt(inputDate.substring(0, 2), 10);
        const month = parseInt(inputDate.substring(2, 4), 10);
        const year = parseInt(inputDate.substring(4, 6), 10);
        
        // Opret en ny JavaScript Date med det ønskede format (DD-MM-YYYY).
        const originalDate = new Date(`20${year}`, month - 1, day);

        // Tjek om den konverterede dato er gyldig.
        if (!isNaN(originalDate.getTime())) {
            // Opret en kopi af originalDate og tilføj 30 dage.
            const resultDate = new Date(originalDate);
            resultDate.setDate(originalDate.getDate() + 30);
            
            // Formatér resultatet til DD-MM-YYYY format.
            const formattedResult = `${resultDate.getDate()}-${resultDate.getMonth() + 1}-${resultDate.getFullYear()}`;

            // Opdater resultatet i HTML-elementet.
            const resultElement = document.getElementById('result');
            resultElement.innerHTML = `Datoen ${inputDate} plus 30 dage er:<br><div id="html-to-copy">${formattedResult}</div><button onclick="copyHtmlToClipboard()">Kopier til udklipsholderen</button>`;
            
                




                // Ryd inputfeltet
            document.getElementById('inputDate').value = '';
 
                
                
        
                }
                else {
                    alert('Ugyldig dato.');
                }
            } else {
                showPopup();
            }
        
        
        
        }

        // Lyt efter Enter-tasten
        const inputField = document.getElementById('inputDate');
        inputField.addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
              add30Days();
            }


      });


