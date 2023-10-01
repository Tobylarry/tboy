const trend = document.querySelector('.trend');

const dataSet = ['./image/trend1.JPG', './image/trend2.jpg','./image/trend3.jpg','./image/trend2.jpg','./image/trend1.jpg','./image/trend2.jpg','./image/trend3.jpg','./image/trend2.jpg','./image/trend3.jpg']

let temp = '';

for(let data = 0; data < dataSet.length; data++){
    temp += `
    <div><img src = ${dataSet[data]} class="img"  alt=${dataSet[data]}/></div>
    `
}

trend.innerHTML = temp;