function shuffle(){
    const numberOfPlayer = document.getElementById("numberOfPlayer").value;
    const resultImage=document.getElementById("resultImage");
    const resultText=document.getElementById("resultText");

    values=[];
    images=[];
    for(i=0;i<numberOfPlayer;i++){
        const value  = Math.floor(Math.random()*13)+1;
        values.push(value);
        images.push(`<div>
        <img src="./card_images/${value}.png" alt="${value} card">
        <h1> Player ${i+1} </h1>
        </div>`);
    }
    const winner = Math.max(...values);
    const winningPlayer= values.indexOf(winner)+1;
    console.log(winningPlayer);
    resultImage.innerHTML=images;
    resultText.textContent=`Player ${winningPlayer} wins the match🎉`;
}
