function CalculadoraService(){

  const SOMA = '+'
  const SUBTRACAO = '-'
  const DIVISAO = '/'
  const MULTIPLICACAO = '*'

  function calcular(num1, num2, oper){
    let resultado

    switch(oper) {
      case SOMA: resultado = num1 + num2
      break;

      case SUBTRACAO: resultado = num1 - num2
      break

      case DIVISAO: resultado = num1/num2
      break

      case MULTIPLICACAO: resultado = num1*num2
      break

      default: resultado = 0;
    }

    return resultado;
  }

  function concatenaNumero(numAtual, numConcat){
    console.log(numAtual, numConcat)

    //caso contenha apenas '0' ou null, reinicia o valor
    if(numAtual === '0' || numAtual === null){
      numAtual = '';
    }

    //primeiro digito for '.', concatena '0' antes do ponto
    if(numConcat === '.' && numAtual === ''){
      // console.log(numAtual)
      // console.log(numConcat)
      // console.log("Aqui1")

      return '0.'
    }

    //caso '.' digitado e já contenha um ponto, apenas retornar
    if(numConcat === '.' && numAtual.indexOf('.') > -1){
      // console.log(numAtual)
      // console.log(numConcat)
      // console.log("Aqui1")

      return numAtual
    }

//    console.log("Aqui")
  //  console.log(numAtual)
    return numAtual + numConcat
  }

  return [
    calcular,
    concatenaNumero,
    SOMA,
    SUBTRACAO,
    DIVISAO,
    MULTIPLICACAO
  ]
}

export default CalculadoraService;