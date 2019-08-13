export default {
  visible: false,
  correct: false,
  type: 'negative',
  types: {
    true: 'positive',
    false: 'negative',
    skipped: 'skipped',
    timeout: 'timeout',
    notselected: 'notselected',
  },
  message: 'Que pena, você errou...',
  messages: {
    positive: 'Parabéns, você acertou!',
    negative: 'Que pena, você errou...',
    skipped: 'Próxima pergunta...',
    timeout: 'Que pena, você esgotou o seu tempo!!',
    notselected: 'Selecione ao menos uma alternativa para continuar.',
  }
};