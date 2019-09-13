export default {
  transactionStatus ({ status }) {
    return status
  },

  transactionMessage ({ message }) {
    return message
  },
  transactionData ({ transactions }) {
    return transactions
  }
}
