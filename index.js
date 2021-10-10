let copiarTexto = () =>{
    //captura o elemento input
    const inputTest = document.querySelector("#inputTest");
    
    //seleciona todo o texto do elemento
    inputTest.select();
    //executa o comando copy
    //aqui é feito o ato de copiar para a area de trabalho com base na seleção
    document.execCommand('copy');
};