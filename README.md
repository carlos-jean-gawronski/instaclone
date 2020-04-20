<br/>
<p align="center">INSTACLONE</p>
<br/>

## Sobre o projeto

Este projeto foi desenvolvido com o intuíto de reproduzir um clone da interface do Instagram seguindo o tutorial no canal do YouTube  da Rocketseat. Feito com React Native, JSON Server e axios para as requisiçes.

## Começando
Para executar esse projeto, basta abrir o terminal ou prompt de comando dentro da pasta do projeto e rodar:

```bash
npm install

react-native start
```

Caso você não tenha o seu ambiente configurado para desenvolver com React Native, siga o tutorial da Rocketseat para instalação.

[Ambiente React Native (Android/iOS)](https://docs.rocketseat.dev/ambiente-react-native/introducao)

---

## Passo Adicional no Android
Para que os gestos sejam habilitados no Android é necessário um passo a mais, que é bem simples, abra o arquivo `android/app/src/main/java/<pacote_do_projeto>/MainActivity.java`, e começe importando os pacotes como abaixo:

```java
// ...
import com.facebook.react.ReactActivity;
// Importações adicionadas
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
```

Feito a importação vamos criar um método novo, logo abaixo do `getMainComponentName()`, ficando:

```java
public class MainActivity extends ReactActivity {
  @Override
  protected String getMainComponentName() { ... }
  // Método adicionado
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected ReactRootView createRootView() {
        return new RNGestureHandlerEnabledRootView(MainActivity.this);
      }
    };
  }
}
```

---

## Contribuições

Contribuições são o que fazem a comunidade open source um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será **muito apreciada**.

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/FeatureIncrivel`)
3. Adicione suas mudanças (`git add .`)
4. Comite suas mudanças (`git commit -m 'Adicionando uma Feature incrível!`)
5. Faça o Push da Branch (`git push origin feature/FeatureIncrivel`)
6. Abra uma Pull Request

## Contato 

Carlos Jean Gawronski - [Github](https://github.com/carlos-jean-gawronski)
