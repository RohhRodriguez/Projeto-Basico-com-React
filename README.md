Projeto com React: Passo a passo realizado para desenvolvimento dessa aplicação de teste

1. Baixei o NodeJs na versão mais atual
2. Criei um novo projeto utilizando o comando: npx create-react-app (+nome do projeto)
3. Inicializei no VS Code o projeto
4. Declarei a função App no arquivo App.js com arrow funccion retornando uma H1 (apenas para não dar erro, pois depois modifiquei a mesma) e fiz um xport default dela e importei na outra pasta
5. Fiz uma limpeza dos arquivos desnecessários, deixando apenas os que iria utilizar
6. Copiei o link do CSS na página do bootstrap e colei no código da pasta .html
7. Criei uma pasta components dentro de src e outra página item e dentro desta um arquivo index.js, onde colocaria os retornos dos itens
8. Criei o primeiro component dentro da pasta criada anteriormente e declara um xport default desse componente
9. Importei os component referenciando dentro da pasta App.js
10. Passei a propriedade children dentro dos parênteses do component em index.js e passei a propriedade do objeto dentro de {} no return
11. Dentro da tag referente em App.js, passei a referencia da propriedade children, abrindo e fechando a tag de chamada
12. Criei uma nova pasta dentro de components e dentro dela criei novo arquivo index.js
13. Dentro desse arquivo, fiz o mesmo procedimento do index de item
14. Criei 2 botões: "Adicionar" e "Remover" com a documentação do Bootstrap
15. Criei as funções para os botões: importando o useState e passando os parâmetros dentro de array. ex: const [valor, setValor] = useStrate(0), passando o valor inicial para o contador como zero
16. Chamei "valor" entre chaves no lugar do zero escrito anteriomente, para que fosse possível alterá-lo com as funções
17. Passi uma propriedade onClick no botões e criei uma função para adicionar, passando o valor adicional + 1 e chamando a função dentro do botão como parâmetro para o onClick
18. Fiz o mesmo com o botão remover, criando a função Remover e passando ela dentro do onClick do botão remover
19. Criei uma nova pasta dentro de components para os buttons e passei dentro de um arquivo index.js e depois imporei, como feito em card e item
20. Passei as propriedades de button utilizando children, passando a className e onClick e chamando nos botões também dentro do index principal
21. Pronto! A aplicação de teste está funcionando perfeitamente
