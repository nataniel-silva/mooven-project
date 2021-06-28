# MoovenAngular

Rodar `ng serve` para levantar a aplicação em `http://localhost:4200/`.

No docker `ng serve --host 0.0.0.0 --disable-host-check`

Com arquivo de host configurado(Prod) `ng build`, acessar pelo hostname (arquivo de configuração em `./config/mooven-portal.conf`)

Configurar em `./src/environments/environment<>.ts` a variável `urlApi`, que deve conter o endereço para onde será apontado o backend(persistência de dados) da aplicação.

Versão de desenvolvimento
Angular CLI: 8.2.2
Node: 12.20.0
OS: linux x64
Angular: 8.2.14

