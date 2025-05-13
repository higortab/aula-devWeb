<script setup>
defineProps(['cart'])
defineEmits(['click-cart' , 'increment-book' , 'decrement-book'])
</script>

<template>
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
                <button @click="$emit('decrement-book' , book)" class="plain">
                  <span class="mdi mdi-minus" />
                </button>
                {{ book.quantity }}
                <button @click="$emit('increment-book' , book)" class="plain">
                  <span class="mdi mdi-plus" />
                </button>
              </div>
            </td>
            <td class="cart-item-subtotal">R$ {{ book.price * book.quantity }}</td>
          </tr>
        </tbody>
      </table>
      <button @click="$emit('click-cart')" class="outlined">Voltar para loja</button>
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
</template>

<style>
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
</style>
