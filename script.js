async function fetchstock() {
    const symbol = document.getElementById("tickerInput").value.toUpperCase();
    const apiKey = "7e3559d8fe494b0f96ebefdc01428096";
    const url = `https://api.twelvedata.com/price?symbol=${symbol}&apikey=${apiKey}`;
    
    
    try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    if (data.code === 400) {
        document.getElementById("stockInfo").innerText = "Invalid stock symbol! Please try again.";
    } else {
        document.getElementById("stockInfo").innerText = `${symbol} price: $${data.price}`;
    }
} catch (error) {
    document.getElementById("stockInfo").innerText = "Something went wrong!";
    console.error(error);
    }
}