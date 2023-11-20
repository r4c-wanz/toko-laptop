const namaLaptop = document.querySelector('#nama-laptop')
const deskripsiLaptop = document.querySelector('#deskripsi-laptop')
const hargaLaptop = document.querySelector('#harga-laptop')
const nomorLaptop = document.querySelector('#nomor-laptop')
const maxLaptop = document.querySelector('#maksimal-laptop')
const gambarLaptop = document.querySelector('#gambar-laptop')

// Fungsi Hamburger
const hamburger = document.querySelector('#hamburger')
const navigation = document.querySelector('#navigation')

hamburger.addEventListener('click', function(){
  hamburger.classList.toggle('hamburger-active')
  navigation.classList.toggle('hidden')
})

// Data Laptop
const laptop = [
  {
    number: '01',
    name: 'Unyil 15 - A11S',
    description: 'Laptop terbaik abad 21',
    price: 'Rp. 16.502.850',
    img: './images/laptop-1.png'
  },
  {
    number: '02',
    name: 'Unyil A5 - B35',
    description: 'Laptop terbaik sepanjang masa',
    price: 'Rp. 24.000.950',
    img: './images/laptop-2.png'
  },
  {
    number: '03',
    name: 'Unyil S5 - Gaming',
    description: 'Laptop gaming terbaik sepanjang masa',
    price: 'Rp. 10.200.400',
    img: './images/laptop-3.png'
  },
  {
    number: '04',
    name: 'Unyil SS3 - U20',
    description: 'Laptop terbaik sepanjang abad',
    price: 'Rp. 8.300.275',
    img: './images/laptop-4.png'
  },
  {
    number: '05',
    name: 'Unyil T5 - X50',
    description: 'Laptop terbaik semasa kecil',
    price: 'Rp. 18.900.500',
    img: './images/laptop-5.png'
  },
]

let nomor = 0
let maksimalLaptop = laptop.length
let selected = {
  number: '01',
  name: 'Unyil 15 - A11S',
  description: 'Laptop terbaik abad 21',
  price: 'Rp. 16.502.850',
  img: './images/laptop-1.png'
}

const previousButton = document.querySelector('#previousButton')
const nextButton = document.querySelector('#nextButton')

nextButton.addEventListener('click', function(){
  namaLaptop.classList.add('animate-fade')
  deskripsiLaptop.classList.add('animate-fade')
  hargaLaptop.classList.add('animate-fade')
  gambarLaptop.classList.add('animate-rotate-right')

  if(nomor >= maksimalLaptop - 1){
    nomor = 0
  }else{
    nomor++;
  }
  selected = laptop[nomor]

  setTimeout(function () {
    showData()
  }, 400)

  setTimeout(function () {
    namaLaptop.classList.remove('animate-fade')
    deskripsiLaptop.classList.remove('animate-fade')
    hargaLaptop.classList.remove('animate-fade')
    gambarLaptop.classList.remove('animate-rotate-right')
  }, 405)
})

previousButton.addEventListener('click', function(){
  namaLaptop.classList.add('animate-fade')
  deskripsiLaptop.classList.add('animate-fade')
  hargaLaptop.classList.add('animate-fade')
  gambarLaptop.classList.add('animate-rotate-left')

  if(nomor <= 0){
    nomor = maksimalLaptop - 1
  }else{
    nomor--;
  }
  selected = laptop[nomor]

  setTimeout(function () {
    showData()
  }, 400)

  setTimeout(function () {
    namaLaptop.classList.remove('animate-fade')
    deskripsiLaptop.classList.remove('animate-fade')
    hargaLaptop.classList.remove('animate-fade')
    gambarLaptop.classList.remove('animate-rotate-left')
  }, 405)
})

function showData(){
  namaLaptop.innerText = selected.name
  deskripsiLaptop.innerText = selected.description
  hargaLaptop.innerText = selected.price
  gambarLaptop.src = selected.img
  nomorLaptop.innerText = selected.number
  maxLaptop.innerText = laptop[laptop.length - 1].number
}

showData()