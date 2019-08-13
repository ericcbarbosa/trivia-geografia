/**
 * Algoritmo de desabilitar alterantivas para quando
 * o usuário usar a dica. Ele seleciona algumas das
 * alternativas erradas e as desabilita, para facilitar
 * o acerto da questão.
 * @param {Array} options
 */
export const disableRandomOptions = (options) => {
  /**
   * Lista de opções incorretas
   */
  const incorrectOptions = options
    .filter(option => !option.correct)
    .sort(() => 0.5 - Math.random());

  /**
   * Escolhe aleatoriamente algumas opções do array de incorretas
   * e desabilita algumas, formando uma lista de opções que serão
   * desabilitadas
   */
  const disabledOptions = incorrectOptions
    .slice(0, Math.floor( incorrectOptions.length / 2 ))
    .map(option => ({
      ...option,
      disabled: true,
    }));

  /**
   * Encontra a opção correta
   */
  const correctOption = options.filter(option => option.correct);

  /**
   * Monta uma lista de opções que contem algumas disabilitadas
   */
  return incorrectOptions
    .map(option => {
      return disabledOptions.map(disabledOption => {
        if (disabledOption.id === option.id) {
          return disabledOption;
        }

        return option;
      });
    })
    .reduce((a, b) => [ ...a, ...b ])
    .concat(correctOption)
    .sort((a, b) => a.id - b.id);
}