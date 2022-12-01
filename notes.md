# Notes

**Labels**  
✅ done  
🚧 WIP  
❌ ERROR  

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
    Caso um membro não tenha registros validos, deve ser removido da classificação
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
    Validar se entidade membro possui idade e handicap 🚧

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

# Pomodoro 4 ( 01-12-22 - 25min )
    revisar oq foi feito
    validar se a o handicap é um valor valido enter -2 e 26  
        handicap igual a -2 deve retornar isValid = true  ✅ / ❌
        handicap menor que 26 deve retornar isValid = true  ✅ / ❌
        handicap igual a 26 deve retornar isValid = true  ✅ / ❌
        WTF: Obtive sucesso em todos os testes acima 
    Classificar membros senior
        usuario(55, 8) deve retornar categoria = senior
        usuario(60, 10) deve retornar categoria = senior
        usuario(55, 7) deve retornar categoria = open
        usuario(40, 8) deve retornar categoria = open
        usuario(0, -1) deve retornar categoria vazia
