const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const mapAll = document.querySelector('.map-all')
const sumAll1 = document.querySelector('.sum-all')
const filter = document.querySelector('.filter-all')
let myLi = ''

function formatarMoeda (valor) {
    const newValor = valor.toLocaleString('pt-br',{
       style:'currency',
       currency:'BRL',
    })
    return newValor
}

function showAll(produtoArray) {

    myLi = ''
   produtoArray.forEach((produto) => {
      myLi += `

         <li >
          <img src= ${produto.src}>
            <p>${produto.name}</p>
            <p class="item-price">${formatarMoeda(produto.price)}</p>
         </li>
      `
       
        
       })


       list.innerHTML = myLi
   }
    function mapAllItems (){
      const newPrices = menuOptions.map((produto) => ({
      ...produto,  
         price: produto.price * 0.9,
         
      }))
     showAll(newPrices)
    }

    function sumAllItems (){
       const valorTotal = menuOptions.reduce((acc,curr) => acc + curr.price,0 )
      
       list.innerHTML = `
       
            <li >
        
            <p>O Valor Total Dos Lanches È R$ ${formatarMoeda(valorTotal)}</p>

          </li>
       `

    }

    function filterAllItems (){
       const filterJustVegan = menuOptions.filter((produtos) => produtos.vegan)
       showAll(filterJustVegan)
    }

buttonShowAll.addEventListener ('click', () => showAll (menuOptions))
mapAll.addEventListener('click', mapAllItems)
sumAll1.addEventListener('click', sumAllItems)
filter.addEventListener('click', filterAllItems)