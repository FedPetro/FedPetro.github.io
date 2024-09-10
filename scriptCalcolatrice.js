// Classe Calculator che definisce il comportamento della calcolatrice
class Calculator {
    // Costruttore: inizializza gli schermi e cancella i valori iniziali
    constructor(previousScreen, currentScreen) {
        this.previousScreen = previousScreen;   // Elemento DOM per il display del valore precedente
        this.currentScreen = currentScreen;     // Elemento DOM per il display del valore corrente
        this.clear();   // Richiama la funzione clear per inizializzare i valori
    }

    // Funzione per resettare la calcolatrice
    clear() {    
        this.currentOperand = '';    // Cancella il valore corrente
        this.previousOperand = '';   // Cancella il valore precedente
        this.operatorClicked = undefined;  // Nessun operatore selezionato
    }

    // Funzione per cancellare l'ultimo numero inserito
    deleteFunction() {   
        this.currentOperand = this.currentOperand.toString().slice(0, -1)  // Rimuove l'ultimo carattere del valore corrente
    }

    // Funzione per calcolare il risultato
    equalFunction() {    
        // Funzione non implementata direttamente, ma richiamata da `compute()`
    }

    // Funzione per gestire i numeri cliccati
    showNumber(numberClicked) {   
        // Evita che venga inserito più di un punto decimale
        if (numberClicked === '.' && this.currentOperand.includes('.')) 
            return
        // Concatenazione del numero cliccato al valore corrente
        this.currentOperand = this.currentOperand.toString() + numberClicked.toString(); 
    }

    // Funzione per scegliere l'operatore matematico
    chooseOperation(operatorClicked) {  
        if (this.currentOperand === '') 
            return  // Se il valore corrente è vuoto, esce dalla funzione
        if (this.previousOperand !== '') {
            this.compute()  // Se c'è già un valore precedente, esegue il calcolo
        }
        this.operatorClicked = operatorClicked;  // Memorizza l'operatore selezionato
        this.previousOperand = this.currentOperand;  // Sposta il valore corrente nel precedente
        this.currentOperand = '';  // Resetta il valore corrente per il nuovo numero
    }

    // Funzione per eseguire il calcolo
    compute() {
        let computation;  // Variabile per il risultato del calcolo
        const prev = parseFloat(this.previousOperand);  // Trasforma il valore precedente in numero
        const current = parseFloat(this.currentOperand);  // Trasforma il valore corrente in numero
        if (isNaN(prev) || isNaN(current)) 
            return  // Se uno dei valori non è un numero, interrompe l'operazione
        // Switch che controlla quale operatore è stato selezionato
        switch (this.operatorClicked) {
            case '+':
                computation = prev + current  // Somma
                break;
            case '-':
                 computation = prev - current  // Sottrazione
                break;
            case 'x':
                computation = prev * current  // Moltiplicazione
                break;
            case '÷':
                computation = prev / current  // Divisione
                break;
            default:
                return
        }
        this.currentOperand = computation;  // Memorizza il risultato nel valore corrente
        this.operatorClicked = undefined;   // Resetta l'operatore
        this.previousOperand = '';  // Resetta il valore precedente
    }

    // Funzione per formattare i numeri (aggiunge le virgole)
    getDisplayNumber(number) {
        const stringNumber = number.toString();  // Trasforma il numero in stringa
        const integerDigits = parseFloat(stringNumber.split('.')[0]);  // Estrae la parte intera
        const decimalDigits = stringNumber.split('.')[1];  // Estrae la parte decimale
        let integerDisplay;
        if (isNaN(integerDigits)) {
            integerDisplay = '';  // Se non ci sono cifre intere, imposta una stringa vuota
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0})  // Formatta la parte intera con separatore delle migliaia
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`  // Ritorna il numero formattato con parte intera e decimale
        } else {
            return integerDisplay  // Ritorna solo la parte intera se non ci sono cifre decimali
        }
    }

    // Funzione per aggiornare il display
    updateDisplay() {    
        this.currentScreen.innerText = this.getDisplayNumber(this.currentOperand);  // Aggiorna lo schermo del valore corrente
        if (this.operatorClicked != null) {
            this.previousScreen.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operatorClicked}`;  // Mostra operatore e valore precedente
        } else {
            this.previousScreen.innerText = ''  // Se non c'è operatore, lascia lo schermo precedente vuoto
        }
    }
}



