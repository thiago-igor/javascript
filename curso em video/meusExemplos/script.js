function verificar() {
    var res = document.querySelector('div#res')
    var gera = document.querySelector('input#geracao')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    gera = Number(gera.value)

    switch (gera) {
        case 1:
            img.setAttribute('src', 'imagens/gol_g1.png')
            res.innerHTML =  `Lançado em 1980, a primeira geração do Gol ficou em linha por impressionantes 14 anos e passou por diversas mudanças. Pouca gente se lembra, mas o Gol chegou ao mercado com o mesmo motor boxer refrigerado a ar do Fusca. `
            break;
        case 2:
            img.setAttribute('src', 'imagens/gol_g2_16v.png')
            res.innerHTML = 'Com produção bem mais curta que a primeira geração, o Gol G2 era uma revolução em relação ao anterior. A começar pelo formato mais arredondado, a cara dos anos 1990.'
            break;
        case 3:
            img.setAttribute('src', 'imagens/gol_g3_turbo.png')
            res.innerHTML = 'Foi uma grande evolução vizual do G2 para o G3. Alem disso tambem tivemos uma versão turbinada do gol lançada nos anos 2000, porem sem muito apelo esportivo, não sendo tão bem vista pelo publico. Por fim, o gol G3 foi um dos ultimos carros 1.0 do brasil no qual você comprava e tinha uma acabamento topo de linha para a epoca. '
            break;
    
        case 4:
            img.setAttribute('src' , 'imagens/gol_g4.png')
            res.innerHTML = 'O Gol G4 foi a reforma da reforma. E deu errado. Com um visual bastante genérico e muitos cortes de gastos na produção, o G4 durou pouco como geração principal, mas se manteve em linha até 2014 como uma opção de entrada da linha, isso com a terceira geração, G5 no mercado.'
            break;
        case 5:
            img.setAttribute('src' , 'imagens/gol_g5_vintage.png')
            res.innerHTML = ('Depois de 24 anos, o Gol enfim ganhou uma nova geração, baseada na plataforma usada pelo Fox. Com visual mais atraente e mais refinamentos, o G5 foi um sucesso e manteve o Gol no topo dos carros vendidos no Brasil. Na comemoração de 30 anos do Gol, a geração ganhou uma versão especial. Chamada de Vintage, foi limitada a 30 unidades e trazia faixas decorativas na carroceria, além de uma guitarra com a mesma pintura do carro.')
            break;
        case 6:
            img.setAttribute('src' , 'imagens/gol_g6.png')
            res.innerHTML = 'Com desenho bastante acertado e bom nível de equipamentos, ficou mais caro e seu maior feito foi ter perdido a liderança de vendas no Brasil em 2014, algo que era do Gol desde 1987. O primeiro modelo a roubar o topo da lista foi o Fiat Palio.'
            break;
        case 7:
            img.setAttribute('src' , 'imagens/gol_g7.png')
            res.innerHTML = 'Visualmente, as mudanças da segunda reestilização da terceira geração foram pequenas. A maior diferença foi debaixo do capô. O Gol aposentou o motor 1.0 de quatro cilindros e adotou o 1.0 três cilindros, lançado no VW Up, se tornando assim uma opção mais economica '
            break;
        case 8:
            img.setAttribute('src' , 'imagens/gol_g8.png')
            res.innerHTML = 'No final de vida do Gol, em sua geração G8, ganhou, pela primeira vez, a opção de câmbio automático de seis marchas. O modelo também recebeu faróis maiores.'
            break;
        case 9:
            img.setAttribute('src' , 'imagens/gol_last.png')
            res.innerHTML = 'Apos 42 anos do Sucesso Volkswagen Gol, esse historico carro chega a sua ultima versão lansada para colecionador, Gol Last-Edition. Essa versão se resume a apenas 1.000 unidades, sendo 650 destinada ao brasil e 350 para outros países da América do sul. Vale resaltar tambem que o Gol last edition foi lançado na época por R$ 95.990.'
            break;
        default:
            res.innerHTML = '[ERRO!] Voce digitou um numero invalido, porfavor tente novamente!'
            break;
    }

    res.appendChild(img)
    img.style.textAlign = 'center'

}