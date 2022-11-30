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

# Entities
    Membro 
        idade
        handicap
        categoria

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
    should return -100 if age less than zero 🚧

# Pomodoro 2 ( 30-11-22 - 25min / 5min pause)
    validar se a o handicap é um valor valido enter -2 e 26
        maior que -2
        igual a -2 
        menor que -2 
        menor que 26
        igual a 26
        maior que 26
        valor entre -2 e 26