// VARIABILI
const numberButtons = document.querySelectorAll("[data-number]");    // Seleziona tutti i pulsanti dei numeri
const operatorButtons = document.querySelectorAll("[data-operation]");  // Seleziona tutti i pulsanti degli operatori
const equalsButton = document.querySelector("[data-equals]");  // Seleziona il pulsante "="
const clearButton = document.querySelector("[data-clear]");  // Seleziona il pulsante "C" (clear)
const deleteButton = document.querySelector("[data-delete]");  // Seleziona il pulsante "del" (cancella)
const previousScreen = document.querySelector("[data-previous]");  // Seleziona il display del valore precedente
const currentScreen = document.querySelector("[data-current]");  // Seleziona il display del valore corrente

// Crea un'istanza della classe Calculator
const calculator = new Calculator(previousScreen, currentScreen);   // Crea l'oggetto calcolatrice con i riferimenti agli schermi

// Aggiunge gli eventi di click a tutti i pulsanti dei numeri
numberButtons.forEach(button => {     
    button.addEventListener('click', () => {  // Quando viene cliccato un pulsante
        calculator.showNumber(button.innerText);  // Mostra il numero cliccato
        calculator.updateDisplay()  // Aggiorna il display
    })
})

// Aggiunge gli eventi di click a tutti i pulsanti degli operatori
operatorButtons.forEach(button => {    
    button.addEventListener('click', () => {  // Quando viene cliccato un pulsante operatore
        calculator.chooseOperation(button.innerText);  // Scegli l'operatore
        calculator.updateDisplay()  // Aggiorna il display
    })
})

// Aggiunge l'evento di click al pulsante "=" per eseguire il calcolo
equalsButton.addEventListener('click', button => {
    calculator.compute()  // Esegui il calcolo
    calculator.updateDisplay()  // Aggiorna il display con il risultato
})

// Aggiunge l'evento di click al pulsante "C" per cancellare tutto
clearButton.addEventListener('click', button => {
    calculator.clear()  // Resetta tutti i valori
    calculator.updateDisplay()  // Aggiorna il display
})

// Aggiunge l'evento di click al pulsante "del" per cancellare l'ultimo numero inserito
deleteButton.addEventListener('click', button => {
    calculator.deleteFunction()  // Cancella l'ultimo numero
    calculator.updateDisplay()  // Aggiorna il display
})

/* 
Metodi degli array usati:
- `forEach()`: Esegue una funzione per ogni elemento dell'array. In questo caso viene usato per aggiungere gli event listeners a tutti i pulsanti dei numeri e degli operatori.

Funzione di `forEach()`:
Esegue la funzione callback fornita su ciascun elemento dell'array. Non restituisce un valore (ritorna `undefined`). Viene usato per iterare sugli array di pulsanti e associare eventi di click.


- `split()`: Divide una stringa in un array di sottostringhe, utilizzando un separatore specificato.
    Sintassi: string.split(separator, limit)
    Cosa fa nel tuo codice: Viene usato per dividere una stringa (numero) in due parti, separando la parte intera e quella decimale.


- `slice()`: Estrae una sezione di una stringa o di un array e restituisce una nuova stringa/array, senza modificare l'originale.
    Sintassi: arrayOrString.slice(startIndex, endIndex)
    Cosa fa nel tuo codice: Nella funzione deleteFunction(), rimuove l'ultimo carattere dal numero corrente.


 - `slice()`: Converte un valore (come un numero o un array) in una stringa.
    Sintassi: value.toString()
    Cosa fa nel tuo codice: Converte i numeri in stringhe per poterli concatenare o dividere.


- `includes()`: Verifica se una stringa o un array contiene una sottostringa o un elemento specifico.
    Sintassi: stringOrArray.includes(valueToFind)
    Cosa fa nel tuo codice: Verifica se il numero corrente contiene già un punto decimale, impedendo che venga aggiunto un altro.


- `parseFloat()`: Converte una stringa in un numero a virgola mobile (decimale).
    Sintassi: parseFloat(string)
    Cosa fa nel tuo codice: Converte i valori precedenti e correnti da stringhe a numeri per poter eseguire le operazioni matematiche.


- `isNaN()`: Verifica se un valore è "NaN" (Not-a-Number), ovvero se non può essere interpretato come numero
    Sintassi: isNaN(value)
    Cosa fa nel tuo codice: Controlla se i valori corrente e precedente sono numeri validi prima di eseguire l'operazione.


- `toLocaleString()`: Converte un numero in una stringa formattata in base alla lingua o alle impostazioni locali, aggiungendo separatori di migliaia, decimali, ecc.  
    Sintassi: number.toLocaleString([locales], {options}) 
    Cosa fa nel tuo codice: Viene usato per formattare la parte intera del numero, aggiungendo i separatori delle migliaia per una migliore leggibilità.
*/
