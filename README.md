# Desafio 01 - Agilizei

#### 1. Clone o projeto

```
git clone https://github.com/Bonfipa/desafio01.git
cd desafio01
```

#### 2. Atualize as dependencias

```
npm install
```
#### 3. Execute o cypress com interface gráfica
```
npm run cy:open 
```
#### 4. Execute o cypress via linha de comando
```
npm run cy:run
```
#### 5. Execute os testes via linha de comando e gere relátorio
```
npm run cy:run
npm run cy:report:merge
npm run cy:report:mocha
```

#### 6. Se tiver necessidade, exclua os aquivos gerados para o relátorio
```
npm run cy:report:clean
```

# Integração com Github pages

* A cada pull request ou push todos os testes são executados. O relatório pode ser acessado [aqui](https://bonfipa.github.io/desafio01/)
