FROM node:slim
RUN apt-get update && apt-get install -y dos2unix


WORKDIR /work

COPY package.json /work/

RUN npm i npm@latest -g && \
    npm install -g @angular/cli@latest


RUN npm install --force

COPY . /work/

RUN dos2unix /work/entrypoint.sh && apt-get --purge remove -y dos2unix && rm -rf /var/lib/apt/lists/*


ENTRYPOINT ["sh", "/work/entrypoint.sh"]