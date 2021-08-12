const costprice = document.querySelector("#costprice");
const quantity = document.querySelector("#quantity");
const sellingprice = document.querySelector("#currentprice");
const Calculatebutton = document.querySelector("#calculate");
const output = document.querySelector("#output");

function checkStockStatus() {
    let cp = Number(costprice.value);
    let sp = Number(sellingprice.value);
    let qty = Number(quantity.value);

    if (sp < cp) {
        let loss = ((cp - sp) * qty).toFixed(2);
        let losspercent = (loss / (cp * qty) * 100).toFixed(2);
        console.log(loss, losspercent);
        output.innerHTML = `You lost ${losspercent} % of you stock.Your total loss is ${loss}`;
        document.body.classList.add('sadtheme');
        document.body.style.color = "white";
    } else {
        let gain = ((sp - cp) * qty).toFixed(2);
        let gainpercent = (gain / (cp * qty) * 100).toFixed(2);
        console.log(gain, gainpercent);
        output.innerHTML = `You gained ${gainpercent} % of you stock.Your total profit is ${gain}`;
        if (gain != 0) {
            document.body.classList.add('happytheme');
            document.body.style.color = "black";
        }

    }

}

function validateInput() {
    document.body.classList.remove('sadtheme');
    document.body.style.color = "white";
    document.body.classList.remove('happytheme');
    document.body.style.color = "black";
    if (costprice.value == "" || quantity.value == "" || sellingprice.value == "" || isNaN(costprice.value) || isNaN(quantity.value) || isNaN(sellingprice.value))
        output.innerHTML = "Please Enter Valid Input value to know your stock status";

    else if (costprice.value <= 0 || quantity.value <= 0 || sellingprice.value < 0)
        output.innerHTML = "Please Input values greater than zero!";

    else
        checkStockStatus();
}

Calculatebutton.addEventListener('click', validateInput)