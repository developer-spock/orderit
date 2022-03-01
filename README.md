<p align="center">
  <a href="https://sanic.readthedocs.io/en/stable/" target="blank"><img src="https://raw.githubusercontent.com/sanic-org/sanic-assets/master/png/sanic-framework-logo-400x97.png" width="320" alt="Nest Logo" /></a>
  <a href="https://kr.vuejs.org/v2/guide/index.html" target="blank"><img src="https://camo.githubusercontent.com/c8f91d18976e27123643a926a2588b8d931a0292fd0b6532c3155379e8591629/68747470733a2f2f7675656a732e6f72672f696d616765732f6c6f676f2e706e67" width="80" alt="Nest Logo" /></a>
</p>

[![Python](https://img.shields.io/badge/Python-v3.8.0-brightgreen.svg?style=flat-square&logo=python&logoColor=ed1543)](https://www.python.org/)
[![NodeJS](https://img.shields.io/badge/Node.js-v12.16.2-brightgreen.svg?style=flat-square&logo=node.js&logoColor=green)](https://nodejs.org/)
[![NodeJS](https://img.shields.io/badge/NPM-v6.14.4-brightgreen.svg?style=flat-square&logo=npm&logoColor=green)](https://npmjs.com/)
[![Sanic](https://img.shields.io/badge/Sanic-v19.12.2-brightgreen.svg?style=flat-square&logo=sanic&logoColor=green)](https://npmjs.com/)
[![Vue](https://img.shields.io/badge/Vue-v2.5.11-brightgreen.svg?style=flat-square&logo=vue&logoColor=green)](https://kr.vuejs.org/v2/guide/index.html)
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>

## Description

[Sanic](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation
  - development environment
  - Install [git v2.34.1-64bit](https://github.com/git-for-windows/git/releases/download/v2.34.1.windows.1/Git-2.34.1-64-bit.exe)
  - Install [node-v12.16.2-x64](https://nodejs.org/dist/v12.16.2/node-v12.16.2-x64.msi)
  - Install [python-3.8.0-arm64](https://www.python.org/ftp/python/3.8.0/python-3.8.0-amd64.exe)
  - Install [SQL2019-SSEI-Dev](https://go.microsoft.com/fwlink/?linkid=866662)
  - Install [SSMS-Setup-KOR](https://aka.ms/ssmsfullsetup)
  - Install [vs_buildtools](https://aka.ms/vs/16/release/vs_buildtools.exe)
  - Install [VSCode](https://code.visualstudio.com/)
  
  - front-end
    ```bash
    $ cd lager/
    $ npm install
    ```
  - back-end
    ```bash
    $ python -m venv venv
    $ curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
    $ python get-pip.py
    $ pip install -r requirements.txt
    ```
    
## Running the app
  - front-end
    ```bash
    $ cd lager/
    
    # development & watch mode
    $ npm run serve
    
    # build
    $ npm run build
    ```
  - back-end
    ```bash
    $ python run.py
    
## License
Nest is [MIT licensed](LICENSE).
