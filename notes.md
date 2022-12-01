# Notes

**Labels**  
✅ done  
🚧 WIP  
❌ ERROR  

# Exercicio
The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

Example
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

# Domain
    Classificar membros em duas categorias: Open e Senior
    Membros que são classificados como senior devem ser enquadrados em:
        ter no minimo 55 anos
        ter um handicap superior a 7
    A idade deve ser maior que zero 
    O handicap deve é definido por um intervalo de valores que vai de -2 a 26
    O registro de menbros deve ser feito por uma lista de membros
    O membro deve ser registrado com uma idade, handicap e categoria, onde ambos são numeros inteiros 
    O resultado esperado apos o cadastros de membros é uma lista na odem de entrada exibindo a categoria do membro(open ou senior)

    <!-- Adicionado no pomodoro 3 -->
    Caso um membro não tenha registros validos, deve ter a classificação vazia
    Um registro invalido é definido caso idade ou handicap não sejam validos 

# Entities
    Membro 
        idade
        handicap
        categoria

        <!-- Adicionado no pomodoro 3 -->
        isValid

    Classificador de membros 
        classificar membros 
        exibir lista


# Pomodoro 1 ( 30-11-22 - 25min / 5min pause)
    Criar projeto no git ✅ 
    Definir dominio ✅ 
    Definir Entidades ✅ 
    Criar estrutura inicial de projeto node ✅ 

# Pomodoro 2 ( 30-11-22 - 25min / 5min pause)
    Validate if member entity has age and handicap ✅ 
    should return -100 if age is zero ✅ 
    should return -100 if age less than zero ✅ 

# Pomodoro 3 ( 30-11-22 - 25min )
    Revisar o Dominio e entidades ✅ 
    refatorirar a idade para popular o isValid ✅
    should return isValid true if age greater than zero ✅
    validar se a o handicap é um valor valido enter -2 e 26 
        handicap menor que -2 deve retornar isValid = false ✅
        WTF: não obtive uma luz vermelhar ao incluir o esse teste, então fiz um refactory na entidade member

        handicap maior que -2 deve retornar isValid = true ❌
        WTF: não obtive uma luz vermelhar ao incluir esse teste, então não optei por não incluir o mesmo 
        
        handicap maior que 26 deve retornar isValid = false ✅

<!-- Long break -->

# Pomodoro 4 ( 01-12-22 - 25min / 5min pause)
    revisar oq foi feito
    validar se a o handicap é um valor valido enter -2 e 26  
        WTF: Obtive sucesso em todos os testes acima 
        handicap igual a -2 deve retornar isValid = true  ✅ 
        handicap menor que 26 deve retornar isValid = true  ✅ 
        handicap igual a 26 deve retornar isValid = true  ✅ 
        
    
# Pomodoro 5 ( 01-12-22 - 25min / 5min pause)
    Classificar membro 
        usuario(55, 8) deve retornar categoria = senior ✅
        usuario(60, 10) deve retornar categoria = senior ✅
        WTF: Obtive sucesso em todos os testes acima 

        usuario(55, 7) deve retornar categoria = open ✅
        usuario(40, 8) deve retornar categoria = open ✅
        usuario(0, -1) deve retornar categoria vazia

# Pomodoro 6 ( 01-12-22 - 25min / 5min pause)
    Classificar membro 
        usuario(0, -1) deve retornar categoria vazia ✅
    Classificar membros 
        usuarios[(60, 10), (55, 8)] deve retornar categorias = senior, senior ✅
        usuarios[(60, 10), (40, 8)] deve retornar categoria = senior, open ✅
        usuarios[(55, 7), (40, 8)] deve retornar categoria = open, open ✅
        usuarios[(0, 10), (-1, 8)] deve retornar cateorias = vazio, vazio ✅
        usuarios[] deve retornar uma lista vazia ✅

# Pomodoro 6 ( 01-12-22 - 25min / 5min pause)
    mostar lista classificada
        deve retornar uma lista com 1 senior member para a entrada [ (60, 10) ] ✅

        WTF: todos os cenarios de testes abaixo não apresentaram erro apos o primeiro
        deve retornar uma lista com 1 open member para a entrada [(40, 8)] ✅
        deve retornar uma lista vazia open member para a entrada [(0, 10)] ✅
        deve retornar uma lista com 2 senior member para a entrada [(60, 10), (55, 8)] ✅
        deve retornar uma lista com 1 senior e 1 open member para a entrada [(60, 10), (40, 8)] ✅
        deve retornar uma lista com 2 open member para a entrada [(55, 7), (40, 8)] ✅
        deve retornar uma lista com 2 categorias vazia para a entrada [(0, 10), (-1, 8)] ✅
        usuarios[] deve retornar uma lista vazia ✅
        deve retornar uma lista com 1 categoria senior, 1 categoria open e uma vazia a para a entrada [(60, 10), (40, 8), (-1, 8)] ✅

    


