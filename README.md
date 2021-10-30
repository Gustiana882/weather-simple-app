# Weather Simple App

<div>
  <img src="https://user-images.githubusercontent.com/55304067/139524222-1a4ac68b-e46c-4e19-9d6d-14ed7103fa2d.png" width="1000px" alt="Arkademylogo.svg" />
</div>

### Git Clone
```bash
git clone git@github.com:Gustiana882/weather-simple-app.git
```

### Package Install

```bash
cd weather-simple-app

yarn install
```

### Run App
```bash
yarn start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Yarn Build
```bash
yarn run build
``` 

### Build With Docker Image
```bash
docker build -t weatherApp .
```

### Run With Docker Image
```bash
docker run --rm -d -p 80:80 weatherApp
```
