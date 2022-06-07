import { Navigation } from "react-native-navigation";
import App from "./App";
import HomeScreen from './src/screens/Home'

// register all the components
Navigation.registerComponent('app.BookList.HomeScreen', () => HomeScreen);

// Listen for project start event
Navigation.events().registerAppLaunchedListener(() => {
  // Default Options
  Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#4d089a'
  },
  topBar: {
    largeTitle: {
      visible: true,
    },
  }
});

  // Set root
   Navigation.setRoot({
     root: {
       stack: {
         children: [
           {
             component: {
               name: 'app.BookList.HomeScreen',
               options: {
                 topBar: {
                   title: {
                     text: 'Book List',
                   }
                 }
               }
             }
           }
         ]
       }
     }
  });

});