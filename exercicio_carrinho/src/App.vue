<script setup>
import { ref } from 'vue'
import HeroComponent from '@/components/HeroComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
const showCart = ref(false)
const cart = ref({
  items: [],
  total: 0,
})
const books = [
  {
    id: 1,
    title: 'Comigo na livraria',
    cover: '/covers/comigo-na-livraria.png',
    price: 23.24,
    author: 'Martha Medeiros',
  },
  {
    id: 2,
    title: 'Quincas Borba',
    cover: '/covers/quincas-borba.png',
    price: 23.24,
    author: 'Machado de Assis',
  },
  {
    id: 3,
    title: 'A livraria',
    cover: '/covers/a-livraria.png',
    price: 13.94,
    author: 'Penelope Fitzgerald',
  },
  {
    id: 4,
    title: 'A hora da estrela',
    cover: '/covers/a-hora-da-estrela.png',
    price: 16.84,
    author: 'Clarice Lispector',
  },
  {
    id: 5,
    title: 'O alienista',
    cover: '/covers/o-alienista.png',
    price: 266.92,
    author: 'Machado de Assis',
  },
  {
    id: 6,
    title: 'Mar morto',
    cover: '/covers/mar-morto.png',
    price: 13.95,
    author: 'Jorge Amado',
  },
  {
    id: 7,
    title: 'Grande sertão',
    cover: '/covers/grande-sertao-veredas.png',
    price: 26.04,
    author: 'Guimarães Rosa',
  },
  {
    id: 8,
    title: 'Flor de poemas',
    cover: '/covers/flor-de-poema.png',
    price: 15.81,
    author: 'Cecília Meireles',
  },
]

function decrementBookToCart(book) {
  const existingBook = cart.value.items.find((item) => item.id === book.id)
  if (existingBook.quantity === 1) {
    cart.value.items = cart.value.items.filter((item) => item.id !== book.id)
  } else {
    existingBook.quantity--
  }
  cart.value.total -= book.price
}

function incrementBookToCart(book) {
  const existingBook = cart.value.items.find((item) => item.id === book.id)
  existingBook.quantity++
  cart.value.total += book.price
}

function addToCart(book) {
  const existingBook = cart.value.items.find((item) => item.id === book.id)
  if (existingBook) {
    existingBook.quantity++
  } else {
    cart.value.items.push({ ...book, quantity: 1 })
  }
  cart.value.total += book.price
  alert(`Adicionado ${book.title} ao carrinho!`)
}
</script>

<template>
  <HeaderComponent/>
  <main v-if="showCart">
    <section class="cart">
      <h2>Carrinho</h2>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Quantidade</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book in cart.items" :key="book.id">
            <td class="cart-item">
              <img :src="book.cover" :alt="book.title" />
              <div class="cart-item-info">
                <p class="cart-item-title">{{ book.title }}</p>
                <p class="cart-item-author">{{ book.author }}</p>
                <p class="cart-item-price">R$ {{ book.price.toFixed(2) }}</p>
              </div>
            </td>
            <td>
              <div class="cart-item-quantity">
                <button @click="decrementBookToCart(book)" class="plain">
                  <span class="mdi mdi-minus" />
                </button>
                {{ book.quantity }}
                <button @click="incrementBookToCart(book)" class="plain">
                  <span class="mdi mdi-plus" />
                </button>
              </div>
            </td>
            <td class="cart-item-subtotal">R$ {{ book.price * book.quantity }}</td>
          </tr>
        </tbody>
      </table>
      <button @click="showCart = false" class="outlined">Voltar para loja</button>
      <div class="cart-summary">
        <div class="cupom">
          <input type="text" placeholder="Código do cupom" />
          <button>Inserir cupom</button>
        </div>
        <div class="summary">
          <h2>Total da Compra</h2>
          <div class="summary-items">
            <span>Produtos</span> <span>R$ {{ cart.total.toFixed(2) }}</span> <span>Frete</span>
            <span> Grátis</span> <span>Total</span> <span>R$ {{ cart.total.toFixed(2) }}</span>
          </div>
          <button>Ir para pagamento</button>
        </div>
      </div>
    </section>
  </main>
  <main v-else>
    <HeroComponent/>

    
  </main>
  <FooterComponent/>
</template>

<style scoped>



.featured {
  display: flex;
  padding: 3vh 8vw;
  border-bottom: 2px solid #27ae6099;

  & div {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;
    gap: 10px;

    & span {
      font-size: 2rem;
    }

    & h2 {
      font-size: 1.2rem;
      font-weight: 700;
    }
  }

  & article:nth-child(2) {
    border-left: 1px solid #27ae6099;
    border-right: 1px solid #27ae6099;
  }
}

.books {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 5vh 8vw;

  & .book {
    display: flex;
    flex-direction: column;
    min-width: 300px;
    width: calc(100% / 4 - 42px);
    margin: 20px;

    & h2 {
      font-size: 1.5rem;
      font-weight: 700;
    }

    & .book-author {
      font-size: 1rem;
    }

    & .book-price {
      font-size: 1.2rem;
      font-weight: 700;
    }

    & .price-and-like {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;

      & .mdi-heart-outline {
        font-size: 1.3rem;
        color: #27ae60;
      }
    }
  }
}

.cart {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 5vh 8vw;
  border-bottom: 2px solid #27ae6099;

  & h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #27ae60;
  }

  & table {
    width: 100%;
    border-collapse: collapse;
    margin: 40px 0;

    & th,
    td {
      padding: 10px;
      text-align: left;
    }

    & th {
      border-bottom: 2px solid #27ae6099;
      font-size: 1.2rem;
      font-weight: 700;
    }

    & td {
      border-bottom: 1px solid rgb(128, 128, 128);
      font-size: 1rem;
    }

    & .cart-item-quantity {
      display: flex;
      align-items: center;
    }

    & .cart-item-subtotal {
      font-size: 1.1rem;
      font-weight: 700;
    }

    & .cart-item {
      display: flex;
      align-items: center;
      gap: 20px;

      & img {
        width: 80px;
        height: auto;
      }

      & .cart-item-info {
        display: flex;
        flex-direction: column;
        gap: 5px;

        & .cart-item-title {
          font-size: 1.2rem;
          font-weight: 700;
        }
        & .cart-item-author {
          font-size: 1rem;
        }
        & .cart-item-price {
          font-size: 1.1rem;
          font-weight: 600;
        }
      }
    }
  }

  & .cart-summary {
    display: flex;
    justify-content: space-between;
    width: 100%;

    & .cupom {
      display: flex;
      align-items: center;
      margin-top: 80px;
      gap: 10px;

      & input {
        width: 350px;
        height: 50px;
        border-radius: 5px;
        font-size: 1rem;
        border: 2px solid rgb(128, 128, 128);
        padding: 5px;
      }
    }

    & .summary {
      border: 1px solid rgb(128, 128, 128);
      padding: 1vw;

      & h2 {
        font-size: 1.2rem;
        font-weight: 700;
        color: black;
      }

      & .summary-items {
        display: grid;
        grid-template-columns: 3fr 1fr;

        & span {
          padding: 10px 0;
          border-bottom: 1px solid rgb(128, 128, 128);
        }
      }

      & button {
        margin-top: 20px;
      }
    }
  }
}

button {
  background-color: #27ae60;
  color: #fff;
  border: none;
  padding: 15px 20px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  gap: 20px;
  display: flex;
  justify-content: center;

  &.outlined {
    background-color: transparent;
    color: #27ae60;
    border: 2px solid #27ae60;
  }

  &.plain {
    background-color: transparent;
    color: black;
    border: none;
    cursor: pointer;
  }
}
</style>
